<template>
  <b-container class="mt-4">
    <b-card title="Formulario de Registro">
      <b-form @submit.prevent="send">

        <b-form-group label="Nombre" label-for="nombre">
          <b-form-input id="nombre" v-model="nombre" required></b-form-input>
        </b-form-group>

        <b-form-group label="Email" label-for="email">
          <b-form-input id="email" v-model="email" type="email" required></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Enviar</b-button>

      </b-form>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      email: ""
    }
  },
  methods: {
    send() {
      alert(`Nombre: ${this.nombre}\nEmail: ${this.email}`);
    }
  }
}
</script>
