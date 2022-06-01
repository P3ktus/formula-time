<template>
  <div class="px-4 py-5 my-5 text-center">
    <h1 class="display-5 fw-bold">
      {{ driver.forename }} {{ driver.surname }}
    </h1>

    <div class="container-md px-4 py-4 my-5">
      <div class="row">
        <div class="col-12 col-md-4">
          <img :src="getDriverPic(driver)" />
        </div>
        <div
          class="col-12 col-md-8 p-4 border-5 border-top border-end border-primary rounded-right"
          id="paragrafo"
        >
          Nazionalità: {{ driver.nationality }} <br />
          Data di nascita: {{ driver.dob }} <br />
          <p style="padding-top: 20px">
            {{ driver.bio }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    driver: null,
  },
  data() {
    return {};
  },
  methods: {
    getDriverPic(driver) {
      return `http://localhost:8000/assets/${driver.img}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#paragrafo {
  text-align: left;
}

img {
  max-width: 100%;
}

.border-primary {
  border-color: #e10600 !important;
}
</style>
