<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});

const images = ref([]);

const fileNames = ["Meeting-Emergencies1.jpeg", "Meeting-Emergencies2.jpeg", "Meeting-Emergencies3.jpeg"];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(`@/assets/images/pages/WhereToStudy/Meeting-Emergencies/${file}`);
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
              ? "Кәсіптік бағдар беру"
              : "Профориентация"
          }}
        </h1>
      </div>
      <p>
        {{
          lang === "kz"
            ? `11 сәуірде 11 сынып оқушыларымен ҚР ІІМ Қарағанды академиясының өкілдерімен полиция подполковнигі Берген Ерболатович Жаксыбаевпен кездесу өтті.`
            : `11 апреля состоялась встреча с участившимися 11 классов с представителями Карагандинской академии МВД РК подполковником полиции Жаксыбаев Берген Ерболатович.`
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
  grid-template-columns: repeat(2, minmax(50px, 1fr));
}

.gallery-image {
  max-height: 700px;
}
</style>
