<template>
  <div>
    <b-navbar type="dark" class="mi-navbar">
      <b-navbar-brand href="#">Pagina de prueba</b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item to="/">Inicio</b-nav-item>
        <b-nav-item to="/dashboard">Dashboard</b-nav-item>
      </b-navbar-nav>
    </b-navbar>

    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>

.mi-navbar {
  background-color: #000000; 
}


.mi-navbar .navbar-brand,
.mi-navbar .nav-link {
  color: white !important;
}


.mi-navbar .nav-link:hover {
  color: #ffff66 !important;
}
</style>
