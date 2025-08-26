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
  "college-tour1.jpeg",
  "college-tour2.jpeg",
  "college-tour3.jpeg",
];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(
        `@/assets/images/pages/WhereToStudy/college-tour/${file}`
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
            ? "Гуманитарлық-техникалық колледжге экскурсия."
            : "Экскурсия в Гуманитарно-Технический колледж."
        }}
      </h1>
      <p>
        {{
          lang === "kz"
            ? `2025 жылғы 6 мамырда кәсіби бағдар беру жұмысы аясында, оқушылардың оқу орындарының түрлері туралы түсінігін кеңейту, білім беру мекемесін таңдау дағдыларын дамыту мақсатында, «Ахмет Байтұрсынұлы атындағы №9 орта мектеп» КММ-нің 9-сынып оқушылары Гуманитарлық-техникалық колледжге барды.`
            : `6 мая 2025 года в рамках профориентационной работы в целях расширения представления учащихся о типах учебных заведений, развития навыков выбора учебного заведения, учащиеся 9-х классов КГУ «Средняя школа №9 имени А. Байтурсынулы» посетили Гуманитарно-технический колледж.`
        }}
      </p>
      <p>
        {{
          lang === "kz"
            ? `Оқушылар болашақ құрылысшылар, автомеханиктер, радиотехниктер мен веб-дизайнерлерді даярлайтын колледждің материалдық-техникалық базасымен танысты. Колледж өкілдері жұмысшы мамандықтарын насихаттау жұмыстарын жүргізіп, оқушыларға кәсіби диагностикадан өтіп, сертификат алу мүмкіндігі ұсынылды.`
            : `Учащиеся ознакомились с материально-технической базой колледжа, где проходят занятия для будущих строителей, автомехаников, радиотехников и веб-дизайнеров. Представители колледжа провели работу по популяризации рабочих профессий, также ученикам было предложено пройти тестирование на профдиагностику с выдачей сертификата.`
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
  grid-template-columns: repeat(1, minmax(50px, 1fr));
}

.gallery-image {
  max-height: 700px;
}
</style>
