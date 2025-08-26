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
  "secure-Internet1.jpg",
  "secure-Internet2.jpg",
  "secure-Internet3.jpg",
  "secure-Internet4.jpg",
];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(
        `@/assets/images/pages/psychologistImages/secure-Internet/${file}`
      );
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
              ? "«Безопасный интернет»"
              : "«Қауіпсіз интернет»"
          }}
        </h1>
      </div>
      <p>
        {{
          lang === "kz"
            ? `«Мен мықты болсам — Қазақстан да мықты» психологиялық денсаулық онкүндігі аясында мектепте 4 және 5 сыныптардың параллельдерінде оқушыларды Интернет желісінде күтіп тұрған қауіп-қатерлермен таныстыру мақсатында «Қауіпсіз интернет» тақырыбында сынып сағаттары өтті. Оқушылар денсаулыққа зиян келтіретін ақпарат түрлері, Интернет қызметтерін жауапты және қауіпсіз пайдалану ережелері, оның ішінде желілердегі қауіпті қол сұғушылықтардан қорғау тәсілдері туралы білді.`
            : `В рамках декады психологического здоровья «Мен мықты болсам — Қазақстан да мықты» в школе на параллелях 4 и 5 классов прошли классные часы на темы «Безопасный интернет» с целью познакомить учащихся с опасностями, которые подстерегают их в сети Интернет. Учащиеся узнали о видах информации, способной причинить вред здоровью, о правилах ответственного и безопасного пользования услугами Интернет, в том числе способам защиты от опасных посягательств в сетях.`
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
.pageFour {
  max-width: 700px;
}

.gallery {
  grid-template-columns: repeat(1, minmax(50px, 1fr));
}
.gallery-image {
  max-height: 950px;
}
</style>
