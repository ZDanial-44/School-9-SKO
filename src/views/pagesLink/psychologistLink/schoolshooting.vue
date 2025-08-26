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
  "schoolshooting1.jpg",
  "schoolshooting2.jpg",
  "schoolshooting3.jpg",
  "schoolshooting4.jpg",
  "schoolshooting5.jpg",
  "schoolshooting6.jpg",
];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(
        `@/assets/images/pages/psychologistImages/schoolshooting/${file}`
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
              ? "Кәмелетке толмағандар арасындағы құқық бұзушылықтардың алдын алу"
              : "Профилактика буллинга и правонарушений среди несовершеннолетних"
          }}
        </h1>
      </div>
      <p>
        {{
          lang === "kz"
            ? `Кәмелетке толмағандар арасындағы құқық бұзушылықтардың алдын алу мақсатында «Ахмет Байтұрсынұлы атындағы № 9 ОМ» КММ-де 8-11 сынып оқушылары үшін «құқықтық сауаттылық сабағы: жанжал емес, толеранттылық, құрмет» өткізілді. Сабақта сұрақтар қарастырылды: толерантты мінез-құлықтың мәні неде, толеранттылық түрлері, жанжалда өзін қалай сындарлы ұстау керек және басқаларға деген құрмет қандай көрінеді.`
            : `В целях профилактики буллинга и правонарушений среди несовершеннолетних в КГУ «СШ № 9 имени Ахмета Байтурсынулы» проведен «Урок правовой грамотности: не конфликтность, толерантность, уважение» для учащихся 8-11 классов. На занятии рассматривались вопросы: в чем суть толерантного поведения, виды толерантности, как конструктивно вести себя в конфликте и в чем проявляется уважение к другим.`
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
