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
    ? ["bullying-prevention-kz1.jpg", "bullying-prevention-kz2.jpg", "bullying-prevention-kz3.jpg"]
    : ["bullying-prevention-ru1.jpg", "bullying-prevention-ru2.jpg", "bullying-prevention-ru3.jpg"]
);

async function loadImages() {
  const loaded = [];

  for (const file of fileNames.value) {
    try {
      const mod = await import(
        `@/assets/images/pages/psychologistImages/bullying-prevention/${file}`
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
          {{ lang === "kz" ? "Буллингтің алдын алу" : "Профилактика буллинга" }}
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
  max-height: 1550px;
}
</style>
