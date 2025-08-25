<template>
  <div v-if="hasLeft || hasRight" class="news-block two-columns">
    <div class="left-column" v-if="hasLeft">
      <div class="news-block__column">
        <div class="news-block__header__korobka">
          <div class="news-block__header-text" v-if="titleLeft">
            <RouterLink :to="to" class="news-block__header">{{ titleLeft }}</RouterLink>
          </div>
          <div class="news-block__content">
            <div class="news-block__image__korobka" v-if="imageLeftSrc">
              <RouterLink :to="to" class="news-block__image-wrapper">
                <img :src="imageLeftSrc" :alt="titleLeft" class="news-block__image" />
              </RouterLink>
            </div>
            <span class="content-text" v-if="contentLeft">
              <slot name="left"> {{ contentLeft }}</slot>
            </span>
          </div>
        </div>
      </div>
    </div>


    <div class="right-column" v-if="hasRight">
      <div class="news-block__column">
        <div class="news-block__header__korobka">
          <div class="news-block__header-text" v-if="titleRight">
            <RouterLink :to="to" class="news-block__header">{{ titleRight }}</RouterLink>
          </div>
          <div class="news-block__content">
            <div class="news-block__image__korobka" v-if="imageRightSrc">
              <RouterLink :to="to" class="news-block__image-wrapper">
                <img :src="imageRightSrc" :alt="titleRight" class="news-block__image" />
              </RouterLink>
            </div>
            <span class="content-text" v-if="contentRight">
              <slot name="right">{{ contentRight }}</slot>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { computed } from "vue";

const props = defineProps({
  lang: String,
  to: { type: [String, Object], required: true },
  titleLeft: { type: String, default: "" },
  imageLeft: { type: String, default: null },
  contentLeft: { type: String, default: "" },
  titleRight: { type: String, default: "" },
  imageRight: { type: String, default: null },
  contentRight: { type: String, default: "" },
});

function resolveImage(image) {
  if (!image) return null;
  if (/^https?:\/\//.test(image)) return image;

  try {
    return require(`../assets/images/${image}`);
  } catch (e) {
    console.error("Image not found:", image);
    return null;
  }
}

const imageLeftSrc = computed(() => resolveImage(props.imageLeft));
const imageRightSrc = computed(() => resolveImage(props.imageRight));

const hasLeft = computed(() => props.titleLeft || props.imageLeft || props.contentLeft);
const hasRight = computed(
  () => props.titleRight || props.imageRight || props.contentRight
);
</script>

<style scoped>
.news-block.two-columns {
  display: flex;
  gap: 48px;
  justify-content: space-evenly;
  width: 90%;
  margin-left: 5%;
}

.news-block__column {
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: var(--color-primary);
  border-radius: 100px 50px 100px 25px;
}

.right-column {
  margin-top: -10%;
  flex: 1 1 50%;
}

.left-column {
  flex: 1 1 50%;
}

.news-block__image-wrapper {
  display: block;
}

.news-block__image {
  position: relative;
  max-width: 270px;
  height: auto;
  display: block;
  z-index: 1;
  border: 4px solid var(--color-accent);
  border-radius: 0px 0px 5px 5px;
  box-sizing: border-box;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center center;
}

.news-block__header__korobka {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.news-block__header {
  position: relative;
  z-index: 2;
  background: var(--color-accent);
  padding: 16px;
  text-align: center;
  border-radius: 50px 0px 50px 0;
  display: block;
  font-size: 1.2em;
  font-weight: bold;
  color: var(--color-text-dark);
  text-decoration: none;
}

.news-block__header-text {
  height: 50px;
  padding: 0;
  background: var(--color-primary);
  border-radius: 70px 0 0 0;
}

.news-block__content {
  font-size: 1em;
  color: var(--color-text-light);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.content-text {
  text-align: left;
}

</style>