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
  "rainbow-tour1.jpeg",
  "rainbow-tour2.jpeg",
  "rainbow-tour3.jpeg",
];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(
        `@/assets/images/pages/WhereToStudy/rainbow-tour/${file}`
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
            ? "«Радуга» ЖШС-не экскурсия"
            : "Экскурсия в ТОО «Радуга»"
        }}
      </h1>
      <p>
        {{
          lang === "kz"
            ? `Жұмысшы мамандықтар жылы аясында 9-сынып оқушылары өңірдегі ең ірі кәсіпорындардың бірі – «Радуга» ЖШС-не экскурсия жасады. Бұл ірі өндірістік-дистрибуциялық компания Қазақстан нарығында жетекші орындардың бірін иеленіп отыр. Оқушылар азық-түлік өнімдерінен бастап тұрмыстық және шаруашылық тауарларына дейінгі әртүрлі бағыттағы тауарлардың өндіріс үдерісімен танысты.`
            : `В рамках Года рабочих профессий учащиеся 9 классов посетили ТОО «Радуга» – одно из крупнейших предприятий региона. Эта крупная производственно-дистрибуционная компания уверенно занимает лидирующие позиции на рынке Казахстана. Учащиеся ознакомились с процессом изготовления товаров различного профиля: от продуктов питания до хозяйственно-бытовых товаров.`
        }}
      </p>
      <p>
        {{
          lang === "kz"
            ? `Оқушыларға «Бескөл мектеп-колледжі» ЖШС колледжіне түсу мүмкіндіктері мен түлектерге ашылатын болашағы зор перспективалар туралы ақпарат берілді.`
            : `Школьникам рассказали о поступлении в колледж ТОО «Бескольская школа-колледж» и о перспективах, которые открываются перед выпускниками.`
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
