<template>
    <div class="card" style="  width:18rem; " >
  <!-- imagen por defecto. -->
  <!-- <img src="/img/tartaro-user.png" class="card-img-top" alt="img usuarios"> -->
  <div class="card-body">
    nombre
    apellido
    dni    
    <!-- <h5 class="card-title">{{datos.name}}</h5> -->
    <!-- <p class="card-text">{{datos.id}}</p> -->
    <!-- <p class="card-text">{{datos.address.city}}</p> 
    <p class="card-text">{{datos.address.street}}</p> -->
    <!-- <p class="card-text">{{datos.phone}}</p> -->
    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
  </div>
</div>
</template>
<script>
export default {
  props:{
    datos:[],
    // name:String,
    // city:String,
    // street:String,
    // phone:String,
    // DNI:String,
  },
}
</script>
