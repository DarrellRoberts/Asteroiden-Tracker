<script setup>
import Asteroid from "./Asteroid.vue";
import {
  hazardous,
  nameLimited,
  getFullName,
  getNasaLink,
} from "../../functions/asteroidContainer";
import { computed } from "vue";

const props = defineProps({
  fetchedData: Object,
  loading: Boolean,
  index: Number,
});

const hazard = computed(() => hazardous(props.fetchedData));
const nameShort = computed(() => nameLimited(props.fetchedData));
const nameFull = computed(() => getFullName(props.fetchedData));
const nasaLink = computed(() => getNasaLink(props.fetchedData));
</script>

<template>
  <section class="asteroid-wrapper">
    <h2>{{ nameShort }}</h2>
    <h2 v-if="index === 0">(Der letzte beobachtete Asteroid)</h2>
    <div class="asteroid-flex-box">
      <div>
        <Asteroid
          asteroid-name="Asteroid Name"
          width="15px"
          :hazardous="hazard"
        />
      </div>
      <div class="asteroid-info-box">
        <h3>Information</h3>
        <ul>
          <li>
            Voller Name: <i>{{ nameFull }}</i>
          </li>
          <li>
            Gefährlich: <i>{{ hazard ? "Ja" : "Nein" }}</i>
          </li>
          <li>
            <a :href="nasaLink" target="_blank"> Link zur NASA-Datenbank </a>
          </li>
        </ul>
        <span>Mehr erfahren</span>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../assets/stylesheets/components/asteroid-container/asteroidcontainer";
@use "../../assets/stylesheets/layout/asteroidwrapper";
</style>
