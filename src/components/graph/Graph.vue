<script setup>
import LineGraph from "./LineGraph.vue";
import { watch } from "vue";
const props = defineProps({
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
    <div v-else>Wird geladen</div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/stylesheets/layout/wrappers/graphwrapper";
</style>
