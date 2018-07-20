<template>
  <div class="main">
    <main-navbar  v-bind:login="true"  @query="changePageProductList" @targetId="changePageProductList"  />
    <div class="imgs">
        <img class="img" src='~/assets/pic/shop.png'>
        <img class="img" id="send" src='~/assets/pic/send.png' >
        <img class="img" src='~/assets/pic/money.png'>
    </div>
    <div class="spns">
        <span class="sp" id="sabad">سبد خرید</span>
        <span class="sp" id="sendInfo">اطلاعات ارسال</span>
        <span class="sp">جزئیات پرداخت</span>
    </div>
    <div id="shoppingBag">
        <shopping-bag />
    </div>
    <div id="sendDetail">
        <p>هزینه ارسال</p>
        <send-detail />
        <p>زمان دریافت سفارش</p>
        <select name="" id="">
            <option value="">روز دریافت 11/7/97  ساعت 15تا20</option>
        </select>
    </div>
    <button id="button" type="submit" @click="goToSendDetail">ثبت و مرحله بعد</button>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer';
import MainNavbar from '~/components/MainNavbar';
import ShoppingBag from '~/components/ShoppingBag';
import sendDetail from '~/components/sendDetail';

export default {
    components: {
      Footer,
      MainNavbar,
      ShoppingBag,
      sendDetail,
    
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
        },
        goToSendDetail() {
            document.getElementById("shoppingBag").style.visibility = "hidden";
            document.getElementById("shoppingBag").style.height = "0px";
            document.getElementById("sendDetail").style.visibility = "visible"
            document.getElementById("send").src = '/images/sendc.png';
            document.getElementById("sendInfo").style.color = "mediumturquoise";
        },
        
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
    #sendDetail {
        visibility: hidden;
    }
    
   
</style>
