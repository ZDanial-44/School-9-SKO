<script setup>
defineProps({
  lang: String,
});
</script>

<template>
    <div class="pageFour">
        <h1>
            {{ lang === "kz" ? "Педагогтерді аттестаттаудан өткізу қағидалары мен шарттары" : "Правила и условия проведения аттестации педагогов" }}
        </h1>
    </div>
</template>