<template>
  <b-container class="mt-4">
    <b-table
      :items="usuarios"
      :fields="campos"
      striped
      bordered
      hover
      head-variant="primary"
      class="usuarios-table"
    >
    </b-table>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      campos: [
        { key: "id", label: "ID", sortable: true },
        { key: "nombre", label: "Nombre", sortable: true },
        { key: "email", label: "Email", sortable: true }
      ],
      usuarios: [
        { id: 1, nombre: "Ana", email: "ana@mail.com" },
        { id: 2, nombre: "Luis", email: "luis@mail.com" },
        { id: 3, nombre: "Carlos", email: "carlos@mail.com" }
      ]
    };
  }
};
</script>

<style scoped>


.usuarios-table tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}


.usuarios-table tbody td {
  text-align: center;
}
</style>
