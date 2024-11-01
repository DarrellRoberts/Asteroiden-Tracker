<script setup>
import { ref, onMounted } from "vue";
import Layout from "../../layout/Layout.vue";

const fetchedData = ref([]);
const loading = ref(true);
const error = ref(null);

const getData = async () => {
  try {
    const response = await fetch(
      //nutzt placeholder zur Zeit
      `https://jsonplaceholder.typicode.com/todos/`,
      { cache: "force-cache" }
    );
    const data = await response.json();
    fetchedData.value = data;
    loading.value = false;
  } catch (err) {
    error.value = err;
    console.error(err);
  }
};

onMounted(() => {
  getData();
});
</script>

<template>
  <Layout :fetched-data="fetchedData" :loading="loading" />
</template>

<style lang="scss" scoped></style>
