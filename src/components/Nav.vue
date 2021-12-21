<template >
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-gradient">
  <div class="container-fluid">
    <router-link  to="/" class="navbar-brand" >Tartaro</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <!-- <router-link to="/" class="nav-link active" aria-current="page" >Home</router-link> -->
        <router-link to="/Pagos" class="nav-link" >Registrar Pago</router-link>
        <router-link to="/Asistencia" class="nav-link" >Asistencia</router-link> 
      </div>
    </div>
  </div>
</nav>   
</template>
<script>
export default {

}
</script>

<style>

</style>
