<template>
  <div class="m-5">
    <h1 class="p-3">Iniciar Sesion</h1>
    <form @submit.prevent="getUser">
      <div class="row mb-4">
        <label class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="email" class="form-control" v-model="this.email" />
        </div>
      </div>
      <div class="row mb-3">
        <label class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" v-model="this.pass" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  </div>
</template>
<script>
import router from "../router/index";
import Axios from "axios";

export default {
  data() {
    return {
      email: "",
      pass: "",
    };
  },
  methods: {
    getUser() {
      const user = false;
      if (this.email != "" && this.pass != "") {
        //console.log("textbox ok"); //consultar base de datos
        // localStorage.setItem("user", true);
        Axios.post(`https://localhost:5001/Users/student/register`, {
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
        //router.push("/Alumno");
      } else {
        console.log("textbox no ok");
      }
    },
  },
};
</script>