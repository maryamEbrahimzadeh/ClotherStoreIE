<template>
  <div class="main">
    <main-navbar  @islogin="changecomp"  @query="changePageProductList" @targetId="changePageProductList"/>
    <nuxt v-if="!logedin" />
    <slider-home-page v-if="logedin"/>
    <news v-if="logedin"/>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer';
import MainNavbar from '~/components/MainNavbar';
import News from '~/components/News';
import SliderHomePage from '~/components/SliderHomePage';
export default {
    components: {
      Footer,
      MainNavbar,
      News,
      SliderHomePage

    },
    data() {
        return {
            logedin :false,
        }
    },
    
    methods: {
        changecomp:function(status){
            this.logedin = status;
        }
        ,changePageProductList:function(query){
            //change page
            this.$router.push(`ProductList/${query}`);
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
    .main{
        display: flex;
        flex-direction: column;
    }
   
</style>
