<template>

  <footer class="footer py-3">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><router-link class="nav-link px-2" to="/">Home</router-link></li>_
      <li class="nav-item"><router-link class="nav-link px-2" to="/calendario">Calendario</router-link></li>_
      <li class="nav-item"><router-link class="nav-link px-2" to="/classifica">Classifica</router-link></li>_
      <li class="nav-item"><router-link class="nav-link px-2" to="/piloti">Piloti</router-link></li>_
      <li class="nav-item"><router-link class="nav-link px-2" to="/storico">Storico</router-link></li>_
      <li class="nav-item"><router-link class="nav-link px-2" to="/dona">Dona</router-link></li>
    </ul>
    <p class="text-center">© 2022 FormulaTime</p>
  </footer>

</template>

<script>
export default {
  data () {
    return {
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.nav-link{
  color: white;
}

footer {
  background-color: #3c3c3c;
  color: white;
}

.border-bottom {
  margin-left: 25%;
  margin-right: 25%;
}

</style>
