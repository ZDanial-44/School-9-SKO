<script setup>
import { ref, watch, onMounted, computed } from "vue";
import SampleOne from "./SpOne.vue";
import SampleOneImage from "./SpOneImage.vue";
import { useFetchData } from "../fetchData.js";

const props = defineProps({
  lang: { type: String, default: "kz" },
  dbName: { type: String, required: true },
  mainImageName: { type: String, required: true },
});

const { blocksData, loading, error } = useFetchData(props.dbName);

const imageUrl = ref("");

async function loadImage(name) {
  if (!name) {
    imageUrl.value = "";
    return;
  }

  try {
    const mod = await import(`../assets/images/${name}`);
    imageUrl.value = mod?.default || mod;
  } catch (e) {
    console.error(`Не удалось загрузить изображение ${name}`, e);
    imageUrl.value = "";
  }
}

onMounted(() => loadImage(props.mainImageName));
watch(() => props.mainImageName, (n) => loadImage(n));

// подготовка блоков под язык
const blocks = computed(() => {
  const arr = Array.isArray(blocksData.value) ? blocksData.value : [];
  return arr.map((b) => ({
    to: b?.to?.[props.lang] || "",
    titleLeft: b?.titleLeft?.[props.lang] || "",
    contentLeft: b?.contentLeft?.[props.lang] || "",
  }));
});
</script>

<template>
  <div class="page">
    <p v-if="loading" class="loading-text">
      {{ lang === "kz" ? "Деректер жүктелуде..." : "Загрузка данных..." }}
    </p>

    <p v-else-if="error" class="loading-text">{{ error }}</p>

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
        v-if="imageUrl"
        class="central-main-content"
        :lang="lang"
        :imageSrc="imageUrl"
      />
    </template>
  </div>
</template>

<style scoped>
.page { padding-bottom: 5%; }
.loading-text { text-align: center; font-size: 18px; color: gray; }
</style>
