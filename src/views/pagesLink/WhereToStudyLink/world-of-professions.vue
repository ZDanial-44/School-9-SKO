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
  "world-of-professions1.jpeg",
  "world-of-professions2.jpeg",
  "world-of-professions3.jpeg",
];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(
        `@/assets/images/pages/WhereToStudy/world-of-professions/${file}`
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
            ? "«Мен мамандықтар әлеміндемін»"
            : "«Я в мире профессий»"
        }}
      </h1>
      <p>
        {{
          lang === "kz"
            ? `едагог-кәсіптік бағдар беруші Г.С.Шарбактаева мектеп кітапханасында 9 сынып оқушыларымен «Мен мамандықтар әлеміндемін» тақырыбында кәсіптік бағдар беру жұмысы бойынша іс-шара өткізді.  Іс-шараның мақсаты оқушыларды кәсіптердің жіктелуімен, кәсіптер туралы ақпараттық кеңістікпен таныстыру, әртүрлі қызмет түрлеріне қызығушылықты ояту. `
            : `Педагогом-профориентатором Шарбактаевой Г.С.  в библиотеки школы проведено мероприятие по профориентационной работе с   учащимися 9 классов на тему «Я в мире профессий».  Цель мероприятия ознакомить учащихся с классификацией профессий, информационное пространство о профессиях, привить интерес к различным видам деятельности.`
        }}
      </p>
      <p>
        {{
          lang === "kz"
            ? `Әлемде мыңдаған мамандықтар бар. Бұл әртүрлілікті түсіну және өз таңдауыңызды жасау оңай ма? Мамандық өз қалауы бойынша таңдалуы керек, адамды қызықтыруы керек. Сонда ол адамға қуаныш сыйлайды. Адам мамандықты бірден, дайындықсыз ала ала ма? Бұл тақырыпта тоғызыншы сынып оқушылары сөйледі.`
            : `Профессий в мире – тысячи. Легко ли разобраться в этом многообразии и сделать свой выбор? Профессия должна быть выбрана по душе, должна интересовать человека. Тогда она будет приносить человеку радость. Может ли человек получить профессию сразу, без подготовки? На эту тему говорили девятиклассники.`
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
  max-height: 700px;
}
</style>
