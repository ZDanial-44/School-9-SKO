<script setup>
import { ref, computed } from "vue";
import FinalSampleOne from "@/components/FinalSampleOne.vue";

const props = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});

// Список доступных баз
const dbList = [
  { value: "food", image: "food.jpg", label: { kz: "Тамақ", ru: "Еда" } },
  { value: "menu", image: "food.jpg", label: { kz: "Мәзір", ru: "Меню" } },
];

const selected = ref("food");

const currentDb = computed(() => selected.value);
const currentImage = computed(() => {
  const found = dbList.find((d) => d.value === selected.value);
  return found ? found.image : "food.jpg";
});
</script>

<template>
  <div class="wrapper">
    <div class="switch">
        <button
          v-for="db in dbList"
          :key="db.value"
          @click="selected = db.value"
          :class="['tab', { active: selected === db.value }]"
        >
          {{ db.label[lang] }}
        </button>
    </div>

    <FinalSampleOne
      :key="currentDb"
      :lang="lang"
      :dbName="currentDb"
      :mainImageName="currentImage"
    />
  </div>
</template>

<style scoped>
.wrapper {
  display: grid;
  gap: 16px;
  padding: 16px;
}

.switch {
  position: sticky;
  top: 25px;
  margin-left: 160px;
  z-index: 1000;
  display: inline-flex;
  gap: 8px;
  padding: 8px;
  border-radius: 12px;
  width: fit-content;
}

.tab {
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid var(--color-bg);
  cursor: pointer;
  transition: 120ms;
  background: #fff;
}
.tab.active {
  transform: translateY(-1px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.06);
  border-color: #cbd5e1;
}
</style>
