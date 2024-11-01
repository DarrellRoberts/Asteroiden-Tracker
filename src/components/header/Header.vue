<script setup>
defineProps({
  fetchedData: Array,
  loading: Boolean,
});
</script>

<template>
  <div class="header-container">
    <h1>Asteroiden Tracker</h1>
    <div class="button-container">
      <button>Randomise</button>
      <button>Filter</button>
    </div>
    <div class="navigation-container">
      <span>Previous</span>
      <span>Next</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/stylesheets/components/headercontainer";
</style>
