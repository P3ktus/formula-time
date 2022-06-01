<template>
  <div class="stripe-result-container">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fw-bold">Donazione Registrata</h5>
        <p class="card-text">La donazione è stata registrata con successo.</p>
        <router-link to="/dona">Vai alle donazioni</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.stripe-result-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
</style>
