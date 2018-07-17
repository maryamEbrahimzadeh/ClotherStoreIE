<template>
  <div class="main">
    <main-navbar  v-bind:login="true"  @query="changePageProductList" @targetId="changePageProductList"  />
    <div class="imgs">
        <img class="img" src='~/assets/pic/shop.png'>
        <img class="img" src='~/assets/pic/send.png' >
        <img class="img" src='~/assets/pic/money.png'>
    </div>
    <div class="spns">
        <span class="sp" id="sabad">سبد خرید</span>
        <span class="sp">اطلاعات ارسال</span>
        <span class="sp">جزئیات پرداخت</span>
    </div>
    <shopping-bag />
    <button id="button" type="submit">ثبت و مرحله بعد</button>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer';
import MainNavbar from '~/components/MainNavbar';
import ShoppingBag from '~/components/ShoppingBag';

export default {
    components: {
      Footer,
      MainNavbar,
      ShoppingBag,

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
    .imgs {
        display: flex;
        margin-left: 200px;
        margin-right: 200px;
    }
    .img {
        flex: 1 1 1;
        width: 70px;
        height: 60px;
        /* margin-right: 50px;
        margin-left: 50px; */
        margin-left: auto;
        margin-right: auto;
    }
    .spns {
        display: flex;
        margin-left: 200px;
        margin-right: 200px;
    }
    .sp {
        font-family: myFirstFont;
        flex: 1 1 1;
        margin-left: auto;
        margin-right: auto;
    }
    #sabad {
        color: mediumturquoise;
    }
    #button {
        font-family: myFirstFont;
        background-color: blue;
        color: white;
        border-radius: 15px;
        width: 200px;
        text-align: center;
        margin-left: 350px;
        margin-top: 10px;
    }
   
</style>
