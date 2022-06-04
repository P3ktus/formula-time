<template>
  <div class="py-5">
    <h1 class="display-5 fw-bold mb-3">Dona</h1>
    <div class="container-md fs-5">
      FormulaTime è un progetto libero non affiliato con Formula 1, Formula One
      Management o qualsiasi altra sussidiaria associata con le organizzazioni
      che governano la Formula 1. Questo sito è gestito da volontari e sarà
      sempre gratuito per tutti gli utenti. Se trovi il sito di tuo gradimento,
      aiutaci a sostenere i costi di gestione del server con un'offerta libera!
    </div>
    <div class="container-md px-4 py-4 mt-5">
      <form class="row g-3" @submit.prevent="sendDonation">
        <div class="col-12 col-md-12 align-self-start">
          <label for="amount" class="form-label">Donazione</label>
          <div class="input-group mb-3">
            <span class="input-group-text">€</span>
            <input
              type="number"
              class="form-control"
              id="amount"
              placeholder="Inserisci donazione..."
              min="1"
              step="1"
              required
            />
            <span class="input-group-text">.00</span>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <label for="nome" class="form-label">Nome</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="nome"
            required
          />
        </div>
        <div class="col-12 col-md-6">
          <label for="cognome" class="form-label">Cognome</label>
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="cognome"
            required
          />
        </div>
        <div class="col-12 col-md-8">
          <label for="emailInfo" class="form-label">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="mariorossi@gmail.com"
            required
          />
        </div>
        <div class="col-12 col-md-4">
          <label for="telefono" class="form-label"
            >Telefono (facoltativo)</label
          >
          <input
            type="tel"
            class="form-control"
            id="phone"
            placeholder="3333333333"
            pattern="[0-9]{10}"
          />
        </div>
        <div class="col-12">
          <label for="commenti" class="form-label"
            >Scrivici un messaggio! (facoltativo)</label
          >
          <textarea
            class="form-control"
            id="msg"
            rows="4"
            placeholder="Scrivi qui.."
          ></textarea>
        </div>

        <div class="col-md-12">
          <button type="submit" class="btn btn-primary fs-4">
            Invia Donazione
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { sendDonationsAPI } from "../services/donations";

export default {
  props: {},
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    sendDonation(event) {
      if (this.loading) return;
      const {
        amount: { value: amount },
        name: { value: name },
        email: { value: email },
        lastName: { value: lastName },
        phone: { value: phone },
        msg: { value: msg },
      } = event.target.elements;

      this.loading = true;
      sendDonationsAPI(amount, name, lastName, email, phone, msg)
        .then((redirectUri) => {
          window.location.href = redirectUri;
          this.loading = false;
        })
        .catch((err) => {
          console.error(err);
          this.loading = false;
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-md {
  text-align: left;
}

.btn-primary {
  background-color: #e10600;
  color: white;
  border: none;
}
</style>
