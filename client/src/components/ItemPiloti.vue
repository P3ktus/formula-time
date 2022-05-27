<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">Piloti</h1>
    <div class="container-md px-4 py-4 my-5 fw-bold">
      <div class="pilotCards">

        <div class="row">
          <div class="col-sm-6">
            <div class="card" style="width: 25rem;">
              <img src="https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1920.medium.jpg/1646818893219.jpg" class="card-img-top" alt="pilotPortrait.png">
              <div class="card-body">
                <h5 class="card-title fw-bold">Charles Leclerc</h5> <!-- nomepilota --> 
                <p class="card-text">Scuderia Ferrari</p> <!-- nomescuderia --> 
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card" style="width: 25rem;">
              <img src="https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1920.medium.jpg/1646818893219.jpg" class="card-img-top" alt="pilotPortrait.png">
              <div class="card-body">
                <h5 class="card-title fw-bold">Charles Leclerc</h5> <!-- nomepilota --> 
                <p class="card-text">Scuderia Ferrari</p> <!-- nomescuderia --> 
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card" style="width: 25rem;">
              <img src="https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1920.medium.jpg/1646818893219.jpg" class="card-img-top" alt="pilotPortrait.png">
              <div class="card-body">
                <h5 class="card-title fw-bold">Charles Leclerc</h5> <!-- nomepilota --> 
                <p class="card-text">Scuderia Ferrari</p> <!-- nomescuderia --> 
              </div>
            </div>
          </div>
        </div>
        

      </div>
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
  
  .card-body{
    background-color: #e10600;
    color: white;
  }
  
</style>
