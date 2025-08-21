<script setup>
import SampleFour from "@/components/SpFour.vue";
import methodLock from "@/locales/pagesLock/methodLock/LinkOne.json";

const data = methodLock;
</script>

<template>
  <SampleFour
    :lang="'ru'"
    :title="data.title"
    :paragraphs="data.paragraphs"
    :speakers="data.speakers"
    :imagesPath="data.imagesPath"
    :fileNames="data.fileNames"
    :paragraphsOne="data.paragraphsOne"
  />
</template>
