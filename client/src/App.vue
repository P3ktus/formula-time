<template>
  <div id="nav">
    <ItemHeader/>
    <div class="content-container">
      <router-view/>
    </div>
    <ItemFooter/>
  </div>
</template>

<script>

import axios from "axios"
import ItemHeader from './components/ItemHeader.vue'
import ItemFooter from './components/ItemFooter.vue'

export default {
  name: 'App',
  components: {
    ItemHeader,
    ItemFooter
  },
  data () {
    return {
      event: null
    }
  },
  mounted() {
    axios.get("http://localhost:8000/event").then((res) => {
      console.log("First", res.data, res.data.name);
      this.event = {...res.event.data, startDate: new Date(res.data.startDate), endDate: new Date(res.data.endDate)};
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
 min-height: 100vh;
}

body {
  min-height: 100vh;
}

#nav {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-container {
  flex: 1;
}


</style>
