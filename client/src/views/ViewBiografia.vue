<template>
  <div>
    <ItemBiografia v-if="driver" :driver="driver" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import ItemBiografia from "../components/ItemBiografia.vue";
import { getDriver } from "../services/drivers";

export default {
  components: {
    ItemBiografia,
  },
  data() {
    return {
      driver: null,
    };
  },
  mounted() {
    getDriver(this.$route.params.driverId)
      .then((driver) => (this.driver = driver))
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped></style>
