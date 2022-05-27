<template>
  <header>
    <a class="logo">{{logo}}</a>
  <div class="header-right">
    <router-link to="/">Home</router-link>
    <router-link to="/calendario">Calendario</router-link>
    <router-link to="/classifica">Classifica</router-link>
    <router-link to="/piloti">Piloti</router-link>
    <router-link to="/storico">Storico</router-link>
  </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      logo: 'FormulaTime',
      classifica: 'Classifica',
      piloti: 'Piloti',
      storico: 'Storico',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  header {
    overflow: hidden;
    background-color: #e10600;
    text-align: center;
    padding: 20px 10px;
    position: fixed top;
    width: 100%;
  }

  header a{
    float: left;
    color: white;
    padding: 12px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
  }

  .header-right a:hover {
    background-color: #c50700;
    color: white;
  }

  header a.logo {
    font-size: 25px;
    font-weight: bold;
  }

  .header-right {
  float: right;
  }
</style>
