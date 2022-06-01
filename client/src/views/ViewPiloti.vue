<template>
  <div class="container-md">
    <h1 class="display-5 py-4 fw-bold">Piloti</h1>
    <div
      class="d-flex flex-wrap align-items-center justify-content-center"
      v-if="drivers"
    >
      <ItemPiloti
        v-for="driver in drivers"
        :key="driver.driver_id"
        :driver="driver"
        class="pilot-card"
        @click="goToDriver(driver)"
      />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import ItemPiloti from "../components/ItemPiloti.vue";
import { getDrivers } from "../services/drivers";

export default {
  components: { ItemPiloti },
  data() {
    return {
      drivers: null,
    };
  },
  mounted() {
    getDrivers()
      .then((drivers) => (this.drivers = drivers))
      .catch((err) => console.error(err));
  },
  methods: {
    goToDriver(driver) {
      if (driver.bio) this.$router.push(`/piloti/${driver.driver_id}`);
      else window.open(driver.url, "_blank").focus();
    },
  },
};
</script>

<style scoped>
.pilot-card {
  max-width: 300px;
}
</style>
