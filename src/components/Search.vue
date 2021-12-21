<template>
    <form @submit.prevent="activarSearch">
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Buscar</label>
        <input 
            type="text" 
            class="form-control" 
            aria-describedby="emailHelp" 
            v-model="buscar">
    </div>
    <button type="submit" class="btn btn-primary">Buscar</button>
    </form>
</template>
<script>
export default {
    data:()=>({
        buscar:"",
    }),
    methods: {
        activarSearch(){
            this.$emit("accion",this.buscar);
            //console.log(this.buscar);
        }
    },
}
</script>
