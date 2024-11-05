<script setup>
defineProps({
  index: Number,
  showRandom: Boolean,
});

defineEmits(["incrementIndex", "decreaseIndex", "randomise"]);
</script>

<template>
  <header class="header-wrapper">
    <div class="header-container">
      <h1>Asteroiden Tracker</h1>
      <div class="button-container">
        <button
          @click="$emit('randomise')"
          :class="!showRandom ? 'hide-prev' : ''"
        >
          Randomise
        </button>
        <button>Filter</button>
      </div>
      <div class="navigation-container">
        <div :class="index === 0 ? 'hide-prev arrow-box' : 'arrow-box'">
          <span @click="$emit('decreaseIndex')">Previous</span>
          <img
            src="../../assets/images/header-left-arrow.svg"
            alt="previous-arrow"
            width="50"
          />
        </div>
        <div :class="index === 19 ? 'hide-prev arrow-box' : 'arrow-box'">
          <span @click="$emit('incrementIndex')">Next</span>
          <img
            src="../../assets/images/header-right-arrow.svg"
            alt="next-arrow"
            width="50"
          />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../../assets/stylesheets/components/headercontainer";
@use "../../assets/stylesheets/layout/main";
</style>
