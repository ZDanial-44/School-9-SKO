<template>
  <div class="news-block">
    <div class="column left">
      <RouterLink :to="to" class="header">{{ titleLeft }}</RouterLink>

      <div class="content">
        <img
          v-if="imageLeftSrc"
          :src="imageLeftSrc"
          :alt="titleLeft"
          class="image"
        />
        <h3 v-if="contentLeft">{{ contentLeft }}</h3>
      </div>
    </div>

    <div class="column right">
      <RouterLink :to="to" class="header">{{ titleRight }}</RouterLink>

      <div class="content">
        <img
          v-if="imageRightSrc"
          :src="imageRightSrc"
          :alt="titleRight"
          class="image"
        />
        <h3 v-if="contentRight">{{ contentRight }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from "vue-router";
import { computed } from "vue";

const props = defineProps({
  lang: String,
  to: { type: String, default: "/" },
  titleLeft: { type: String, required: true },
  imageLeft: String,
  contentLeft: String,
  titleRight: { type: String, required: true },
  imageRight: String,
  contentRight: String,
});

async function loadImage(name) {
  if (!name) return null;
  if (/^https?:\/\//.test(name)) return name;

  try {
    const img = await import(`../assets/images/${name}`);
    return img.default || img;
  } catch {
    console.warn("Image not found:", name);
    return null;
  }
}

const imageLeftSrc = computedAsync(() => loadImage(props.imageLeft), null);
const imageRightSrc = computedAsync(() => loadImage(props.imageRight), null);

function computedAsync(fn, defaultValue) {
  const state = ref(defaultValue);
  fn().then((v) => (state.value = v));
  return state;
}
</script>

<style scoped>
.news-block {
  text-align: center;
  display: flex;
  gap: 48px;
  justify-content: space-around;
  align-items: flex-start;
  color: var(--color-bg);
  width: 880px;
  margin: 0 auto;
}

.column {
  flex: 1 1 auto;
  max-width: 410px;
  background: var(--color-primary);
  border-radius: 51px 0 50px 0;
}

.right {
  margin-top: 5%;
}

.header {
  display: block;
  background: var(--color-accent);
  padding: 12px 36px;
  border-radius: 50px 0 0 0;
  font-size: 1.2em;
  font-weight: bold;
  color: var(--color-text-dark);
  text-decoration: none;
  text-align: right;
}

.content {
  padding: 1rem 2rem;
  text-align: left;
}

.image {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border: 4px solid var(--color-accent);
  border-radius: 8px;
}
</style>
