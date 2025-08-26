<script setup>
defineProps({
  lang: String,
});
</script>

<template>
    <div class="pageFour">
        <h1>
            {{ lang === "kz" ? "Бұйрық МОН от 12.11 №561" : "Приказ МОН от 12.11.21 №561" }}
        </h1>
    </div>
</template>