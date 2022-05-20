<template>
  <div>
    <ItemHeader />
    <ItemGranpremio :event="event"  />
    <ItemFooter />
  </div>
</template>

<script>
import axios from "axios"
import ItemHeader from './components/ItemHeader.vue'
import ItemFooter from './components/ItemFooter.vue'
import ItemGranpremio from './components/ItemGranpremio.vue'

export default {
  name: 'App',
  components: {
    ItemHeader,
    ItemFooter,
    ItemGranpremio
  },
  data () {
    return {
      event: null
    }
  },
  mounted() {
    axios.get("http://localhost:8000/getNextEvent", {params: {eventId: "xxx"}}).then((res) => {
      console.log("First", res.data, res.data.name);
      this.event = {...res.data, startDate: new Date(res.data.startDate), endDate: new Date(res.data.endDate)};
    })

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
