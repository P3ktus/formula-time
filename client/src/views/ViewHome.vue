<template>
  <ItemGranpremio :race="race" />
</template>

<script>
//import axios from "axios"
import ItemGranpremio from "../components/ItemGranpremio.vue";
import { getNextEvent } from "../services/events";

export default {
  components: {
    ItemGranpremio,
  },
  data() {
    return {
      race: null,
    };
  },
  mounted() {
    getNextEvent()
      .then((race) => (this.race = race))
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped></style>
