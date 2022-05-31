<template>
  <div class="container">
    <div v-if="lastEvent">
      <h5>Dati aggiornati al {{ dataUpdateTime() }}</h5>
      <h1 class="display-5 fw-bold table-title">Classifica Piloti</h1>
      <ItemTable
        :data="driverStandings"
        :headers="[
          { label: 'Pilota', key: 'driverName' },
          { label: 'Nazionalità', key: 'nationality' },
          { label: 'Vittorie', key: 'wins' },
          { label: 'Punti', key: 'points' },
        ]"
        class="results"
      />
      <h1 class="display-5 fw-bold table-title">Classifica Scuderie</h1>
      <ItemTable
        :data="constructorStandings"
        :headers="[
          { label: 'Scuderia', key: 'name' },
          { label: 'Nazionalità', key: 'nationality' },
          { label: 'Vittorie', key: 'wins' },
          { label: 'Punti', key: 'points' },
        ]"
        class="results"
      />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import axios from "axios";
import ItemTable from "../components/ItemTable.vue";
import moment from "moment-timezone";

export default {
  components: { ItemTable },
  data() {
    return {
      lastEvent: null,
      driverStandings: null,
      constructorStandings: null,
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8000/standings`)
      .then((res) => {
        this.lastEvent = res.data.lastResult;
        this.driverStandings = res.data.driverStandings.map((ds) => ({
          ...ds,
          ...ds.driver,
          driverName: `${ds.driver.forename} ${ds.driver.surname}`,
        }));
        this.constructorStandings = res.data.constructorStandings.map((cs) => ({
          ...cs,
          ...cs.car_constructor,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    dataUpdateTime() {
      if (!this.lastEvent) return "NULL";
      return moment(this.lastEvent.race.datetime).format("DD/MM/YYYY");
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.table-title {
  margin-top: 30px;
}
</style>
