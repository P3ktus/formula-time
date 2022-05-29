<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Classifica</h1>

      <!-- classifica piloti -->
      <h2 class="display-5 fw-bold">Classifica piloti</h2>
      <div class="container-md px-4 fs-4" v-for="pilota in standings.pilotStandings" :key="pilota" id="riga">

        <div class="row px-4 py-4">
          <div class="col-sm-3">
            {{pilota.position}}
          </div>
          <div class="col-sm-3">
            {{pilota.name}}
          </div>
          <div class="col-sm-3">
            {{pilota.team}}
          </div>
          <div class="col-sm-3">
            {{pilota.points}}
          </div>
        </div>
      </div>
      
      <!-- classifica costruttori -->
      <h2 class="display-5 fw-bold">Classifica costruttori</h2>
      <div class="container-md px-4 fs-4" v-for="squadra in standings.teamStandings" :key="squadra" id="riga">

        <div class="row px-4 py-4">
          <div class="col-sm-4">
            {{squadra.position}}
          </div>
          <div class="col-sm-4">
            {{squadra.name}}
          </div>
          <div class="col-sm-4">
            {{squadra.points}}
          </div>
        </div>
      </div>

  </div>
</template>

<script>

export default {
  props: {
    race: null,
  },
  data () {
    return {
      
    }
  },
  mounted() {
  },
  unmounted() {
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #riga:nth-child(odd){
    background-color: white;
    color: black;
  }
  
  #riga:nth-child(even){
    background-color: #e10600;
    color: white;
  }
  
</style>
