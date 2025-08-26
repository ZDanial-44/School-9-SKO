<script setup>
const props = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});
</script>

<template>
  <div class="backgroundFrame">
    <div class="page pageFour">
      <div class="toCenter">
        <h1>
          {{
            lang === "kz"
              ? "Балаларға ББЖМ -ға дайындалуға қалай көмектесуге болады"
              : "Как помочь детям при подготовке к МОДО"
          }}
        </h1>
      </div>
    </div>
  </div>
</template>
