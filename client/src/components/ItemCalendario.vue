<template>
  <div class="text-center">
    <h1 class="display-5 fw-bold">Calendario</h1>
    <div class="container-md py-4 fs-3 wrapper fw-bold">
      <div
        v-for="(event, index) in events"
        @click="onSelect(index)"
        class="item d-flex align-items-center justify-content-center"
        :key="event.race_id"
      >
        {{ event.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    events: [],
    selectedEvent: null,
    onSelect: null,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  overflow-x: auto;
  color: white;
}

.wrapper .item {
  flex-shrink: 0;
  width: 230px;
  height: 150px;
  padding: 1.5%;
  text-align: center;
  background-color: #e10600;
  margin-right: 2px;
  transition: transform 0.2s;
}

.wrapper .item:hover {
  -ms-transform: scale(1.25); /* IE 9 */
  -webkit-transform: scale(1.25); /* Safari 3-8 */
  transform: scale(1.25);
}
a {
  text-decoration: none;
  text-align: center;
  color: white;
}

a:hover {
  color: white;
}
</style>
