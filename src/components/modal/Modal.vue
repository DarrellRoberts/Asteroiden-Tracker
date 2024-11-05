<script setup>
defineProps({
  showModal: Boolean,
});
defineEmits(["handleModal"]);
</script>

<template>
  <div v-if="showModal" class="modal-background"></div>
  <dialog class="legend-modal">
    <h2>Legend</h2>
    <h3>Abkürzungen</h3>
    <ul>
      <li>d.G: <i>durchschnittliche Geschwindigkeit</i></li>
      <li>e.b.D: <i>erstes beobachtetes Datum</i></li>
      <li>l.b.D: <i>letztes beobachtetes Datum</i></li>
      <li>u.P. <i>umlaufende Planeten</i></li>
    </ul>
    <h3>Metrics</h3>
    <ul>
      <li>
        Größe (Dm):
        <i
          >Eine wissenschaftliche Schätzung des Durchmessers des Asteroids in
          Kilometern.</i
        >
      </li>
      <li>
        Magnitude (H):
        <i
          >Ein Maß für seine intrinsische Helligkeit. Je kleiner die absolute
          Magnitude, desto heller ist der Asteroid.</i
        >
      </li>
      <li>
        Astronomische Einheit (AE):
        <i
          >Die Entfernung vom Asteroid zu messen. Ein Einheit ist gleich grob
          geschätzt 150 Million Kilometer.</i
        >
      </li>
    </ul>
    <div class="button-container">
      <button @click="$emit('handleModal')">OK</button>
    </div>
  </dialog>
</template>

<style lang="scss">
@use "../../assets/stylesheets/components/_modal.scss";
@use "../../assets/stylesheets/components/_button.scss";
</style>
