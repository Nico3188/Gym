<template>
    <div class="card" style="  width:18rem; " >
  <!-- imagen por defecto. -->
  <!-- <img src="" class="card-img-top" alt="img usuarios"> -->
  <div class="card-body">   
    <h5 class="card-title">Nombre: {{datos.name}}</h5>
    <p class="card-text">DNI: {{datos.id}}</p>
    <!-- <p class="card-text">Direccion: {{datos.address.street}}</p> -->
    <p class="card-text">Cel: {{datos.phone}}</p>
    <p>Peso: </p>
    <p>Altura: </p>
    <form class="text-end">
      <button type="submit" class="btn btn-primary m-2">P</button>
      <button type="submit" class="btn btn-primary">A</button>
    </form>
  </div>
</div>
</template>
<script>
export default {
  props:{
    datos:null,
  },
}
</script>
