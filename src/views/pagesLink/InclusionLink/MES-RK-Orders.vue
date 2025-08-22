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
                ? "Инклюзивті білім беруді ұйымдастыру және арнайы кабинеттерді жарақтандыру туралы ҚР БҒМ бұйрықтары"
                : "Приказы МОН РК об организации инклюзивного образования и оснащении специальных кабинетов"
            }}
        </h1>
      <iframe
        class="pdf-viewer"
        src="/pages/Inclusion/v2200026513.28-06-2024.rus_.pdf"
        width="100%"
        height="600px"
      ></iframe>
      <iframe
        class="pdf-viewer"
        src="/pages/Inclusion/v2200026618.28-06-2024.rus_.pdf"
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
