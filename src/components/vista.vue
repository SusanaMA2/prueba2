<template>
  <b-container class="mt-4">
    <h2>Inicio</h2>
    <Formulario />
    <Tabla class="mt-4" />
  </b-container>
</template>

<script>
import Formulario from "../components/formulario.vue"
import Tabla from "../components/tabla.vue"

export default {
  components: { Formulario, Tabla }
}
</script>
