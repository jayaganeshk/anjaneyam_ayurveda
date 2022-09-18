const Doctors = [
  {
    id: 0,
    name: "Dr. M.MANOGAR",
    qal: "BAMS",
    des: "Chief Physician",
    src: require("@/assets/doctors/manohar.jpeg"),
    text: [
      "Insightful young man with inclination to bring in not just physical health but also spiritual health in the society.",
      "An alumnus of Sri Jayendra Saraswati Ayurvedic College and Hospital,he took one year of intense training under Dr.Sanal Chandran at Anjaneyam Ayurveda Hospital, Payyanur before starting a clinic of his own at Kumbakonam.",
      "Dr.Manogar with his healing hand has been practicing for the past 11 years in Kumbakonam and has gained a high reputation among the people in and around Kumbakonam.",
      "He also gives talks and lectures about Ayurveda to a vast audience from different walks of life.",
      "To him ayurveda is not just diagnosing patients and giving medicines, Ayurveda is a way of life that helps each soul reach its destination with the help of this body as the fittest instrument.",
    ],
    visiting: [
      {
        loc: "Kumbakonam",
        time: "Outpatient- 10:00AM-1:30PM",
      },
      {
        loc: "Inam kiliyur",
        time: "In patient- 6:00PM-8:00PM",
      },
      {
        loc: "Chennai",
        time: "1st Sunday- Mangadu, Chennai 10:00AM -2:00PM",
      },
    ],
  },
  {
    id: 1,
    name: "Dr. JAYASRI MANOGAR",
    qal: "BHMS",
    des: "Homeopathic Doctor",
    src: require("@/assets/doctors/JayasriManogar.jpeg"),
    text: [
      "Wife of Dr.M.Manogar, she is a Classical Homeopathic Practitioner with her unique and simple patient handling techniques",
      "She is a meritorious alumnus of Government Homeopathy Medical College, Madurai.",
      "She has been practicing in Anjaneyam for the past four years. She focuses and Gynecology and Toxicology. ",
    ],
    visiting: [
      {
        loc: "Kumbakonam",
        time: "4:30PM-7:00PM",
      },
    ],
  },
  {
    id: 2,
    name: "Dr. R.KESHAV RAM",
    qal: "BAMS",
    des: "Diabetes Management",
    src: require("@/assets/doctors/Dr. T.PRASANTH.jpeg"),
    text: [
      "Dynamic young Ayurveda practitioner with a distinctive approach towards the patient and the disease",
      "He is an alumnus of Sri Jayendra Saraswati Ayurveda College and Hospital. He has been practicing in Anjaneyam for the past 3 years. ",
    ],
    visiting: [
      {
        loc: "Inamkiliyur",
        time: "In Patient -10:00AM -1:00PM ",
      },
      {
        loc: "Selvam Medicals Kumbakonam",
        time: "Out Patient - 6:30PM-8:30PM",
      },
      {
        loc: "Chennai",
        time: "3rd Sunday 10:00AM-2:00PM",
      },
    ],
    Specialisation: [
      "Diabetes Mellitus",
      "Thyroid Gland Dysfunction",
      "Harmonal Imbalances",
      "Kshara Sutram",
      "Wound Management",
    ],
  },
  {
    id: 3,
    name: "Dr. R.ROOBINI",
    qal: "BAMS",
    des: "Skin Care",
    src: require("@/assets/doctors/Roobini.jpeg"),
    text: [
      "Progmatic and empathetic young Ayurveda practitioner",
      "She is also an alumnus of Sri Jayendra Saraswati Ayurveda College and Hospital.",
      "She has been practicing at Anjaneyam for the past 3 years.",
    ],
    visiting: [
      {
        loc: "Inamkiliyur",
        time: "In Patient -10:00AM-1:00PM",
      },
      {
        loc: "ARR Ayurveda Vaidyashala Kumbakonam",
        time: "Out Patient - 5:00PM-8:00PM",
      },
    ],
    Specialisation: [
      "Skin care",
      "Cosmetology",
      "Leach Therapy",
      "Anorectal care",
    ],
  },
  {
    id: 4,
    name: "Dr. T.PRASANTH",
    qal: "BAMS",
    des: "Varma Chikitsa",
    src: require("@/assets/doctors/Dr. T.PRASANTH.jpeg"),
    text: [
      "Lively and impulsive young Ayurveda practitioner",
      "He is also an alumnus of Sri Jayendra Saraswati Ayurveda College and Hospital",
      "He has been practicing at Anjaneyam for the past 1 year",
    ],
    visiting: [
      {
        loc: "Inamkiliyur",
        time: "In Patient 5:00PM - 7:00PM ",
      },
      {
        loc: "Chennai Ayurveda Pharmacy, West mambalam",
        time: "All Sundays 4:00PM - 9:00PM",
      },
    ],
    Specialisation: ["Varma therapy"],
  },
  {
    id: 5,
    name: "Dr. K.MANISUNDAR",
    qal: "BNYS",
    des: "Yoga and Diet",
    src: require("@/assets/doctors/Dr. T.PRASANTH.jpeg"),
    text: [
      "Compassionate young Naturopathy and Yoga practitioner",
      "He is an alumnus of Sri Ramakrishna Naturopathy College, Nagercoil.",
      "He has done his internship from various hospitals in and around Tamil Nadu.",
    ],
    Specialisation: ["Yoga", "Naturopathy", "Diet modifications"],
  },
  {
    id: 6,
    name: "Dr. V.RAHINI",
    qal: "BAMS",
    des: "Bhaishajya Kalpana",
    src: require("@/assets/doctors/Rahini.jpeg"),
    text: [
      "Dedicated young Ayurveda practitioner",
      "She is also an alumnus of  Sri Jayendra Saraswati Ayurveda College and Hospital",
      "She has been practicing in Anjaneyam for the past 1 year ",
    ],
    Specialisation: ["Expert in preparation of herbal medicine", "Pediatrics"],
    visiting: [
      {
        loc: "Inamkiliyur",
        time: "In Patient 10:00AM-1:00PM",
      },
    ],
  },
];

export { Doctors };
