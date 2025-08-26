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
  "The-World-of-Professions1.jpeg",
  "The-World-of-Professions2.jpeg",
  "The-World-of-Professions3.jpeg",
  "The-World-of-Professions4.jpeg",
  "The-World-of-Professions5.jpeg",
  "The-World-of-Professions6.jpeg",
];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(
        `@/assets/images/pages/WhereToStudy/The-World-of-Professions/${file}`
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
              ? "Мамандықтар әлемі – балаларға арналған экскурсиялар"
              : "Мир Профессий — экскурсии для детей"
          }}
        </h1>
      </div>
      <p>
        {{
          lang === "kz"
            ? `2025 жылдың 14 сәуірінде «А.Байтұрсынұлы атындағы №9 орта мектеп» КММ-нің 10-сынып оқушылары Солтүстік Қазақстан облысы Қорғаныс істері жөніндегі Департаментінің кинологиялық қызмет көрсету орталығына барып, кинолог мамандығымен танысты. Оқушылар кинологтың кім екенін және немен айналысатынын білді. Полицейлер балаларға иттерді үйретуде қолданылатын құралдардың арсеналын көрсетті, сондай-ақ үйрету тәсілдері туралы айтып берді, өз үй жануарларымен таныстырды.`
            : `14.04.2025 года учащиеся 10 классов КГУ «Средняя школа № 9 имени А. Байтурсынулы» посетили Центр кинологической службы ДП СКО, где ознакомились с профессией кинолог. Ученики узнали, кто такой кинолог и чем он занимается. Полицейские  показали детям арсенал приспособлений, которые используются при обучении собак, а также рассказали о приёмах дрессировок, познакомили со своими питомцами.`
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
