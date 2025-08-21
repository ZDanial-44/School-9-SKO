<script setup>
import { computed } from "vue";
import SampleThreeA from "../../components/SpThreeAdministration.vue";
import { useFetchData } from "../../fetchData.js";

const props = defineProps({
  lang: { type: String, default: "kz" },
});

const RESOURCE = "Administration";

const { blocksData, loading, error } = useFetchData(RESOURCE);

const blocks = computed(() => {
  const list = Array.isArray(blocksData?.value) ? blocksData.value : [];
  return list.map((b) => ({
    to: b?.to?.[props.lang] ?? "",
    titleLeft: b?.titleLeft?.[props.lang] ?? "",
    imageLeft: b?.imageLeft ?? "",
    contentLeft: b?.contentLeft?.[props.lang] ?? "",
    titleRight: b?.titleRight?.[props.lang] ?? "",
    imageRight: b?.imageRight ?? "",
    contentRight: b?.contentRight?.[props.lang] ?? "",
  }));
});

</script>

<template>
  <div class="page">
    <div class="header-spacer">
      <h1 class="main-title">
        {{ lang === "kz" ? "Әкімшілік" : "Администрация" }}
      </h1>
    </div>
    <div class="SampleThreeAC">
      <SampleThreeA
        v-for="(block, idx) in blocks"
        :key="idx"
        :to="block.to"
        :titleLeft="block.titleLeft"
        :imageLeft="block.imageLeft"
        :contentLeft="block.contentLeft"
        :titleRight="block.titleRight"
        :imageRight="block.imageRight"
        :contentRight="block.contentRight"
      />
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
}

.main-title {
  margin-left: 21%;
  color: var(--color-bg);
  display: inline;
  background-color: var(--color-accent);
  border-radius: 0px 35px 0px 35px;
  padding: 10px 30px;
}
.SampleThreeAC {
  margin-top: 1%;
}
</style>
