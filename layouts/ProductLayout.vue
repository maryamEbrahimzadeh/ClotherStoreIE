<template>
  <div class="main">
      <!-- {{$route.params.Category}}  -->
    <main-navbar @islogin="changecomp"  @query="changePageProductList" @targetId="changePageProductList"
     v-bind:numberoforder=this.numberoforder @profile="profilePage"  @username="setusername" />

    <!-- <nuxt v-show="!this.showprof" /> -->
    <div class = "columns">
        <filter-product-list id = "two" v-bind:categoryname=this.categoryname v-show="!this.showprof"/>
        <product-list id = "one" @numberoforder="changenumorder" :categoryname="categoryname" v-show="!this.showprof" />
    </div>
    
    <profile-comp  v-bind:username=this.username v-show="this.showprof" />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer';
import MainNavbar from '~/components/MainNavbar';
import ProductList from '~/components/ProductList';
import FilterProductList from '~/components/FilterProductList';
import ProfileComp from '~/components/ProfileComp';
export default {
    components: {
      Footer,
      MainNavbar,
      ProductList,
      FilterProductList,
      ProfileComp,

    },
    data() {
        return {
            categoryname : this.$route.params.Category,          
            numberoforder : 0,
            logedin : false,            
            username : 'ali',
            showprof : false,
        }
    },
    
    methods: {
         changePageProductList:function(query){
            //change page
            alert(query);
            this.$router.push(`/ProductList/${query}`);
        },
        changenumorder:function(n){
            this.numberoforder = n;
        },
        profilePage:function(s){
            this.showprof = s;
        },
        setusername:function(u){
            this.username = u;
        },
        changecomp:function(status){
            
            this.logedin = status;
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
