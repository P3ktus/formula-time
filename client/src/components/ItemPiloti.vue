<template>
  <div class="card">
    <img :src="getDriverPic(driver)" class="card-img-top" alt="Driver Pic" />
    <div class="card-body">
      <h5 class="card-title fw-bold">
        {{ driver.forename }} {{ driver.surname }}
      </h5>
      <!-- nomepilota -->
      <p class="card-text">{{ driver.dob }}</p>
      <!-- nomescuderia -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["driver"],
  methods: {
    getDriverPic(driver) {
      return `http://localhost:8000/assets/${driver.img}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-body {
  background-color: #e10600;
  color: white;
}
.card {
  cursor: pointer;
}
</style>
