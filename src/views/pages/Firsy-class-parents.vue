<script setup>
import SpOneImage from "@/components/SpOneImage.vue";

import mainImage from "@/assets/images/pages/sampleOne/Firsy-class-parents-Image.jpeg";

const props = defineProps({
  lang: { type: String, default: "kz" },
});
</script>

<template>
  <div class="page">
    <div class="SampleThreeAC">
      <SpOneImage :lang="lang" :imageSrc="mainImage" />
    </div>
    <h1 class="main-title">
      <a href="http//t.me/@roditelyu_pervoklassnika_bot"> http//t.me/@roditelyu_pervoklassnika_bot </a>
    </h1>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  margin-top: 2%;
  align-items: center;
}

.main-title {
  margin-right: 5%;
  color: var(--color-bg);
  display: inline;
  width: min-content;
  background-color: var(--color-accent);
  border-radius: 0px 35px 0px 35px;
  padding: 10px 30px;
}
.SampleThreeAC {
  margin-top: 1%;
}
</style>
