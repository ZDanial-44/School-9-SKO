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
  "traditions-and-customs1.jpg",
  "traditions-and-customs2.jpg",
  "traditions-and-customs3.jpg",
  "traditions-and-customs4.jpg",
  "traditions-and-customs5.jpg",
  "traditions-and-customs6.jpg",
  "traditions-and-customs7.jpg",
  "traditions-and-customs8.jpg",
  "traditions-and-customs9.jpg",
  "traditions-and-customs10.jpg",
  "traditions-and-customs11.jpg",
  "traditions-and-customs12.jpg",
];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(
        `@/assets/images/pages/achievementsImages/traditions-and-customs/${file}`
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
            ? "«Ұлы даланың салт-дәстүрлері-Қазақстан халқының бірлігі мен өзіндік ерекшелігін нығайтудың негізі»"
            : "«Традиции и обычаи великой степи-основа укрепления единства и самобытности народа Казахстана»"
        }}
      </h1>
      <p>
        {{
          lang === "kz"
            ? `Наурыз мейрамы қарсаңында  «А. Байтұрсынұлы атындағы №9 орта мектеп» КММ  6-сынып оқушылары арасында «Ұлы даланың салт-дәстүрлері-Қазақстан халқының бірлігі мен өзіндік ерекшелігін нығайтудың негізі» ұлттық мәдениеттер фестивалі өтті.`
            : `В преддверии празднования Наурыз мейрамы, в КГУ «Средняя школа №9 имени А.Байтурсынулы» на параллели 6 классов , состоялся Фестиваль национальных культур «Традиции и обычаи великой степи-основа укрепления единства и самобытности народа Казахстана».`
        }}
      </p>
      <p>
        {{
          lang === "kz"
            ? `Фестиваль оқушылардың Қазақстан аумағында тұратын халықтармен, олардың салт-дәстүрлерімен таныстыру арқылы халықтардың тарихы мен мәдениетін құрметтеу мақсатында өткізілді.`
            : `Фестиваль проводился с целью формирования у учащихся уважения к истории и культуре народов через знакомство с народами, проживающими на территории Казахстана, с их традициями и обычаями.`
        }}
      </p>
      <p>
        {{
          lang === "kz"
            ? `Байқау жеңімпаздары грамоталармен марапатталды.`
            : `Победители конкурса награждены грамотами.`
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
