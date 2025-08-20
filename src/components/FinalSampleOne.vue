<script setup>
import { ref, watch, onMounted, computed } from "vue";
import SampleOne from "./SpOne.vue";
import SampleOneImage from "./SpOneImage.vue";
import { useFetchData } from "../fetchData.js";

const props = defineProps({
  lang: { type: String, default: "kz" },
  dbName: { type: String, required: true },
  mainImageName: { type: String, required: true },
  mainImageNameLang: { type: String, default: "" },
});

const { blocksData, loading, error } = useFetchData(props.dbName);

const imageUrl = ref("");

function getImageFileName() {
  if (props.mainImageNameLang) {
    return props.mainImageNameLang.replace("{lang}", props.lang);
  }
  return props.mainImageName;
}

async function loadImage() {
  const fileName = getImageFileName();
  if (!fileName) {
    imageUrl.value = "";
    return;
  }

  try {
    const mod = await import(`../assets/images/pages/sampleOne/${fileName}`);
    imageUrl.value = mod?.default || mod;
  } catch (e) {
    console.error(`Не удалось загрузить изображение ${fileName}`, e);
    imageUrl.value = "";
  }
}

onMounted(loadImage);

watch(
  [() => props.lang, () => props.mainImageName, () => props.mainImageNameLang],
  loadImage
);

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
      <div class="main-wrapper">
        <div class="image-container">
          <SampleOneImage
            v-if="imageUrl"
            class="central-main-content"
            :lang="lang"
            :imageSrc="imageUrl"
          />
        </div>

        <div class="scroll-wrapper">
          <div class="bottomP">
            <SampleOne
              v-for="(block, idx) in blocks"
              :key="idx"
              :lang="lang"
              :to="block.to"
              :titleLeft="block.titleLeft"
              :contentLeft="block.contentLeft"
            />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.main-wrapper {
  display: flex;
  gap: 20px;
}

.backgroundFrame {
  background: repeating-linear-gradient(
    320deg,
    var(--color-text-light),
    var(--color-text-light) 25px,
    0px,
    var(--color-white) 50px
  );
  padding: 50px;
}

.scroll-wrapper {
  position: fixed;
  top: 11%;
  z-index: 100;
  height: 85%;
  left: 10px;
  width: 400px;
  padding: 20px 30px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}

.scroll-wrapper::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.loading-text {
  text-align: center;
  font-size: 18px;
  color: gray;
}

@media (max-width: 1080px) {
  .main-wrapper {
    flex-direction: column;
  }
  .scroll-wrapper {
    margin-top: 70%;
    position: relative;
  }
}
</style>
