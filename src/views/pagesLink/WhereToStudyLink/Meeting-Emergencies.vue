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
              ? "Төтенше жағдайлар департаментінің өкілдерімен кездесу"
              : "Встреча с представителями департамента по Чрезвычайным ситуациям"
          }}
        </h1>
      </div>
      <p>
        {{
          lang === "kz"
            ? `2025 жылдың 21 сәуірінде Қазақстан Республикасы М.Ғабдулин атындағы Азаматтық қорғаныс академиясына оқуға түсу бойынша 11 сынып оқушыларымен кәсіптік бағдар беру кездесуі өтті.`
            : `21 апреля 2025 года с учащимися 11 классов проведена профориентационная встреча по поступлению в Академию гражданской защиты им. М Габдулина Республики Казахстан.`
        }}
      </p>
      <p>
        {{
          lang === "kz"
            ? `Оқушыларға Академияның қызметі туралы ақпарат беріліп, буклеттер таратылды.  Оқуға түсу тәртібі мен оқу шарттары түсіндірілді.`
            : `Учащимся доведена информация  о деятельности Академии, розданы буклеты.  Разъяснен порядок поступления и условия обучения.`
        }}
      </p>
      <div class="gallery galleryContainer">
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
  grid-template-columns: repeat(2, minmax(50px, 1fr));
}

.gallery-image {
  max-height: 700px;
}
</style>
