<script setup>
import {
  getOrbitingBodies,
  getLastObservedDate,
  getFirstObservedDate,
  getMagnitude,
  getFastestSpeed,
  getEstSize,
} from "../../functions/statsGrid";
import { computed } from "vue";

const props = defineProps({
  fetchedData: Object,
  loading: Boolean,
});

const orbitingBodies = computed(() => getOrbitingBodies(props.fetchedData));
const lastObservedDate = computed(() => getLastObservedDate(props.fetchedData));
const firstObservedDate = computed(() =>
  getFirstObservedDate(props.fetchedData)
);
const magnitude = computed(() => getMagnitude(props.fetchedData));
const fastestSpeed = computed(() =>
  parseFloat(getFastestSpeed(props.fetchedData)).toFixed(2)
);
const size = computed(() =>
  parseFloat(getEstSize(props.fetchedData)).toFixed(2)
);
</script>

<template>
  <section>
    <h2>Statistik</h2>
    <div class="stats-grid-container">
      <div class="stats-grid-flex-box">
        <h3>Größe</h3>
        <div class="stats-grid-item">
          <h3>{{ size }} km (Dm)</h3>
        </div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>d.G.</h3>
        <div class="stats-grid-item">
          <h3>{{ fastestSpeed }} km/S</h3>
        </div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>Magnitude</h3>
        <div class="stats-grid-item">
          <h3>{{ magnitude }} H</h3>
        </div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>e.b.D.</h3>
        <div class="stats-grid-item">
          <h3>{{ firstObservedDate }}</h3>
        </div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>l.b.D.</h3>
        <div class="stats-grid-item">
          <h3>{{ lastObservedDate }}</h3>
        </div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>u.P.</h3>
        <div class="stats-grid-item planet-container">
          <div v-for="planet in orbitingBodies">
            <h3>{{ planet }}</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/stylesheets/layout/statsgrid";
@use "../../assets/stylesheets/components/statsgridcontainer";
</style>
