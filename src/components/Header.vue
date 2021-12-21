<template>
    <header>
        <!-- <h1>{{Title}}</h1> -->
        <Nav/>
    </header>
</template>
<script>
import Nav from "./Nav.vue"

export default {
    components:{
        Nav,
    },
    
    data:()=>({
        Title:"Tartaro",
    })
};
</script>