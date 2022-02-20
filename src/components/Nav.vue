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
        <router-link v-if="!sesion" to="/RegistroUser" class="nav-link" >Registrarse</router-link>
        <router-link v-if="!sesion" to="/LogIn" class="nav-link" >Iniciar Sesion</router-link>
        <router-link v-if="sesion" to="/Alumno" class="nav-link" >Alumno</router-link>
        <router-link v-if="sesion" to="/Pagos" class="nav-link" >Registrar Pago</router-link>
        <router-link v-if="sesion" to="/Asistencia" class="nav-link" >Asistencia</router-link> 
        <button v-if="sesion" type="button" class="btn btn-primary btn-danger" @click.passive="cerrarsesion">Cerrar Sesion</button>
      </div>
    </div>
  </div>
</nav>   
</template>
<script>
import router from "../router/index"

export default {

  computed:{
    sesion(){
      const user = localStorage.getItem("user");
      if (user) {
        return true
      }
      else{
        return false
      }
    },
  },
  methods: {
    cerrarsesion(){
      localStorage.removeItem("user");
      
      router.push("/");
    },
  },
  
}
</script>
