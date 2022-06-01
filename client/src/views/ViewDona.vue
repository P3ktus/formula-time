<template>
  <div>
    <ItemDona />
    <div v-if="donations">
      <h1 class="display-5 fw-bold table-title" style="margin-bottom: 20px">
        Donazioni
      </h1>
      <ItemTable
        :data="donations"
        :headers="[
          { label: 'Nome', key: 'name' },
          { label: 'Cognome', key: 'lastName' },
          { label: 'Email', key: 'email' },
          { label: 'Importo (€)', key: 'amount' },
        ]"
      />
    </div>
  </div>
</template>

<script>
import ItemDona from "../components/ItemDona.vue";
import ItemTable from "../components/ItemTable.vue";
import { getDonationsAPI } from "../services/donations";

export default {
  components: { ItemDona, ItemTable },
  data() {
    return { donations: null };
  },
  mounted() {
    getDonationsAPI()
      .then((donations) => (this.donations = donations))
      .catch((err) => console.error(err));
  },
};
</script>

<style scoped></style>
