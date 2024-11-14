<script setup>
import Modal from "../modal/Modal.vue";
import { ref } from "vue";

defineProps({
  index: Number,
  showRandom: Boolean,
  loading: Boolean,
  dataSize: Number,
});
defineEmits(["incrementIndex", "decreaseIndex", "randomise"]);

const showModal = ref(false);
const handleModal = () => {
  return (showModal.value = !showModal.value);
};
</script>

<template>
  <Modal v-if="showModal" :show-modal="showModal" @handleModal="handleModal" />
  <div class="header-container">
    <h1>Asteroiden Tracker</h1>
    <div class="button-container">
      <button
        @click="$emit('randomise')"
        :class="!showRandom ? 'hide-prev' : ''"
      >
        Randomise
      </button>
      <button @click="handleModal">Legend</button>
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
      <div
        :class="
          index === dataSize - 1 || loading
            ? 'hide-prev arrow-box'
            : 'arrow-box'
        "
      >
        <span @click="$emit('incrementIndex')">Next</span>
        <img
          src="../../assets/images/header-right-arrow.svg"
          alt="next-arrow"
          width="50"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../assets/stylesheets/components/header/headercontainer";
</style>
