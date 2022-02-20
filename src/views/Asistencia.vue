<template>
    <div class="container">
        <h1>Alumnos</h1>
        <Search class="mb-2" @accion="getAlumnos()" v-model="buscar"/>
        <div class="Card  d-inline-flex p-3 bd-highlight" v-for="alumno in Alumnos" :key="alumno.id">
            <Cardalum :datos="alumno"/>
        </div>
    </div>
</template>
<script>
import Search from "../components/Search";
import Cardalum from "@/components/Cardalum";
import Axios from "axios";

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
      mounted() {
        this.getAlumnos();
    },

  methods: {
      async getAlumnos(buscar){
          console.log(buscar);
          if (buscar == undefined) {
              //console.log(buscar)
            const resp = await this.axios.get("https://jsonplaceholder.typicode.com/users");
            const {data} = await resp
            this.Alumnos = data;
          }
          else
          {
            //Consulta a servidor para obtener los Alumnos
            Axios.get(`https://jsonplaceholder.typicode.com/users/${buscar}`)
            .then(result => {this.Alumnos.push(result.data)})
            .catch(err => {alert('Error');});
          }
      },
  },
}
</script>