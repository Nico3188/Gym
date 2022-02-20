<template>
    <div class="conteiner m-5">
        <h1 class="p-3">Alta de Usuario</h1>
        
        <div m-4>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input v-model="email" type="email" class="form-control" id="inputEmail3">
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                    <input v-model="pass" type="password" class="form-control" id="inputPassword3">
                </div>
            </div>
            <button class="btn btn-primary" @click="onRegisterButtonClick">Registrarse</button>
        </div>
    </div>
</template>
<script>
import Axios from "axios";
export default {
    data(){
        return({
            email:"",
            pass:"",
        })
    },
    methods: {
        getUser(){
            if (this.email!="" && this.pass!=""){
                console.log("textbox ok")
                router.push("/Alumno")
            }
            else{
                console.log("textbox no ok")
            }
            //consulta a la base de datos

        },
        onRegisterButtonClick(){
            console.log(this.pass);
                    Axios.post(`http://localhost:5000/Users/student/register`, {
          userName: "allen",
          email: this.email,
          password: this.pass,
          firstName: "aaron",
          lastName: "soria",
          birthday: "2022-02-19T23:18:06.746Z",
        })
          .then((result) => {
            alert("Success");
            //this.Alumnos.push(result.data);
          })
          .catch((err) => {
            alert("Error");
          });
        }
    },
}
</script>