<script setup>
import LineGraph from "./LineGraph.vue";
defineProps({
  fetchedData: Array,
  loading: Boolean,
});
</script>

<template>
  <section class="graph-wrapper">
    <h2>Entfernung vor Erde (AE)</h2>
    <LineGraph />
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/stylesheets/layout/graphwrapper";
</style>
