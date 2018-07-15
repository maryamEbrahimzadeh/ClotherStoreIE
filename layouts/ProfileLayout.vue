<template>
  <div class="main">
    <main-navbar  v-bind:login="true"  @query="changePageProductList" @targetId="changePageProductList"  />
    <!-- <nuxt  /> -->
    <!-- <profile-comp  v-bind:username=this.username v-if="logedin"/> -->
    {{username}}
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer';
import MainNavbar from '~/components/MainNavbar';
import ProfileComp from '~/components/ProfileComp';
export default {
    components: {
      Footer,
      MainNavbar,
      ProfileComp
    },
    data() {
        return {           
            username : this.$route.params.username, 
        }
    },
    
    methods: {
        
        changePageProductList:function(query){
            //change page
            this.$router.push(`/ProductList/${query}`);
        }
    }
  
}
</script>


<style>
    @font-face {
        font-family: myFirstFont;
        src: url(~/assets/font/Shabnam-light.woff);
    }
    
    html {
      font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 16px;
      direction: rtl;
      word-spacing: 1px;
    }
   
</style>
