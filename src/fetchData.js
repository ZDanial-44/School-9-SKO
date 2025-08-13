import { ref, onMounted } from "vue";

export function useFetchData(resourceName) {
  const blocksData = ref(null);
  const loading = ref(true);
  const error = ref(null);

  onMounted(async () => {
    try {
      const res = await fetch(`https://8dbdf988a0f02b37.mokky.dev/${resourceName}`);
      if (!res.ok) throw new Error("Ошибка загрузки данных");
      blocksData.value = await res.json();
    } catch (err) {
      error.value = err.message;
      console.error(err);
    } finally {
      loading.value = false;
    }
  });

  return { blocksData, loading, error };
}


