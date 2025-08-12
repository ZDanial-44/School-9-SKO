<template>
  <div class="page">
    <SampleOne
      v-for="(block, idx) in blocks"
      :key="idx"
      :lang="lang"
      :to="block.to"
      :titleLeft="block.titleLeft"
      :contentLeft="block.contentLeft"
    />
    <SampleOneImage class="central-main-content" :lang="lang" :imageSrc="MainImage" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import SampleOne from "../../components/SpOne.vue";
import SampleOneImage from "../../components/SpOneImage.vue";
import MainImage from "../../assets/images/Memleket.jpeg";
import { useFetchData } from "../../fetchData.js";

const props = defineProps({
  lang: {
    type: String,
    default: "kz",
  },
});

const { blocksData, loading, error } = useFetchData("gosuslugi");

const blocks = computed(() =>
    (blocksData.value || []).map((b) => ({
    to: b.to[props.lang],
    titleLeft: b.titleLeft[props.lang],
  }))
);
</script>
