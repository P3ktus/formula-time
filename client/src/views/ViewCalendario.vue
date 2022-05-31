<template>
  <div>
    <ItemCalendario
      :events="events"
      :selectedEvent="selectedEventIndex"
      :onSelect="selectEvent"
      style="margin-top: 30px"
    />
    <ItemGranpremio :race="selectedEvent" />
  </div>
</template>

<script>
import ItemCalendario from "../components/ItemCalendario.vue";
import ItemGranpremio from "../components/ItemGranpremio.vue";
import { getCalendar, getCalendarEvent } from "../services/events";

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
    getCalendar()
      .then(({ calendar, currentEventIndex }) => {
        this.events = calendar;
        this.selectEvent(currentEventIndex);
      })
      .catch((err) => console.error(err));
  },
  methods: {
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

<style scoped></style>
