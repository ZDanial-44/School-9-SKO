<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});

const images = ref([]);

const fileNames = ["volleyball1.jpeg"];

async function loadImages() {
  const loaded = [];

  for (const file of fileNames) {
    try {
      const mod = await import(
        `@/assets/images/pages/achievementsImages/volleyball/${file}`
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
        {{ lang === "kz" ? "Волейболдан мектеп лигасы" : "Школьная лига по волейболу" }}
      </h1>
      <p>
        {{
          lang === "kz"
            ? `21-24 қаңтар аралығында 7-8 сынып қыздары арасында волейболдан
            қалалық мектеп лигасы өтті. Біздің команда, мұғалім М.Л. Мардановтың
            жетекшілігімен 2 орын алды.`
            : `С 21-24 января проходила городская школьная лига
            по волейболу среди девушек 7-8 класса. Наша команда ,под руководством учителя
            Марданова М.Л заняли 2 место`
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
  </div>
</template>

<style scoped>
.gallery {
  grid-template-columns: repeat(1, minmax(50px, 1fr));
}
</style>
