<template>
  <div class="main">
      <!-- {{$route.params.Category}}  -->
    <main-navbar  @islogin="changecomp"  @query="changePageProductList"/>
    <!-- <nuxt  /> -->
    <div class = "columns">
        <filter-product-list id = "two" v-bind:categoryname=this.categoryname />
        <product-list id = "one" v-bind:categoryname=this.categoryname />
    </div>
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
          categoryname : this.$route.params.Category,
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
   .columns{
       display: flex;
       flex-direction: row;
   }
   #one {
       flex: 70%;
   }
   #two{
       flex : 30%;
   }
   
</style>
