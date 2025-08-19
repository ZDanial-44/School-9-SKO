<script setup>
import { ref, onMounted } from "vue";

const images = ref([]);

const fileNames = [
  "methodImage1.jpeg",
  "methodImage2.jpeg",
  "methodImage3.jpeg",
  "methodImage4.jpeg",
  "methodImage5.jpeg",
  "methodImage6.jpeg",
  "methodImage7.jpeg",
  "methodImage8.jpeg",
  "methodImage9.jpeg",
  "methodImage10.png",
  "methodImage11.png",
  "methodImage12.png",
  "methodImage13.png",
  "methodImage14.png",
  "methodImage15.png",
  "methodImage16.png",
  "methodImage17.png",
  "methodImage18.png",
  "methodImage19.png",
  "methodImage20.png",
  "methodImage21.png",
  "methodImage22.png",
  "methodImage23.png",
  "methodImage24.png",
  "methodImage25.png",
  "methodImage26.jpeg",
];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(
        `/src/assets/images/pages/sampleFour/methodImages/Link1/${file}`
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
        «Сабақта оқушылардың функционалдық сауаттылығын қалыптастыру» тақырыбындағы
        вебинар
      </h1>

      <p>
        <b>«Ахмет Байтұрсынұлы атындағы № 9 орта мектеп» КММ-де 2025 жылғы 14 мамырда</b>
        «943 — НЫСАНАЛЫ МЕКТЕПТЕРДІ ДАМЫТУ» республикалық жобасының «Қала-село» жобасын
        іске асыру шеңберінде «онлайн-вебинар» өткізілді.
      </p>

      <p>
        Тақырыбы: «Бастауыш сыныптарда және логопедиялық сабақтарда физика, биология,
        қазақ тілі, орыс тілі мен әдебиеті, шет тілі, математика сабақтарында оқушылардың
        функционалдық сауаттылығын қалыптастыру».
      </p>

      <p>
        Вебинардың мақсаты – оқушылардың функционалдық сауаттылығын қалыптастырудың тиімді
        әдістері мен тәсілдерін ұсыну, қалалық және ауылдық мектептердің педагогтары
        арасында тәжірибе алмасу, практикалық жағдайларда білімді қолдануға ықпал ететін
        қолданбалы тапсырмаларды көрсету.
      </p>

      <ul>
      <h2>Іс-шараға қатысты:</h2>
        <li>
          Е.В.Тарёва, бастауыш сыныптар бойынша директордың орынбасары –
          <i
            >«Оқушылардың функционалдық сауаттылығын дамыту ББЖМ-не сәтті дайындықтың
            кілті ретінде»</i
          >
        </li>
        <li>
          Н.С.Плющенко, физика мұғалімі –
          <i
            >«Физика сабақтарындағы функционалдық сауаттылық бойынша жұмыс парақтары мен
            тапсырмалар»</i
          >
        </li>
        <li>
          О.В.Никулина, биология мұғалімі –
          <i
            >«Биология бойынша функционалдық сауаттылық: оқушылардың сыни ойлауын
            дамыту»</i
          >
        </li>
        <li>
          А.В.Демишева, физика мұғалімі –
          <i>«Зерттеу міндеттері арқылы функционалдық сауаттылықты қалыптастыру»</i>
        </li>
        <li>
          А.Н.Жукенова, бастауыш сыныптарда қазақ тілі мұғалімі –
          <i>«Бастауыш сыныпта оқушылардың функционалдық сауаттылығын қалыптастыру»</i>
        </li>
        <li>
          Ж.Б.Тонгатбаева, № 42 ОМ, математика пәнінің мұғалімі –
          <i
            >«Бастауыш сыныптарда математика сабақтарында функционалдық сауаттылықты
            қалыптастыру»</i
          >
        </li>
        <li>
          А.В.Ашменевич, логопед-мұғалім –
          <i
            >«Логопедиялық әсер ету шеңберінде заманауи технологияларды қолдану арқылы
            сөйлеу қабілеті бұзылған оқушылардың функционалдық сауаттылығын
            қалыптастыру»</i
          >
        </li>
        <li>
          И.Б.Кожахметова, № 42 ОМ, ағылшын тілі мұғалімі –
          <i>«Ағылшын тілі сабақтарында функционалдық сауаттылықты қалыптастыру»</i>
        </li>
      </ul>

      <p>
        Вебинардың қорытындысы ҚҰУ «Әдістемелік орталық» әдіскері Л.Ф. Ельцова жүргізген
        рефлексия және кері байланыс болды. Қатысушылар оқытуда жүйелі міндет ретінде
        функционалдық сауаттылықты енгізудің маңыздылығын атап өтті, сондай-ақ кәсіби
        қарым-қатынас пен табысты тәжірибелермен алмасудың құндылығын атап өтті.
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
.backgroundFrame{
    background: repeating-linear-gradient(320deg, var(--color-text-light), var(--color-text-light) 25px, 0px, var(--color-white) 50px);
    padding: 50px;

}
.gallery {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, minmax(50px, 1fr));
  margin: 0 auto;
}

.gallery-image {
  border-top: 2px solid var(--color-accent);
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}
</style>
