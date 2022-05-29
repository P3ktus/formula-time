<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Storico</h1>
    <div class="container-md px-4 py-3 my-3" id="dropdown">
      mettere due dropdown menus
    </div>
    <div v-if="event">
      <h1 class="display-5 fw-bold">{{event.name}}</h1>
      
      <div class="container-md px-4 fs-4" id="legenda">
        <div class="col-sm-4">
            Posizione
          </div>
          <div class="col-sm-4">
            Nome
          </div>
          <div class="col-sm-4">
            Scuderia
          </div>
          <div class="col-sm-4">
            Punti
          </div>
      </div>
      <div class="container-md px-4 fs-4" v-for="sessione in event.sessioni" :key="sessione" id="riga">

        <div class="row px-4 py-4">
          <div class="col-sm-4">
            {{sessione.nomeSessione}}
          </div>
          <div class="col-sm-4">
            {{sessione.date}}
          </div>
          <div class="col-sm-4">
            {{sessione.sessionMyTime}}
          </div>
          <div class="col-sm-4">
            {{sessione.sessionTrackTime}}
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      Loading...
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: null,
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #riga:nth-child(even){
    background-color: white;
    color: black;
  }
  
  #riga:nth-child(odd){
    background-color: #e10600;
    color: white;
  }

  #legenda{
    background-color: lightgrey;
    color: black;
  }

</style>
