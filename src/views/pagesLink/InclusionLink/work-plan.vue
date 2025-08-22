<script setup>
    defineProps({
      lang: String,
    });
</script>
<template>
  <div class="backgroundFrame">
    <div class="page pageFour toCenter">
        <h1>
            {{
                lang === "kz"
                ? "Инклюзияны қолдау кабинетінің жұмыс жоспары"
                : "План работы кабинета поддержки инклюзии"
            }}
        </h1>
      <iframe
        class="pdf-viewer"
        src="/pages/Inclusion/План-работы-КПИ.pdf"
        width="100%"
        height="600px"
      ></iframe>
    </div>
    <div class="bottomP"></div>
  </div>
</template>

<style scoped>
.pageFour {
  width: 50%;
}
</style>
