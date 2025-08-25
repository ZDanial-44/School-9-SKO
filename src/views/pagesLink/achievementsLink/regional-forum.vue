<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});

const images = ref([]);

const fileNames = ["regional-forum1.jpg", "regional-forum2.jpg", "regional-forum3.jpg"];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(
        `@/assets/images/pages/achievementsImages/regional-forum/${file}`
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
      <h1>
        {{
          lang === "kz"
            ? "3 орын облыстық жас өлкетанушылар форумында"
            : "3 место в Областном форуме юных краеведов"
        }}
      </h1>
      <p>
        {{
          lang === "kz"
            ? `Фурманюк Ирина Юрьевнаның жетекшілігімен жас өлкетанушылар , экологтар мен 
            натуралистердің «тірі планета»облыстық форумында, «Экотеатр»номинациясында 3 
            орын алғаны үшін мектеп оқушыларын құттықтаймыз.`
            : `Поздравляем учащихся нашей школы за занятое 3 место в Областном форуме 
            юных краеведов , экологов и натуралистов «Живая планета»,в номинации «Экотеатр»,
            под руководством Фурманюк Ирины Юрьевны.`
        }}
      </p>
      <div class="galleryContainer">
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
    <div class="bottomP"></div>
  </div>
</template>

<style scoped>
.gallery {
  grid-template-columns: repeat(1, minmax(50px, 1fr));
}
</style>
