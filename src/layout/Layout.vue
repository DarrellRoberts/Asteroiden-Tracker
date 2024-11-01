<script setup>
import Header from "../components/header/Header.vue";
import AsteroidContainer from "../components/asteroid-container/AsteroidContainer.vue";
import Graph from "../components/graph/Graph.vue";
import StatsGrid from "../components/stats-grid/StatsGrid.vue";
import Footer from "../components/footer/Footer.vue";

defineProps({
  fetchedData: Array,
  loading: Boolean,
});
</script>

<template>
  <header class="header-wrapper">
    <Header :fetched-data="fetchedData" :loading="loading" />
  </header>
  <main class="main-wrapper">
    <section class="asteroid-wrapper">
      <AsteroidContainer :fetched-data="fetchedData" :loading="loading" />
    </section>
    <section>
      <StatsGrid :fetched-data="fetchedData" :loading="loading" />
    </section>
    <section class="graph-wrapper">
      <Graph :fetched-data="fetchedData" :loading="loading" />
    </section>
  </main>
  <footer class="footer-wrapper">
    <Footer />
  </footer>
</template>

<style lang="scss" scoped>
@use "../assets/stylesheets/layout/main";
</style>
