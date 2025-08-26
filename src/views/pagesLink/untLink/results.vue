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
                ? "ҰБТ 2024 ж қорытынды"
                : "Итоги ЕНТ 2024 г."
            }}
        </h1>
      <iframe
        class="pdf-viewer"
        src="/pages/unt/Итоги-ЕНТ-2024г.pdf"
        width="100%"
        height="600px"
      ></iframe>
    </div>
    <div class="bottomP"></div>
  </div>
</template>

<style scoped>
.pdf-viewer {
  margin-top: 20px;
  border: 2px solid var(--color-border);
  border-radius: 8px;
  overflow: hidden;
  width: 90%;
}

.pageFour {
  width: 50%;
}
</style>
