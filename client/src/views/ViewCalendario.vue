<template>
  <div>
    <ItemCalendario
      :events="events"
      :selectedEvent="selectedEventIndex"
      :onSelect="selectEvent"
    />
    <ItemGranpremio :race="selectedEvent" />
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment-timezone";
import ItemCalendario from "../components/ItemCalendario.vue";
import ItemGranpremio from "../components/ItemGranpremio.vue";

export default {
  components: {
    ItemCalendario,
    ItemGranpremio,
  },
  data() {
    return {
      selectedEventIndex: 0,
      events: null,
      selectedEvent: null,
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8000/calendar`)
      .then((res) => {
        this.events = res.data.calendar;
        this.selectEvent(res.data.currentEventIndex);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    selectEvent(index) {
      console.log("AAA");
      this.selectedEventIndex = index;
      this.selectedEvent = null;
      axios
        .get(`http://localhost:8000/event`, {
          params: { race_id: this.events[index].race_id },
        })
        .then((res) => {
          this.selectedEvent = {
            results: res.data.results,
            event: {
              ...res.data.event,
              datetime: moment(res.data.event.datetime),
              schedule: res.data.event.schedule.map((s) => ({
                ...s,
                datetime: moment(s.datetime),
              })),
            },
          };
        })
        .catch((err) => {
          console.log(err);
          this.error = true;
        });
    },
  },
};
</script>

<style scoped></style>
