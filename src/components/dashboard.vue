<template>
  <b-container class="mt-4">
    <b-row>
      
      <b-col cols="4">
        <b-card class="dashboard-card">
          <h4 class="card-header bg-usuarios">Usuarios</h4>
          <h2 class="card-number">120</h2>
        </b-card>
      </b-col>

      
      <b-col cols="4">
        <b-card class="dashboard-card">
          <h4 class="card-header bg-ventas">Ventas</h4>
          <h2 class="card-number">$9500</h2>
        </b-card>
      </b-col>

      
      <b-col cols="4">
        <b-card class="dashboard-card">
          <h4 class="card-header bg-pedidos">Pedidos</h4>
          <h2 class="card-number">38</h2>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {}
</script>

<style scoped>

.dashboard-card {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  padding: 10px;
  text-align: center;
}


.card-header {
  color: white;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
}


.bg-usuarios {
  background-color: #007bff; 
}
.bg-ventas {
  background-color: #28a745; 
}
.bg-pedidos {
  background-color: #ffc107;


.card-number {
  color: #333;
  font-size: 2rem;
  margin: 0;
}
</style>
