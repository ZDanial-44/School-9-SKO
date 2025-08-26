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
  "ZIXTO-tour1.jpeg",
  "ZIXTO-tour2.jpeg",
  "ZIXTO-tour3.jpeg",
];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(
        `@/assets/images/pages/WhereToStudy/ZIXTO-tour/${file}`
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
              : "Экскурсия в АО «ЗИКСТО»"
          }}
        </h1>
      </div>
      <p>
        {{
          lang === "kz"
            ? `2025 жылдың 10 сәуірінде «А.Байтұрсынұлы атындағы №9 орта мектеп» КММ 9 сынып оқушылары «ЗИКСТО» АҚ-ға барды.`
            : `10 апреля 2025 года учащиеся 9 классов КГУ «Средняя школа №9 имени А. Байтурсынулы» посетили АО «ЗИКСТО».`
        }}
      </p>
      <p>
        {{
          lang === "kz"
            ? `«ЗИКСТО» АҚ-Теміржол жылжымалы құрамын жөндеумен және өндірумен айналысатын кәсіпорын. Оқушыларды зауыттың тарихымен таныстырып, дәл осы жерде алғашқы Қазақстандық вагон шығарылғанын айтты. Оқушыларға жүк вагондары мен платформалар жасау процесі көрсетілді. Кәсіпорын өкілдері мамандар жұмыс істейтін мамандықтар туралы, сондай-ақ тиісті білім алуға болатын оқу орындары туралы ақпарат берді.`
            : `АО «ЗИКСТО» — это предприятие, занимающееся ремонтом и производством железнодорожного подвижного состава. Учащихся ознакомили с историей завода и рассказали, что именно здесь был выпущен первый казахстанский вагон.   Ученикам продемонстрировали процесс изготовления грузовых вагонов и платформ. Представители предприятия также предоставили информацию о профессиях, по которым работают специалисты, а также о учебных заведениях, где можно получить соответствующее образование.`
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
  grid-template-columns: repeat(3, minmax(50px, 1fr));
}

.gallery-image {
  max-height: 350px;
}
</style>
