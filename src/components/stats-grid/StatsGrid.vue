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
const fastestSpeed = computed(() => getFastestSpeed(props.fetchedData));
const size = computed(() => getEstSize(props.fetchedData));
</script>

<template>
  <section>
    <h2>Statistik</h2>
    <div class="stats-grid-container">
      <div class="stats-grid-flex-box">
        <h3>Größe</h3>
        <div class="stats-grid-item">
          <h3 v-if="!loading">{{ size }} km (Dm)</h3>
          <h3 v-else>Wird geladen</h3>
        </div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>d.G.</h3>
        <div class="stats-grid-item">
          <h3 v-if="!loading">{{ fastestSpeed }} km/S</h3>
          <h3 v-else>Wird geladen</h3>
        </div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>Magnitude</h3>
        <div class="stats-grid-item">
          <h3 v-if="!loading">{{ magnitude }} H</h3>
          <h3 v-else>Wird geladen</h3>
        </div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>e.b.D.</h3>
        <div class="stats-grid-item">
          <h3 v-if="!loading">{{ firstObservedDate }}</h3>
          <h3 v-else>Wird geladen</h3>
        </div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>l.b.D.</h3>
        <div class="stats-grid-item">
          <h3 v-if="!loading">{{ lastObservedDate }}</h3>
          <h3 v-else>Wird geladen</h3>
        </div>
      </div>
      <div class="stats-grid-flex-box">
        <h3>u.P.</h3>
        <div
          :class="
            !loading ? 'stats-grid-item planet-container' : 'stats-grid-item'
          "
        >
          <div v-if="!loading" v-for="planet in orbitingBodies">
            <div class="planet-flex-box">
              <img
                v-if="planet === 'Earth'"
                src="../../assets/images/stats-grid-earth.svg"
                width="35px"
                alt="Earth"
              />
              <img
                v-if="planet === 'Juptr'"
                src="../../assets/images/stats-grid-jupiter.svg"
                width="35px"
                alt="Jupiter"
              />
              <img
                v-if="planet === 'Venus'"
                src="../../assets/images/stats-grid-venus.svg"
                width="35px"
                alt="Venus"
              />
              <img
                v-if="planet === 'Merc'"
                src="../../assets/images/stats-grid-mercury.svg"
                width="35px"
                alt="Mercury"
              />
              <img
                v-if="planet === 'Mars'"
                src="../../assets/images/stats-grid-mars.svg"
                width="35px"
                alt="Mars"
              />
              <h3>{{ planet }}</h3>
            </div>
          </div>
          <h3 v-else>Wird geladen</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/stylesheets/layout/statsgrid";
@use "../../assets/stylesheets/components/stats-grid/statsgridcontainer";
@use "../../assets/stylesheets/components/button";
</style>
