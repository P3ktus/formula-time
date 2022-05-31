<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">{{nomepilota}} {{cognomepilota}}</h1>

    <div class="container-md px-4 py-4 my-5">
      <div class="row">
        <div class="col-12 col-md-4">
          <img src="https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1920.medium.jpg/1646818893219.jpg">
        </div>
        <div class="col-12 col-md-8 p-4 border-5 border-top border-end border-primary rounded-right" id="paragrafo">
          Luogo di nascita: {{nazionalità}} <br>
          Data di nascita: {{dataNascita}} <br>
          {{paragrafo}}
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
      nomepilota: "Charles",
      cognomepilota: "Leclerc",
      nazionalità: "Monaco",
      dataNascita: "16/10/1997",
      foto: "https://www.formula1.com/content/fom-website/en/drivers/charles-leclerc/_jcr_content/image.img.1920.medium.jpg/1646818893219.jpg",
      paragrafo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia mauris nec nulla fermentum, sollicitudin dictum eros aliquet. Nullam luctus tincidunt odio, a cursus leo vulputate vitae. Nullam rutrum nisi eget augue fringilla feugiat. Pellentesque vulputate, eros sed efficitur dapibus, velit velit tristique justo, eu hendrerit purus ex sit amet ligula. Sed blandit orci neque, quis dignissim purus tempor sit amet. Nullam semper dictum eleifend. Donec egestas sapien ante, cursus congue velit semper eu. Nullam quis ipsum laoreet, lacinia nulla non, tempus massa. Nam nec massa a neque accumsan ultricies in at turpis. Ut fringilla, lacus sit amet elementum commodo, libero diam fermentum arcu, quis varius sapien nibh quis libero. Fusce mi tellus, pellentesque id libero sed, congue suscipit risus. Suspendisse vitae arcu nec quam pulvinar feugiat eget pellentesque sem. Sed vitae nibh ante. Sed euismod elit non dapibus dapibus. Donec lacinia tempor nibh eu consequat. In mollis ornare massa. Mauris vulputate nunc sit amet lacinia molestie. In hac habitasse platea dictumst. Cras nec diam at sapien malesuada viverra id eget velit. Donec placerat at ex in interdum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent a turpis non nunc hendrerit interdum."
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  #paragrafo{
    text-align: left;
  }

  img{
    max-width: 100%;
  }

  .border-primary {
    border-color: #e10600 !important;
  }
</style>
