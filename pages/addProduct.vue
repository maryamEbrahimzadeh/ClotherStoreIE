<template>
  <div class="main">  
    <div class ="flex">
    <div id="proImgs">
        <input type="file" name="img" id="">
    </div> 

    <div id="left">
        <p class="brand">
             <input class="brand" type="text">نام برند
        </p>
        <p class="product">
            <input class="product">نام محصول
        </p>
        <div class="cost">
            <span id="cost1"><input type="text">هزینه قبل تخفیف</span>
            <span id="cost2"><input type="text">هزینه بعد تخفیف</span>
        </div>
        <p class="color" v-for="p in product.color" :key="p">
              رنگ: <input type="text">  {{p}}</p>

       <p class="color" v-for="p in product.size" :key="p">
             سایز : <input type="text">  {{p}}</p>
       
        <h6 id="h">ویژگی ها</h6>
        <ul id="ul">
            <li><input type="text">{{threeFisrtProps[0].p}}</li>
            <li><input type="text">{{threeFisrtProps[1].p}}</li>
            <li><input type="text">{{threeFisrtProps[2].p}}</li>
        </ul>
         <div id="button">
            <b-btn id="but" >ثبت تغییرات</b-btn>
        </div>

    </div>
    
    </div>
    <div class="title">
            <span id="prop">مشخصات محصول</span>
            <span id="comment">نظرات کاربران</span>
    </div>
    <br>
    <div class= "item" >
        <div class="i" >
            <input type="text"> مشخصه         <input type="text">    مقدار مشخصه
            <input type="text"> مشخصه         <input type="text">    مقدار مشخصه
            <input type="text"> مشخصه         <input type="text">    مقدار مشخصه
            <input type="text"> مشخصه         <input type="text">    مقدار مشخصه
        </div>
    </div>

  </div>
</template>

<script>
export default {
     data() {
            return {
                //productProps: [{brand: 'GLX', cost1: 100, cost2: 200, color:'مشکی',size:{s:10,s:20,s:30}}],
                product:
                {src :['/images/magnifying-glass2.png' ] , name : 'mobile',
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
    .title {
    font-family: myFirstFont;
    background-color: lightblue;
    margin-left: 100px;
    margin-right: 100px;
    height: 40px;
}
#prop {
    border-bottom: solid black;
    padding-right: 100px;
    padding-left: 10px;
    /* width: 50px; */
}
#comment {
    padding-left: 400px;
    padding-right: 20px;
}
.i{
    background-color: lightblue;
    text-align: center;
    margin-left: 200px;
    margin-right: 200px;
}

</style>
