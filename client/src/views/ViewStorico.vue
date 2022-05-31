<template>
  <div class="container-md">
    <div class="season-selector d-flex justify-content-center">
      <span class="season">Seleziona la Stagione</span>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {{ drpdownText() }}
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li v-for="(season, index) in seasons" :key="season">
            <a class="dropdown-item" href="#" @click="selectSeason(index)">{{
              season
            }}</a>
          </li>
        </ul>
      </div>
    </div>
    <ItemCalendario
      :events="events"
      :selectedEvent="selectedEventIndex"
      :onSelect="selectEvent"
      v-if="events"
    />
    <ItemGranpremio
      style="width: 100%"
      :race="selectedEvent"
      v-if="selectedEvent"
    />
  </div>
</template>

<script>
import ItemCalendario from "../components/ItemCalendario.vue";
import ItemGranpremio from "../components/ItemGranpremio.vue";
import axios from "axios";
import { getCalendar, getCalendarEvent } from "../services/events";
export default {
  components: {
    ItemCalendario,
    ItemGranpremio,
  },
  data() {
    return {
      seasons: [],
      selectedSeasonIndex: null,
      events: null,
      selectedEventIndex: 0,
      selectedEvent: null,
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8000/seasons`)
      .then((res) => (this.seasons = res.data))
      .catch((err) => console.error(err));
  },
  methods: {
    drpdownText() {
      if (this.seasons.length == 0) return "Loading...";
      if (this.selectedSeasonIndex == null) return "Seleziona";
      return this.seasons[this.selectedSeasonIndex];
    },
    selectSeason(index) {
      this.selectedSeasonIndex = index;
      this.events = null;
      this.selectedEvent = null;
      getCalendar(this.seasons[index])
        .then(({ calendar, currentEventIndex }) => {
          this.events = calendar;
          this.selectEvent(currentEventIndex);
        })
        .catch((err) => console.error(err));
    },
    selectEvent(index) {
      this.selectedEventIndex = index;
      this.selectedEvent = null;
      getCalendarEvent(this.events[index].race_id)
        .then((event) => {
          this.selectedEvent = event;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.season-selector {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 30px 0;
}

.season-selector > span {
  margin-right: 60px;
}

.dropdown-menu {
  max-height: 300px;
  overflow: scroll;
}
</style>
