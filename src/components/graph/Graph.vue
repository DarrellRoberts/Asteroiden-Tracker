<script setup>
import LineGraph from "./LineGraph.vue";
defineProps({
  fetchedData: Object,
  loading: Boolean,
});
</script>

<template>
  <section class="graph-wrapper">
    <h2>Entfernung vor Erde (AE)</h2>
    <div v-if="!loading">
      <LineGraph :fetched-data="fetchedData" :loading="loading" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/stylesheets/layout/graphwrapper";
</style>
