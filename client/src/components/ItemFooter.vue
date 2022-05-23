<template>

  <footer class="footer  py-3">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2">{{home}}</a></li>_
      <li class="nav-item"><a href="#" class="nav-link px-2">{{calendario}}</a></li>_
      <li class="nav-item"><a href="#" class="nav-link px-2">{{classifica}}</a></li>_
      <li class="nav-item"><a href="#" class="nav-link px-2">{{piloti}}</a></li>_
      <li class="nav-item"><a href="#" class="nav-link px-2">{{storico}}</a></li>
    </ul>
    <p class="text-center">© 2022 FormulaTime</p>
  </footer>

</template>

<script>
export default {
  data () {
    return {
      logo: 'FormulaTime',
      home: 'Home',
      calendario: 'Calendario',
      classifica: 'Classifica',
      piloti: 'Piloti',
      storico: 'Storico',
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
