<template>
  <div class="main">
      <!-- {{$route.params.Category}}  -->
    <main-navbar  @islogin="changecomp"  @query="changePageProductList"/>
    <nuxt  />
    <!-- <filter-product-list /> -->
    <product-list v-bind:categoryname="$route.params.Category" />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer';
import MainNavbar from '~/components/MainNavbar';
import ProductList from '~/components/ProductList';
import FilterProductList from '~/components/FilterProductList';
export default {
    components: {
      Footer,
      MainNavbar,
      ProductList,
      FilterProductList

    },
    data() {
        return {
            
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
   
   
</style>
