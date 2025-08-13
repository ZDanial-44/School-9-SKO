<template>
  <div class="central-block">
    <h1 class="home-text">
      {{ route.meta?.title?.[lang] || null }}
    </h1>
    <span class="central-block-content">
      <img
        class="central-block-image"
        v-if="imageSrc"
        :src="imageSrc"
        alt="Изображение"
      />
    </span>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps({
  lang: String,
  imageSrc: String,
});
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
  border-radius: 50%;
  transition: border-radius 1s ease;
}

.central-block-image:hover {
  border-radius: 0px;
}

.central-block-content:hover{
  border-radius: 0% 25%;
}
</style>
