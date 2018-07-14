<template>
  <div class="main">
    <main-navbar  @islogin="changecomp"  @query="changePageProductList"/>
    <nuxt  />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer';
import MainNavbar from '~/components/MainNavbar';
export default {
    components: {
      Footer,
      MainNavbar,

    },
    data() {
        return {
            
        }
    },
    
    methods: {
        
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
