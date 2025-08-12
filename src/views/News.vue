<script setup>
import { ref, computed, onMounted } from "vue";
import SampleTwo from "../components/SpTwo.vue";
import { useFetchData } from "../fetchData.js";

const props = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});

const { blocksData, loading, error } = useFetchData("News");


const blocks = computed(() =>
  (blocksData.value || []).map((b) => ({
    to: b?.to?.[props.lang] || "",
    titleLeft: b?.titleLeft?.[props.lang] || "",
    imageLeft: b?.imageLeft || "",
    contentLeft: b?.contentLeft?.[props.lang] || "",
    titleRight: b?.titleRight?.[props.lang] || "",
    imageRight: b?.imageRight || "",
    contentRight: b?.contentRight?.[props.lang] || "",
  }))
);
</script>

<template>
  <div class="header-spacer">
    <h1 class="main-title">
      {{ lang === "kz" ? "Жаңалықтар" : "Новости" }}
    </h1>
  </div>

  <div class="page" v-if="blocks.length">
    <SampleTwo
      v-for="(block, idx) in blocks"
      :lang="props.lang"
      :key="idx"
      :to="block.to"
      :titleLeft="block.titleLeft"
      :imageLeft="block.imageLeft"
      :contentLeft="block.contentLeft"
      :titleRight="block.titleRight"
      :imageRight="block.imageRight"
      :contentRight="block.contentRight"
    />
  </div>

  <div v-else>
    <p class="loading-text">
      {{ lang === "kz" ? "Деректер жүктелуде..." : "Загрузка данных..." }}
    </p>
  </div>
</template>

<style scoped>
.header-spacer {
  margin-top: 12%;
  margin-bottom: 1.5%;
}

.main-title {
  margin-left: 8%;
  color: var(--color-bg);
  display: inline;
  background-color: var(--color-accent);
  border-radius: 0px 40px 0px 40px;
  padding: 10px 30px;
  font-size: 50px;
}

.page {
  margin-top: 0%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
}
</style>
