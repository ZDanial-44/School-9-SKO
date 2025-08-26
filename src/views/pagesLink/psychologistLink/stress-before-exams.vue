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
  "psychologist1.jpg",
  "psychologist2.jpg",
  "psychologist3.jpg",
  "psychologist4.jpg",
  "psychologist5.jpg",
  "psychologist6.jpg",
];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(
        `@/assets/images/pages/psychologistImages/stress-before-exams/${file}`
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
              ? "«Түлектерге емтихан алдындағы стрессті жеңуге қалай көмектесуге болады»"
              : "«Как помочь выпускникам справиться со стрессом перед экзаменами»"
          }}
        </h1>
      </div>
      <p>
        {{
          lang === "kz"
            ? `9 және 11 сынып оқушыларына емтихан алдындағы жағдайларды қолдау және көмек көрсету мақсатында мектептің педагог-психологы Т. В. Попова «түлектерге емтихан алдындағы стрессті жеңуге қалай көмектесуге болады»тақырыбында тренингтік сабақтар өткізді. Оқушылар «мазасыздық» деген не, ол қандай қызмет атқарады, қайдан пайда болады, мазасыздықтың артында қандай қорқыныш бар деп ойлады. Түлектерге емтиханға психологиялық дайындалу, өзін-өзі реттеудің қандай әдістері, тыныс алу әдістері, емтиханға дайындықты қалай дұрыс жоспарлау керек және мазасыздық пен емтихан стрессімен күресу қиын болса, қолдауды қайдан табуға болатындығы туралы ұсыныстар берілді.`
            : `В целях поддержки и помощи в предэкзаменационных условиях для учащихся 9 и 11 классов педагогом -психологом школы Поповой Т.В. проведены тренинговые занятия на тему «Как помочь выпускникам справиться со стрессом перед экзаменами». Учащиеся рассуждали, что такое «Тревога», какую она выполняет функцию, откуда берется, какой страх стоит за тревогой. Выпускникам даны рекомендации, как психологически подготовиться к экзаменам, какие есть способы саморегуляции, дыхательные техники, как правильно планировать подготовку к экзаменам и где найти поддержку, если сложно справиться с тревогой и экзаменационным стрессом.`
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
.gallery-image {
  max-height: 350px;
}
</style>
