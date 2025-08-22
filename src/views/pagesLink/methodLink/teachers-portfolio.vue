<script setup>
const props = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});
</script>

<template>
  <div class="page pageFour">
    <h1>
      {{ lang === "kz" ? "Мұғалімдер портфолиосы" : "Портфолио учителей" }}
    </h1>
  </div>
</template>
