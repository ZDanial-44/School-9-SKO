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
                ? "Жұмыс тобын құру туралы бұйрық"
                : "Приказ о создании рабочей группы"
            }}
        </h1>
      <iframe
        class="pdf-viewer"
        src="/pages/Inclusion/Приказ-о-создании-рабочей-группы-КПИ.pdf"
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
