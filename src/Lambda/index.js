const AWS = require("aws-sdk");
var ses = new AWS.SES();
const axios = require("axios");

const reCapUrl = "https://www.google.com/recaptcha/api/siteverify";

const reCaptchaSecret = "6LdOtacaAAAAANt4uS119ZqzAm701N6hT6jicRwT";

const allowedorigin = [
  "https://dev.d22aqw84h9or3b.amplifyapp.com",
  "http://localhost:8080",
  "https://srianjaneyamayurveda.in",
];

const SES_FROM_MAIL = "websitenotifications@srianjaneyamayurveda.in";
const SES_TO_MAIL = ["srianjaneyamayurveda@gmail.com"];

exports.handler = async (event, context, callback) => {
  let body;
  try {
    body = JSON.parse(event.body);
  } catch (Error) {
    sendResponse(callback, 401, "Access Denied");
  }

  let origin = event.headers.origin;
  console.log("origin: ", origin);
  if (!allowedorigin.includes(origin)) {
    sendResponse(callback, 401, "Access Denied");
  }

  let captcha;
  try {
    captcha = body["token"];
  } catch (error) {
    sendResponse(callback, 401, "Access Denied");
  }

  if (captcha) {
    let verifyResult = await axios.post(reCapUrl, {
      secret: reCaptchaSecret,
      response: captcha,
    });

    if (verifyResult.status === 200) {
      // sendResponse(callback, 200, "authenticated");
      let { Mail, Message, Name, Phone, department, doctor } = body;
      let MESSAGE = `
      <strong>Hello</strong>, <br/>
      ${Name} is trying to reach you <br /> <br />
      ${Name}'s Message: <br />
      ${Message}.
      <br /> <br />
      you can revert back to the user at
      ${Phone}, ${Mail} <br />
      <br/>
      This is an auto generated mail. dont reply
      <br />


      `;

      let subject = `${Name} is trying to reach you `;

      if (department) subject += ` | Department: ${department}`;
      if (doctor) subject += ` | Doctor:  ${doctor}`;

      console.log("MESSAGE: ", MESSAGE);
      console.log("subject: ", subject);

      let response = await sesSendMail(subject, MESSAGE);
      console.log("response: ", response);
      if (response) {
        console.log("Success");
        sendResponse(callback, 200, "Ok");
      } else {
        sendResponse(callback, 500, "Error");
      }
    } else {
      console.log("reCaptcha check failed. Most likely SPAM.");
      sendResponse(callback, 401, "Access Denied");
    }
  } else {
    sendResponse(callback, 401, "Access Denied");
  }
};

function sendResponse(callback, statusCode, message) {
  callback(null, {
    statusCode,
    headers: {
      "content-Type": "application/json",
      "access-control-allow-methods": "GET,OPTIONS,DELETE, POST, PATCH",
      "access-control-allow-headers": "*",
    },
    body: JSON.stringify(message),
  });
  return;
}

function sesSendMail(subject, MESSAGE) {
  var params = {
    Source: SES_FROM_MAIL,
    Destination: {
      ToAddresses: SES_TO_MAIL,
    },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: MESSAGE,
        },
      },
    },
  };
  return new Promise((resolve, reject) => {
    ses.sendEmail(params, function (err, data) {
      if (err) {
        console.log(err, err.stack); // an error occurred
        reject(false, err);
      } else {
        console.log(data); // successful response
        resolve(data);
      }
    });
  });
}
