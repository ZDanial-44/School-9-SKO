<script setup>
import NotFound from '@/views/NotFound.vue';
defineProps({
  lang: {
    type: String,
    default: 'kz',
  },
});
</script>
<template>
    <NotFound />
</template>