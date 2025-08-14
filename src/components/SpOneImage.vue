<template>
  <div class="central-block">
    <h1 class="home-text">
      {{ route.meta?.title?.[lang] || null }}
    </h1>
    <span
      class="central-block-content"
      :style="containerStyle"
      @mousemove="handleMouseMove"
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

  const newHeight = defaultSize; 
  let newWidth = newHeight * aspect; 

  newWidth *= 1.05;

  containerStyle.value.height = newHeight + "px";
  containerStyle.value.width = newWidth + "px";
  containerStyle.value.borderRadius = "0% 175px";
}


function resetSize() {
  containerStyle.value.height = defaultSize + "px";
  containerStyle.value.width = defaultSize + "px";
  containerStyle.value.borderRadius = "50%";
}


function handleMouseMove(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  const distFromCenter = Math.sqrt(
    Math.pow(mouseX - centerX, 2) + Math.pow(mouseY - centerY, 2)
  );

  const maxDist = Math.min(rect.width, rect.height) / 2;

  // if (distFromCenter < maxDist * 0.7) { если курсор ближе чем 70% от радиуса — включаем увеличение
  if (distFromCenter < maxDist * 0.8) {
    expandToContain();
  } else {
    resetSize();
  }
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

.central-block-content {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 50%;
  transition: border-radius 1s ease;
}

.central-block-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1s ease;
}
</style>
