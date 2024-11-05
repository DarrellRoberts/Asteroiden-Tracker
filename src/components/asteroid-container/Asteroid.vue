<script setup>
const props = defineProps({
  width: String,
  asteroidName: String,
  hazardous: Boolean,
});
</script>

<template>
  <div class="orbit-container">
    <div class="earth-container">
      <img src="../../assets/images/stats-grid-earth.svg" width="75px" />
    </div>
    <div class="orbit-one">
      <div class="orbit-item">
        <img
          src="../../assets/images/asteroid-asteroid-image.svg"
          :alt="asteroidName"
          :width="width"
          :class="hazardous ? 'hazardous' : 'non-hazardous'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../../assets/stylesheets/components/asteroid-container/asteroid";
</style>
