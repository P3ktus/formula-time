<template>
  <div class="px-4 py-5 my-5 text-center">
    <div v-if="event">
      <h1 class="display-5 fw-bold">{{event.name}}</h1>
      <h3 class="lead mb-4">{{event.date}}</h3>
      <img class="img-fluid" :src="circuitLayout" alt="circuitLayout.png"> <!-- immagine responsive !-->
      <h3 class="lead mb-4">Orario locale: {{event.myTime}}</h3>
      <h3 class="lead mb-4">Orario del circuito: {{event.circuitTime}}</h3>

      <div class="container-md px-4 fs-4" id="legenda">
        <div class="col-sm-4">
            Sessione
          </div>
          <div class="col-sm-4">
            Data
          </div>
          <div class="col-sm-4">
            Orario locale
          </div>
          <div class="col-sm-4">
            Orario circuito
          </div>
      </div>
      <div class="container-md px-4 fs-4" v-for="sessione in event.sessioni" :key="sessione" id="riga">

        <div class="row px-4 py-4">
          <div class="col-sm-4">
            {{sessione.nome}}
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
