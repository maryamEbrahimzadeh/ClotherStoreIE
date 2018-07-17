<template>
  <div class="main">  
    <main-navbar   />
    <div class ="flex">
    <div id="proImgs">
        <img id="img" :src="this.imgsrc">
    </div> 

    <div id="left">
        <p class="brand">{{product.brand}}</p>
        <p class="product">{{product.name}}</p>
        <div class="cost">
            <span id="cost1">{{this.product.cost1}}</span>
            <span id="cost2">{{this.product.cost2}}</span>
        </div>
        <p class="color" v-for="p in product.color" :key="p">
              رنگ:   {{p}}</p>
        <div>
       <carousel id="carous" :per-page="1"  mouse-drag=true navigationEnabled=true spacePadding:0 
        v-for="p in product.src" :key="p">
            <slide @slideClick="handleSlideClick"> 
            <img id="img"  :src="p.src" width="50px" height="50px">
            </slide>
        </carousel>
            
        </div>
        <div id="select">
            <select id="sel" name="" v-model="choose" v-for="p in product.size" :key="p">
                <option >انتخاب کنید</option>
                <option >{{p}}</option>
            </select>
            <a id="a" href="">راهنمای سایز</a>
        </div>
        <div id="button">
            <img id="bag" src='~/assets/pic/shopbag.png'>
            <b-btn id="but" @click="handleOk">افزودن به سبد خرید</b-btn>
            <img src='~/assets/pic/heart.png'>
        </div>
        
        <div id="ensure">
            <img src= '~/assets/pic/7.png' width="30px" height="30px">
            <span class="sp">ضمانت هفت روز بازگشت کالا</span>
            <img src='~/assets/pic/deliver.png' width="30px" height="30px" >
            <span class="sp">تحویل رایگان</span>
            <img src='~/assets/pic/ensure.png'  width="30px" height="30px">
            <span class="sp">ضمانت اصل بودن کالا</span>
        </div>
        <h6 id="h">ویژگی ها</h6>
        <ul id="ul">
            <li>{{threeFisrtProps[0].p}}</li>
            <li>{{threeFisrtProps[1].p}}</li>
            <li>{{threeFisrtProps[2].p}}</li>
        </ul>
        <div id="show">نمایش بیشتر</div>
        <img id="showMore" src='~/assets/pic/arr.png' @click="more" >
        <ul id="ulhide" v-for="p in brandProperty" :key="p">
            <li>{{p.p}}</li>
        </ul>

    </div>
    </div>
    <product-property  />
    <related-products  />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer';
import MainNavbar from '~/components/MainNavbar';
import productProperty from '~/components/productProperty';
import relatedProducts from '~/components/relatedProducts';
import { Carousel, Slide } from 'vue-carousel';
// import 'swiper/dist/css/swiper.css';
// import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
    components: {
      Footer,
      MainNavbar,
      productProperty,
      relatedProducts,
      Carousel,
      Slide
    //   swiper,
    //   swiperSlide

    },
     data() {
            return {
                //productProps: [{brand: 'GLX', cost1: 100, cost2: 200, color:'مشکی',size:{s:10,s:20,s:30}}],
                product:
                {src :['~/assets/pic/magnifying-glass2.png' ] , name : 'mobile',
                brand : 'sony', cost1 :2000, cost2 : 1000, color:['مشکی'], size:['small']} ,
                choose: '',
                threeFisrtProps: [{p:'آستین کوتاه'},{p:'یقه گرد'},{p:'الیاف نخی'}],
                brandProperty: [{p:'پارچه طرح دار'}],
                toggle: 0,
                imgsrc: '',
        }

    },
     methods: {
         changecomp:function(status){
            this.logedin = status;
        },
        handleOk (evt) {
            evt.preventDefault()
            if (!this.choose) {
            alert('Please choose your size and color')
            }else{
                this.handleBuy()
            }
        },
        handleBuy () {
            this.$emit();
        },
        more() {
            if (this.toggle  == 1) {       
                document.getElementById("ulhide").style.visibility = "hidden";
                document.getElementById("ulhide").style.height = "0px";
                this.toggle = 0;
            } else{
                document.getElementById("ulhide").style.visibility = "visible";
                document.getElementById("ulhide").style.height = "100px";
                this.toggle = 1; 
            }
        },
        handleSlideClick() {
            this.imgsrc = document.getElementById("img").src
        }
      
    }
}
</script>

<style>
    @font-face {
        font-family: myFirstFont;
        src: url(~/assets/font/Shabnam-light.woff);
    }
    .flex {
        display: flex;
        flex-direction: row;
    }
    #proImgs {
        flex: 50%;
    }
    #left {
        flex: 50%;
        margin-top: 50px;
        padding-right: 30px;
    }
    #img {
         /* float: right;
         position: relative;
         right: 200px; */
         width: 300px; 
         height: 300px;
         margin-top: 50px;
    }
    .sp {
        font-family: myFirstFont;
        text-align : right;
        padding-left: 10px;
        padding-right: 10px;
    }
    .brand {
        font-family: myFirstFont;
        text-align : right;
        font-weight: bold;
    }
    .product {
        font-family: myFirstFont;
        text-align : right;
    }
    .cost {
        font-family: myFirstFont;
        text-align : right;
    }
    .color {
        font-family: myFirstFont;
        text-align : right;
    }
    .slide {
        width: 50px; 
        height: 80px;
    }
    #but {
        font-family: myFirstFont;
        background-color: crimson;
        color: white;
        width: 220px;
        padding-left: 20px;
        text-align: left;
        margin-left: 10px;
    }
    #sel {
        font-family: myFirstFont;
        width: 250px;
        align-content: right;

    }
    #a {
        font-family: myFirstFont;
        color: black;
        font-size: small;
        padding-right: 5px;
    }
    #ul {
        font-family: myFirstFont;
        text-align: right;
        padding-bottom: 20px;
    }
    #select {
        text-align: right;
        padding-top: 20px;
        padding-bottom: 20px;
    }
    #button {
        text-align: right;
        padding-bottom: 20px;
    }
    #ensure {
        text-align: right;
        padding-bottom: 20px;
    }
    #h {
        font-family: myFirstFont;
        text-align: right;
        font-weight: bold;
    }
    #bag {
        width: 20px;
        height: 20px;
        position: relative;
        right: 50px;
    }
    #show {
        font-family: myFirstFont;
        text-align: center;
    }
    #showMore {
        width: 20px;
        height: 10px;
        margin-left: 310px;;
        /* margin-right: auto;  */

    }
    #ulhide {
        font-family: myFirstFont;
        text-align: right;
        visibility: hidden;
    }
    #cost2 {
        text-decoration: line-through;
    }
    #cost1 {
        color: crimson;
        margin-right: 30px;
    }
    #carous {
        width: 200px;
        height: 50px;
    }
</style>
