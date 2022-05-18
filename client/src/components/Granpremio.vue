<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">{{name}}</h1>
    <h3 class="lead mb-4">{{eventDate}}</h3>
    <img class="img-fluid" :src="circuitLayout" alt="circuitLayout.png"> <!-- immagine responsive !-->
    <h3 class="lead mb-4">Orario locale: {{myTime}}</h3>
    <h3 class="lead mb-4">Orario del circuito: {{circuitTime}}</h3>

    <div class="row px-4 fs-4" id="legenda">
      <div class="col-md-auto">
          Sessione
        </div>
        <div class="col-md-auto">
          Data
        </div>
        <div class="col-md-auto">
          Orario locale
        </div>
        <div class="col-md-auto">
          Orario circuito
        </div>
    </div>
    <div class="container-md px-4 fs-4" v-for="sessione in sessioni" :key="sessione" id="riga">

      <div class="row px-4 py-4">
        <div class="col-md-auto">
          {{sessione.nomeSessione}}
        </div>
        <div class="col-md-auto">
          {{sessione.date}}
        </div>
        <div class="col-md-auto">
          {{sessione.sessionMyTime}}
        </div>
        <div class="col-md-auto">
          {{sessione.sessionTrackTime}}
        </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

      name: 'GP di Spagna', //placeholder
      circuitLayout: "https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png.transform/7col/image.png",
      eventDate: '06-08 Maggio 2022', //placeholder
      timezone: 'gmt +2', //placeholder
      myTime: '18:00', //placeholder
      circuitTime: '19:00', //placeholder
      sessioni: [{
          nomeSessione: 'PL1',
          date: '18/8',
          sessionMyTime: '18:00',
          sessionTrackTime: '19:00'
      },
      {
          nomeSessione: 'PL2',
          date: '18/8',
          sessionMyTime: '18:00',
          sessionTrackTime: '19:00'
      },
      {
          nomeSessione: 'PL3',
          date: '19/8',
          sessionMyTime: '18:00',
          sessionTrackTime: '19:00'
      },
      {
          nomeSessione: 'quali',
          date: '19/8',
          sessionMyTime: '18:00',
          sessionTrackTime: '19:00'
      },
      {
          nomeSessione: 'gara',
          date: '20/8',
          sessionMyTime: '18:00',
          sessionTrackTime: '19:00'
      }]
      
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
