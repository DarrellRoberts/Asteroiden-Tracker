<script setup>
import Asteroid from "./Asteroid.vue";

defineProps({
  fetchedData: Array,
  loading: Boolean,
});
</script>

<template>
  <h2>Hier steht der Asteroid Container</h2>
  <div class="asteroid-flex-box">
    <Asteroid asteroid-name="Asteroid Name" width="35px" />
    <div>Asteroid Info</div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/stylesheets/components/asteroidcontainer";
</style>
