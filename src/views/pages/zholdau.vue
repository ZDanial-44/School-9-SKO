<script setup>
import { computed } from "vue";
import SampleOne from "../../components/SpOne.vue";
import SampleOneImage from "../../components/SpOneImage.vue";
import logoImage from "../../assets/images/toka.jpg";
import { useFetchData } from "../../fetchData.js";

const props = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});

const { blocksData, loading, error } = useFetchData("zholdau");

// Преобразуем данные под нужный язык
const blocks = computed(() => {
  if (!blocksData.value) return [];
  return blocksData.value.map((b) => ({
    to: b.to?.[props.lang] || "",
    titleLeft: b.titleLeft?.[props.lang] || "",
    contentLeft: b.contentLeft?.[props.lang] || "",
  }));
});
</script>

<template>
  <div class="page">
    <template v-if="loading">
      <p class="loading-text">
        {{ lang === "kz" ? "Деректер жүктелуде..." : "Загрузка данных..." }}
      </p>
    </template>

    <template v-else-if="error">
      <p>Ошибка: {{ error }}</p>
    </template>

    <template v-else>
      <SampleOne
        v-for="(block, idx) in blocks"
        :key="idx"
        :lang="lang"
        :to="block.to"
        :titleLeft="block.titleLeft"
        :contentLeft="block.contentLeft"
      />
      <SampleOneImage
        class="central-main-content"
        :lang="lang"
        :imageSrc="logoImage"
      />
    </template>
  </div>
</template>

<style scoped>
.page {
  padding-bottom: 5%;
}

.loading-text {
  text-align: center;
  font-size: 18px;
  color: gray;
}
</style>
