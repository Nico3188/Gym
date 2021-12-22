<template>
    <div class="container">
        <h1>Alumnos</h1>
        <Search class="mb-2" @accion="getAlumnos"/>
        <div class="Card  d-inline-flex p-3 bd-highlight" v-for="alumno in Alumnos" :key="alumno.id">
            <Cardalum/>
        </div>
        
    </div>

</template>
<script>
import Search from "../components/Search";
import Cardalum from "@/components/Cardalum";
import Axios from "axios"
//  
//:name="Alumno.name" :DNI="Alumno.id" :phone="Alumno.phone" :street="Alumno.address.street" :city="Alumno.address.city"  
export default {
    data (){
        return{
            Alumnos:[],
        }
    },
  components:{
      Cardalum,
      Search,
  },
    created() {
        this.getAlumnos();
    },

  methods: {
      getAlumnos(buscar){
          //Consulta a servidor para obtener los Alumnos
          Axios.get('https://jsonplaceholder.typicode.com/users/1')
          .then(result => {
              this.Alumnos.push(result.data)
          })
          .catch(err => {
              alert('Error');
          });
      },
  },
}
</script>