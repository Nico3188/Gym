<template>
    <footer>
        <h5 class="text-center"> - Nicolas Soria - </h5>
    </footer>
</template>
<script>
    export default{
        computed:{
            Year(){
                return new date().getFullYear().Year;
            }, 
        },
    };
</script>

<style scoped>
    h5{
        color:blueviolet;
        background: #333;
        padding: 10px; 
    }
</style>