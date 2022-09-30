<template>
  <div class="ayurveda">
    <div class="ma-4 text-center">
      <div class="text-h4 font-weight-bold ma-4">Ayurveda Avataranam</div>
      <div class="text-center mx-16">
        Ayurveda is not an experimental ideolgy created by a group of
        researchers. It is a complete science contemplated by our rishis for a
        better livelihood. This science is directly extracted from the vedas
        given to us by lord brahma. This knowledge was shared to theirs
        disciples and documented by our acharyas.
      </div>
    </div>
    <div v-for="ayurveda in ayurvedas" :key="ayurveda.name" class="ma-8">
      <div class="font-weight-bold text-h6">{{ ayurveda.name }}</div>
      <div>{{ ayurveda.text }}</div>
    </div>

    <div class="text-center">
      <div class="text-h5 font-weight-bold ma-4">
        Ashtanga ayurveda ( 8 branches of ayurveda)
      </div>
      <div>
        Kayachikitsa - General Medicine <br />
        Shalyatantra• Surgery<br />
        Kaumarabhrityam- paediatrics<br />
        Damshtra Chikitsa - Toxicology<br />
        Graha Chikitsa - Psychiatry<br />
        Jara Chikitsa - Geriatrics<br />
        Shalakyatantra - ENT and Ophthalmology<br />
        Vrsha Chikitsa - Rejuvenation Therapy<br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AyurvedaPage",
  data() {
    return {
      ayurvedas: [
        {
          name: "DINACHARYA",
          text: "We all know prevention is better than cure. Ayurveda is the only science which clearly speaks about it. Dinacharya is one among the initial chapters which teaches an ideal daily routine and its importance.",
        },
        {
          name: "Brahme muhurte utthishtet",
          text: "The ideal time to wake is 45 minutes before sunrise when the nature is at peace. This phase of the day allows the mind to at remain at peace. Ayurveda says to meditate upon ourselves for a few minutes before starting the day. This helps us make better decisions during the day.",
        },
        {
          name: "Shouchavidhi",
          text: "The elimination stools and urine plays an important role in maintenance of health. One has to pass stools in the north-south direction. Complete and proper evacuation of excreta prevents most of the dieases and keeps the body active and light.",
        },
        {
          name: "Danta dhavanam",
          text: "The powders used for cleaning the oral cavity have to be astringent, spicy or bitter taste. This will help to remove the polluted mucus out of the system. This will also help in improving digestion process. Whereas sweet based pastes accumulates mucus and hampers digestion.",
        },
        {
          name: "Anjanam",
          text: "Application of properly processed collyrium(kajal) helps in improving vision and keeps the eyes hydrated and healthy. it also prevents diseases like cataract related to ageing.",
        },
        {
          name: "Navanam, gandoosham",
          text: "Nasal drop and retention of oil in mouth helps to cure disease related to ENT problems and also it helps in treating sinusitis, headache and mouth ulcers.",
        },
        {
          name: "Abhyangam",
          text: "Oil massage helps in promoting longevity, prevents ageing, strengthens all joints, nourishes the body, improves complexion of skin and eye sight..",
        },
        {
          name: "Vyayamam",
          text: "Exercising daily helps to remove excess of fat from the body, improve digestion, promotes lightness of the body and gives stable physique.",
        },
        {
          name: "Snanam",
          text: "Bathing helps in improving appetite and lightens the mind. It also helps to remove odourand burning sensation from the body. Snana stimulates all sense organs.",
        },
        {
          name: "Aharam",
          text: "Food is the only source of energy for the body and mind. Healthy diet is not about adopting a new food pattern. it is rather giving what the body (not mind) asks for. It requires adequate quantity, properly cooked and timely food with appetite. Our rishis have created different traditions and food patterns according to the climatic conditions of various terrains.",
        },
        {
          name: "Nidra",
          text: "Sleep is required for the nourishment of the body. Adequate sleep does not depend on the duration of sleep but on the quality of sleep. Even 2 hours of deep sleep can be more nourishing than 8 hours of disturbed sleep.",
        },
        {
          name: "RTUCHARYA",
          text: "There are six seasons annually. Our acharyas have properly contemplated food patterns and activities according to the change in weather. They have also embedded various festival and its offerings with respect to this change to balance ones health. When there is a change in the season, acharyas have spoken on how to transform from one seasonal regimen to the next.",
        },
      ],
    };
  },
};
</script>

<style>
.ayurveda {
  background-image: url("../assets/designs/ourdoctors-1.png");
  background-position: center;
  background-repeat: repeat-x;
  background-size: cover;
}
</style>
