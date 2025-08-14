<template>
  <div class="central-block">
    <h1 class="home-text">
      {{ route.meta?.title?.[lang] || null }}
    </h1>
    <span
      class="central-block-content"
      :style="containerStyle"
      @mouseenter="expandToContain"
      @mouseleave="resetSize"
    >
      <img
        class="central-block-image"
        v-if="imageSrc"
        :src="imageSrc"
        alt="Изображение"
        ref="imgRef"
        @load="onImageLoad"
      />
    </span>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();

const props = defineProps({
  lang: String,
  imageSrc: String,
});

const defaultSize = 450;
const containerStyle = ref({
  width: defaultSize + "px",
  height: defaultSize + "px",
  borderRadius: "50%",
  border: "solid 4px var(--color-accent)",
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 1s ease",
});

const imgRef = ref(null);
let naturalWidth = 0;
let naturalHeight = 0;

function onImageLoad() {
  naturalWidth = imgRef.value.naturalWidth;
  naturalHeight = imgRef.value.naturalHeight;
}

function expandToContain() {
  if (!naturalWidth || !naturalHeight) return;

  const aspect = naturalWidth / naturalHeight;

  let newWidth, newHeight;
  if (aspect > 1) {
    newWidth = defaultSize;
    newHeight = defaultSize / aspect;
  } else {
    newWidth = defaultSize * aspect;
    newHeight = defaultSize;
  }

  newWidth *= 1.3;
  newHeight *= 1.3;

  containerStyle.value.width = newWidth + "px";
  containerStyle.value.height = newHeight + "px";
  containerStyle.value.borderRadius = "0% 175px";
}

function resetSize() {
  containerStyle.value.width = defaultSize + "px";
  containerStyle.value.height = defaultSize + "px";
  containerStyle.value.borderRadius = "50%";
}
</script>

<style scoped>
.home-text {
  max-width: 480px;
  background-color: var(--color-primary-dark);
  color: var(--color-bg);
  padding: 5px 30px;
  border-radius: 0px 40px 0px 40px;
  font-size: 50px;
}

.central-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: -10%;
}

.central-block-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 1s ease;
}
</style>


<style scoped>
.home-text {
  max-width: 480px;
  background-color: var(--color-primary-dark);
  color: var(--color-bg);
  padding: 5px 30px;
  border-radius: 0px 40px 0px 40px;
  font-size: 50px;
}

.central-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: -10%;
}

.central-block-content {
  width: 450px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50%;
  border: solid 4px var(--color-accent);
  transition: border-radius 1s ease;
}


.central-block-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease;
}
</style>
