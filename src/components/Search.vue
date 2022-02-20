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
        <button type="submit" class="btn btn-primary m-2">Buscar</button>
    </form>
</template>
<script>
export default {
    props:{
        buscar:""
    },
    methods: {
        activarSearch(){
            
            this.$emit("accion",this.buscar);

            //console.log(this.buscar);
        }
    },
}
</script>
