<script setup>
import { ref, onMounted, computed } from "vue";
import Layout from "../../layout/Layout.vue";
import { mostRecentAsteroidArray } from "../../functions/dataSort";

const fetchedData = ref([]);
const singleAsteroid = ref(null);
const loading = ref(true);
const error = ref(null);
const index = ref(0);

const getData = async () => {
  try {
    const response = await fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${
        import.meta.env.VITE_SOME_KEY
      }`
    );
    const data = await response.json();
    fetchedData.value = mostRecentAsteroidArray(data.near_earth_objects);
    singleAsteroid.value = fetchedData.value[index.value];
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
  <!-- <Layout :fetched-data="fetchedData" :loading="loading" /> -->
  <Layout :fetched-data="singleAsteroid" :loading="loading" :index="index" />
</template>

<style lang="scss" scoped></style>
