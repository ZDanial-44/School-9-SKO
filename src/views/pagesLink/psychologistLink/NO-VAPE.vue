<script setup>
import { ref, onMounted, computed, watch } from "vue";

const { lang } = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});

const images = ref([]);

// реактивный список файлов
const fileNames = computed(() =>
  lang === "kz"
    ? ["NO-VAPE-kz1.jpg", "NO-VAPE-kz2.jpg", "NO-VAPE-kz3.jpg"]
    : ["NO-VAPE-ru1.jpg", "NO-VAPE-ru2.jpg", "NO-VAPE-ru3.jpg"]
);

async function loadImages() {
  const loaded = [];

  for (const file of fileNames.value) {
    try {
      const mod = await import(
        `@/assets/images/pages/psychologistImages/NO-VAPE/${file}`
      );
      loaded.push(mod.default || mod);
    } catch (e) {
      console.error(`Не удалось загрузить изображение: ${file}`, e);
    }
  }

  images.value = loaded;
}

onMounted(loadImages);

watch(fileNames, () => {
  loadImages();
});
</script>

<template>
  <div class="backgroundFrame">
    <div class="page pageFour">
      <div class="toCenter">
        <h1>
          {{ lang === "kz" ? "ВЕЙПКЕ «ЖОҚ» де" : "Скажите ВЕЙПУ «НЕТ»" }}
        </h1>
      </div>
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
