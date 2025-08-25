<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});

const images = ref([]);

const fileNames = [
  "poetry-contest1.jpg",
  "poetry-contest2.jpg",
  "poetry-contest3.jpg",
  "poetry-contest4.jpg",
  "poetry-contest5.jpg",
  "poetry-contest6.jpg",
  "poetry-contest7.jpg",
  "poetry-contest8.jpg",
  "poetry-contest9.jpg",
  "poetry-contest10.jpg",
  "poetry-contest11.jpg",
  "poetry-contest12.jpg",
];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(`@/assets/images/pages/achievementsImages/poetry-contest/${file}`);
      loaded.push(mod.default || mod);
    } catch (e) {
      console.error(`Не удалось загрузить изображение: ${file}`, e);
    }
  }

  images.value = loaded;
}

onMounted(loadImages);
</script>

<template>
  <div class="backgroundFrame">
    <div class="page pageFour">
      <div class="toCenter">
        <h1>
          {{
            lang === "kz"
              ? "«Менің гүлденген достық Қазақстаным» өлеңдер байқауы"
              : "Конкурс стихотворений «Мой цветущий дружный Казахстан»"
          }}
        </h1>
      </div>
      <p>
        {{
          lang === "kz"
            ? `Қазақстан Республикасы халқының бірлігі күні қарсаңында
            мектепте 1-10 сынып параллельдерінде сынып сағаттары өткізілді; 2 сынып
            параллелінде «менің гүлденген достық Қазақстаным» өлеңдер байқауы; 1-11 сынып
            оқушылары жыл сайынғы «Ақ көгершін-бейбітшілік, жақсылық, жеңіс символы»атты
            мектеп акциясына қатысты. Өткізілген іс-шаралардың мақсаты: оқушылардың бойында
            азаматтық пен патриотизмді қалыптастыруға, өз Отанына деген сүйіспеншілік сезімін,
            оның тарихы мен мәдениетін құрметтеуге, туған өлкенің табиғатына ұқыпты қарауға,
            қазіргі Қазақстанның жетістіктері үшін мақтаныш сезімін тәрбиелеуге ықпал ету.`
            : `В преддверии Дня единства народа Республики Казахстан в школе проведены классные
            часы на параллелях 1-10 классов; конкурс стихотворений «Мой цветущий дружный
            Казахстан» на параллели 2 классов; учащиеся 1-11 классов приняли участие в
            ежегодной школьной акции «Белый голубь -символ мира, добра, Победы». Цель
            проведённых мероприятий: Способствовать формированию у учащихся гражданственности
            и патриотизма, воспитания чувства любви к своей Родине, уважения к ее истории и
            культуре, бережного отношения к природе родного края, гордости за достижения
            современного Казахстана.`
        }}
      </p>
      <div class="gallery">
        <img
          v-for="(src, index) in images"
          :key="index"
          :src="src"
          alt="methodImage"
          class="gallery-image"
        />
      </div>
    </div>
    <div class="bottomP"></div>
  </div>
</template>

<style scoped>
.gallery {
  grid-template-columns: repeat(3, minmax(50px, 1fr));
}
</style>
