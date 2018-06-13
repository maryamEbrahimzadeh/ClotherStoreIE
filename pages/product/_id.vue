<template>
    <div class="container">
        {{this.$route.params.id}}
    </div>
</template>

<script>
export default {
    data() {
        //AJAX 
        // let info = fetch('my-api', {id: this.$route.params.id});
        return {
            productInfo: '',
        }
    }
}
</script>

<style scoped>
.container {
  height: 100vh;
  font-size: 5rem;  
}
</style>
