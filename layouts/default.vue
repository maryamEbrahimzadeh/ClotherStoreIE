<template>
  <div class="main">
    <main-navbar  @islogin="changecomp"   @query="changePageProductList" @targetId="changePageProductList"
     v-bind:numberoforder=this.numberoforder  @profile="profilePage"  @username="setusername"/>

    <nuxt v-show="!this.logedin  && !this.showprof" />
    <slider-home-page v-show="this.logedin  && !this.showprof"/>
    <news  v-show="this.logedin  && !this.showprof"/>
    <profile-comp  v-bind:username=this.username v-show="this.showprof" />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer';
import MainNavbar from '~/components/MainNavbar';
import News from '~/components/News';
import SliderHomePage from '~/components/SliderHomePage';
import ProfileComp from '~/components/ProfileComp';
export default {
    components: {
      Footer,
      MainNavbar,
      News,
      SliderHomePage,
      ProfileComp

    },
    data() {
        return {
            logedin : false,
            numberoforder : 0,
            username : 'ali',
            showprof : false,
        }
    },
    
    methods: {
        changePageProductList:function(query){
            //change page
            // alert(query);
            this.$router.push(`/ProductList/${query}`);
        },
        profilePage:function(s){
            // this.$router.push(`Profile/${this.username}`);
            // alert(s);
            this.showprof = s;
            // alert(this.showprof);

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
    .main{
        display: flex;
        flex-direction: column;
    }
   
</style>
