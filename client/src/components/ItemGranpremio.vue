<template>
  <div class="my-5 text-center">
    <div v-if="race">
      <h1 class="display-5 fw-bold">{{ race.event.name }}</h1>
      <h3 class="lead mb-4">{{ race.event.datetime.format("DD/MM/YYYY") }}</h3>
      <img
        class="img-fluid circuit-img"
        :src="getCircuitImg(race.event)"
        onerror="if (this.src != '@/assets/no_data.png') this.src = '@/assets/no_data.png';"
        style="margin-bottom: 20px"
      />
      <!-- immagine responsive !-->
      <h3 class="lead mb-4">
        Orario locale: {{ now.tz(myTimezone).format("H:mm:ss") }}
      </h3>
      <h3 class="lead mb-4">
        Orario del circuito:{{
          now.tz(race.event.circuit.timezone).format("H:mm:ss")
        }}
      </h3>

      <div
        class="container-md px-4 fs-4"
        v-for="sessione in race.event.schedule"
        :key="sessione.name"
        id="riga"
      >
        <div class="row px-4 py-4">
          <div class="col-sm-3">
            {{ sessione.name }}
          </div>
          <div class="col-sm-3">
            {{ sessione.datetime.format("DD/MM/YYYY") }}
          </div>
          <div class="col-sm-3">
            {{ sessione.datetime.tz(myTimezone).format("H:mm") }}
          </div>
          <div class="col-sm-3">
            {{
              sessione.datetime.tz(race.event.circuit.timezone).format("H:mm")
            }}
          </div>
        </div>
      </div>
      <ItemTable
        v-if="hasResults()"
        :data="race.results"
        :headers="[
          { label: 'Pilota', key: 'driverName' },
          { label: 'Scuderia', key: 'carConstructorName' },
          { label: 'Punti', key: 'points' },
        ]"
        class="results"
      />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import ItemTable from "./ItemTable.vue";
import moment from "moment-timezone";

export default {
  props: {
    race: null,
  },
  data() {
    return {
      myTimezone: moment.tz.guess(),
      now: moment(),
      intervalHandler: null,
    };
  },
  mounted() {
    this.intervalHandler = setInterval(() => {
      this.now = moment();
    }, 1000);
  },
  unmounted() {
    clearInterval(this.intervalHandler);
  },
  components: {
    ItemTable,
  },
  methods: {
    hasResults() {
      return this.race?.results && this.race.results.length > 0;
    },
    getCircuitImg(race) {
      return `http://localhost:8000/assets/${race.circuit.img}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#riga:nth-child(odd) {
  background-color: white;
  color: black;
}

#riga:nth-child(even) {
  background-color: #e10600;
  color: white;
}

.results {
  padding: 40px 20px;
}

.circuit-img {
  max-height: 280px;
}
</style>
