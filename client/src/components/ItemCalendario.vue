<template>
  <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold">Calendario</h1>
      <div class="container-md  px-4 py-4 my-5 fs-3 wrapper fw-bold">
        <a href="#" class="item d-flex align-items-center justify-content-center">GP di Spagna</a>
        <div class="item d-flex align-items-center justify-content-center">Gp di Monaco</div>
        <div class="item d-flex align-items-center justify-content-center">GP dell'Emilia Romagna</div>
        <div class="item d-flex align-items-center justify-content-center justify-content-center">GP d'Italia</div>
        <div class="item d-flex align-items-center justify-content-center">GP d'Italia</div>
        <div class="item d-flex align-items-center justify-content-center">GP d'Italisada</div>
        <div class="item d-flex align-items-center justify-content-center">GP d'Italia</div>
        <div class="item d-flex align-items-center justify-content-center">GP d'Italia</div>
        <div class="item d-flex align-items-center justify-content-center">GP d'Italia</div>
      </div>
  </div>
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
  .wrapper{
    display: flex;
    align-items: center;
    overflow-x: auto;
    color: white;
  }

  .wrapper .item{
    flex-shrink: 0;
    width: 230px;
    height: 150px;
    padding: 1.5%;
    text-align: center;
    background-color: #e10600;
    margin-right: 2px;
    transition: transform .2s;
  }

  .wrapper .item:hover {
    -ms-transform: scale(1.25); /* IE 9 */
    -webkit-transform: scale(1.25); /* Safari 3-8 */
    transform: scale(1.25); 
  }
  a {
    text-decoration: none;
    text-align: center;
    color: white;
  }

  a:hover{
    color: white;
  }
</style>
