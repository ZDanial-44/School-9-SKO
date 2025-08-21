<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  lang: { type: String, default: "kz" },
  title: { type: Object, required: true },
  paragraphs: { type: Array, default: () => [] },
  speakers: { type: Array, default: () => [] },
  imagesPath: { type: String, required: true },
  fileNames: { type: Array, default: () => [] },
  paragraphsOne: { type: Array, default: () => [] },
});

const images = ref([]);

async function loadImages() {
  const loaded = [];
  for (const file of props.fileNames) {
    try {
      const mod = await import(
        /* @vite-ignore */ `/src/assets/images/${props.imagesPath}/${file}`
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
      <h1>{{ props.title[props.lang] }}</h1>

      <!-- закрыл <p> корректно -->
      <div v-for="(p, i) in props.paragraphs" :key="i">
        <p v-html="p[props.lang]"></p>
      </div>

      <ul v-if="props.speakers && props.speakers.length">
        <h2>
          {{ props.lang === "kz" ? "Іс-шараға қатысты:" : "В мероприятии приняли участие:" }}
        </h2>
        <li v-for="(sp, i) in props.speakers" :key="i">{{ sp[props.lang] }}</li>
      </ul>
      <div v-for="(p, i) in props.paragraphsOne" :key="i">
        <p v-html="p[props.lang]"></p>
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
.gallery {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, minmax(50px, 1fr));
  margin: 0 auto;
}

.gallery-image {
  border-top: 2px solid var(--color-accent);
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}
</style>
