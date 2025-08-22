<template>
  <div class="not-found">
    <div class="banner-container">
      <h1 class="banner">404</h1>

      <p class="banner">
        {{ lang === "kz" ? "Бет табылмады" : "Страница не найдена" }}
      </p>

      <RouterLink to="/" class="banner">
        {{ lang === "kz" ? "Басты бетке оралу" : "Вернуться на главную" }}
      </RouterLink>
      <button class="banner" @click="goBack">
        {{ lang === "kz" ? "Алдыңғы бетке қайту" : "Вернуться назад" }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<style scoped>
.not-found {
  color: var(--color-text-light);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: repeating-linear-gradient(
    320deg,
    var(--color-text-light),
    var(--color-text-light) 25px,
    0px,
    var(--color-white) 50px
  );
  height: 100vh;
}

.banner {
  font-size: 30px;
  background-color: var(--color-accent);
  padding: 8px 16px;
  border-radius: 45px;
  cursor: pointer;
  transition: padding 0.3s ease;
  text-align: center;
  text-decoration: none;
  color: inherit;
  margin: 8px;
}
.banner:hover {
  padding: 8px 24px;
}

button.banner {
  border: none;
}
</style>
