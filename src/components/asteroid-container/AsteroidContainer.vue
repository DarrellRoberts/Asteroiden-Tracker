<script setup>
import Asteroid from "./Asteroid.vue";
import {
  hazardous,
  nameLimited,
  getFullName,
  getNasaLink,
} from "../../functions/asteroidContainer";
import { dataJson } from "../../functions/dataJson";
import { computed } from "vue";

defineProps({
  fetchedData: Array,
  loading: Boolean,
});

const hazard = computed(() => (hazardous(dataJson) ? "Ja" : "Nein"));
const nameShort = computed(() => nameLimited(dataJson));
const nameFull = computed(() => getFullName(dataJson));
const nasaLink = computed(() => getNasaLink(dataJson));
</script>

<template>
  <section class="asteroid-wrapper">
    <h2>{{ nameShort }}</h2>
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
            Gefährlich: <i>{{ hazard }}</i>
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
