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
  "personal-boundaries1.jpg",
  "personal-boundaries2.jpg",
  "personal-boundaries3.jpg",
  "personal-boundaries4.jpg",
  "personal-boundaries5.jpg",
  "personal-boundaries6.jpg",
];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(
        `@/assets/images/pages/psychologistImages/personal-boundaries/${file}`
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
              ? "Жеке шекаралар "
              : "Личные границы"
          }}
        </h1>
      </div>
      <p>
        {{
          lang === "kz"
            ? `Жеке шекаралардың қайдан басталатынын және қай жерде аяқталатынын қалай анықтауға болады, оларды қалай сақтауға және қорғауға болады? Осы сұрақтардың барлығын 10 сынып оқушылары педагог-психолог Т.В. Поповамен «жеке шекаралар, оларды қорғау және қорлауға қарсы тұру»тренингінде талқылады. Оқушылар шекара түрлерімен танысты және техникалар мен жаттығулар арқылы өз шекараларының қай жерде екенін анықтап, олардың бұзылу сәттерін жазуды үйренді.`
            : `Как выявить, где начинаются и где заканчиваются личные границы, как их сохранить и отстаивать? Все эти вопросы обсудили учащиеся 10 классов с педагогом-психологом Поповой Т.В. на тренинге «Личные границы, их защита и противодействие травле». Учащиеся познакомились с видами границ, и с помощью техник и упражнений научились определять, где находятся собственные границы и фиксировать моменты их нарушения.`
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
  grid-template-columns: repeat(2, minmax(50px, 1fr));
}
.gallery-image {
  max-height: 350px;
}
</style>
