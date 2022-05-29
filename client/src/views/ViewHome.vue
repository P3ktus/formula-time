<template>
    <ItemGranpremio :race="race"/>
</template>

<script>
//import axios from "axios"
import ItemGranpremio from '../components/ItemGranpremio.vue'
import moment from "moment-timezone"

export default {
    components:{
        ItemGranpremio
    },
    data () {
        return {
        race: null
        }
    },
    mounted() {
        setTimeout(() => {
           console.log("prova");
           this.race = chiamata;
        }, 3000);
        
    }

}

const chiamata = {
  event: {
    name:"Gran Premio di Monaco",
    datetime: moment( "2022-05-29T13:00:00Z"),
    date: "x",
    year: "x",
    time: "13:00" ,
    url: "x",
    timezone: "Europe/Moscow",
    race_id: 7,
    schedule: [
      {
        name: "PL1",
        datetime: moment( "2022-05-27T13:00:00Z"),
        session_id: 1, 
        race_id: 7,
      },
      {
        name: "PL2",
        datetime: moment( "2022-05-27T16:00:00Z"),  
        session_id: 2,
        race_id: 7,
      },
      {
        name: "PL3",
        datetime: moment( "2022-05-28T10:00:00Z"),  
        session_id: 3,
        race_id: 7,
      },
      {
        name: "Qualifica",
        datetime: moment( "2022-05-28T15:00:00Z"),  
        session_id: 4,
        race_id: 7,
      },
      {
        name: "Gara",
        datetime: moment( "2022-05-29T13:00:00Z"),  
        race_id: 7,
      },
    ]
  },
  results: {}
}
</script>

<style scoped>

</style>