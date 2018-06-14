<template>
    <div class="container">
      {{$store.getters.getis_login}}
    </div>
</template>

<script>



export default {
    //layout : 'logedIn',
    middleware : 'login'
    ,
    
    // methods: {
    //   set_layout : function(){
    //     if($store.getters.getis_login){
    //       layout : 'logedIn'
    //     }
    //   }
    // },
    // set_layout,
    
}
</script>

<style scoped>
.container {
  height: 100vh;
}
</style>
