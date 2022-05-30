<template>
  <div class="px-4 py-5 my-5">
    <h1 class="display-5 fw-bold mb-3">Dona</h1>
    <div class="container-md fs-5">FormulaTime è un progetto libero non affiliato con Formula 1, Formula One Management o qualsiasi altra sussidiaria associata
       con le organizzazioni che governano la Formula 1. Questo sito è gestito da volontari e sarà sempre gratuito per tutti gli utenti.
       Se trovi il sito di tuo gradimento, aiutaci a sostenere i costi di gestione del server con un'offerta libera!</div>
    <div class="container-md px-4 py-4 mt-5">
      <form class="row g-3">
        <div class="col-12 col-md-6">
          <label for="nome" class="form-label">Nome</label>
          <input type="text" class="form-control" id="nome" placeholder="nome" required> 
        </div>
        <div class="col-12 col-md-6">
          <label for="cognome" class="form-label">Cognome</label>
          <input type="text" class="form-control" id="cognome" placeholder="cognome" required> 
        </div>
        <div class="col-12 col-md-8">
          <label for="emailInfo" class="form-label">Email</label>
          <input type="email" class="form-control" id="emailInfo" placeholder="mariorossi@gmail.com" required> 
        </div>
        <div class="col-12 col-md-4">
          <label for="telefono" class="form-label">Telefono (facoltativo)</label>
          <input type="tel" class="form-control" id="telefono" pattern="0[0-9]{9}" placeholder="0641000000"> 
        </div>
        <div class="col-12">
          <label for="commenti" class="form-label">Scrivici un messaggio! (facoltativo)</label>
          <textarea class="form-control" id="commenti" rows="4" placeholder="Scrivi qui.."></textarea> 
        </div>

        <hr class="my-4">
        <div class="fs-4">Seleziona una forma di pagamento</div>
          <div class="form-check">
            <input id="credit" name="metodoPagamento" type="radio" class="form-check-input" checked="" required="">
            <label class="form-check-label" for="credito">Carta di credito</label>
          </div>
          <div class="form-check">
            <input id="paypal" name="metodoPagamento" type="radio" class="form-check-input" required="">
            <label class="form-check-label" for="paypal">PayPal</label>
          </div>
          <div class="form-check">
            <input id="altro" name="metodoPagamento" type="radio" class="form-check-input" required="">
            <label class="form-check-label" for="altro">Altro</label>
          </div>
          
        <div class="col-md-12">
          <button type="submit" class="btn btn-primary fs-4">Invia</button>
        </div>
      </form>
      
    </div>
  </div>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container-md{
    text-align: left;
  }

  .btn-primary{
    background-color: #e10600;
    color: white;
    border: none;
  }
</style>
