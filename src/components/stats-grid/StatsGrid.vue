<script setup>
defineProps({
  fetchedData: Array,
  loading: Boolean,
});
</script>

<template>
  <section>
    <h2>Statistik</h2>
    <div class="stats-grid-container">
      <div class="stats-grid-flex-box">
        <h3>Größe</h3>
        <div class="stats-grid-item"></div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>d.G.</h3>
        <div class="stats-grid-item"></div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>Kraft</h3>
        <div class="stats-grid-item"></div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>e.b.D.</h3>
        <div class="stats-grid-item"></div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>l.b.D.</h3>
        <div class="stats-grid-item"></div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>u.P.</h3>
        <div class="stats-grid-item"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/stylesheets/layout/statsgrid";
@use "../../assets/stylesheets/components/statsgridcontainer";
</style>
