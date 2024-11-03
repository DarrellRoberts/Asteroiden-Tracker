<script setup>
import Asteroid from "./Asteroid.vue";

defineProps({
  fetchedData: Array,
  loading: Boolean,
});
</script>

<template>
  <section class="asteroid-wrapper">
    <h2>Asteroid Name</h2>
    <div class="asteroid-flex-box">
      <div>
        <Asteroid asteroid-name="Asteroid Name" width="15px" />
      </div>
      <div class="asteroid-info-box">
        <p>Asteroid Info</p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/stylesheets/components/asteroid-container/asteroidcontainer";
@use "../../assets/stylesheets/layout/asteroidwrapper";
</style>
