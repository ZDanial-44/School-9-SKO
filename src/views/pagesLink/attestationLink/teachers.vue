<script setup>
defineProps({
  lang: String,
});
</script>

<template>
    <div class="pageFour">
        <h1>
            {{ lang === "kz" ? "2022 жылдың 2 жартыжылдығында педагогтерді аттестаттау" : "Аттестация педагогов во 2 полугодии 2022 года" }}
        </h1>
    </div>
</template>