
<template>
<span>
    <div class = "profile">
       <div id= "right">
           <br/>
           <br/>
           <br/>
           نام و نام خانوادگی
           <br/>
           <input  class = "item" id = "name" :placeholder =this.name />
           <br/>
           شماره تلفن 
           <br/>
           <input type ="number"  class = "item" id="phone" :placeholder=this.phone />
           <br/>
           تاریخ تولد
           <br/>
           <input type = "date" class = "item" id="birth" :placeholder=this.birth />
           <br/>
           <br/>
           رمز عبور فعلی
           <br/>
           <input class = "item" id="pass" :placeholder=this.pass />
       </div>
       <div id = "center">
           {{username}}
           <br/>
           <img id="img" :src=this.src />
           <br/>
           <br/>
           جنسیت
           <div id ="jens">
               <div  class="s" id ="man" >مرد</div>
               <div  class="s" id= "manimg" ></div>
               <div  class="s" id = "zanimg"></div>
               <div  class="s" id= "zan" >زن</div>
           </div>
           رمز عبور جدید
           <br/>
           <input type="password" class = "item" id="pass2"  />
           <br/>
           <button id="change" >  ثبت تغییرات</button>

       </div>
       <div id = "left">
           <br/>
           <br/>
           <br/>
           شهر
           <br/>
           <input  class = "item" id = "city" :placeholder =this.city />
           <br/>
           شماره تلفن ثابت 
           <br/>
           <input type ="number"  class = "item" id="phone2" :placeholder=this.phone2 />
           <br/>
           شماره کارت 16 رقمی
           <br/>
           <input type = "number" min="16" class = "item" id="idcard" :placeholder=this.idcard />
           <br/>
           <br/>
           تکرار رمز عبور جدید
           <br/>
           <input type="password" class = "item" id="conf"  />
       </div>        
    </div>
    <div id="addrhead" v-on:click="select1($event)" >آدرس ها</div>
    <hr/>
    <div id= "address">
        <send-detail />
    </div>
    <div id="orderhead" v-on:click="select2($event)" >سفارش ها</div>
    <hr/>
    <div id= "order">
        <orders />
    </div>
    <shopping-bag />
</span>
    
</template>

<script>
import sendDetail from '~/components/sendDetail';
import orders from '~/components/orders';
import ShoppingBag from '~/components/ShoppingBag';

export default {
    components: {
        sendDetail,
        orders,
        ShoppingBag,
    },
    props : ['username'],
    data() {
        return {
            name : 'maryam',
            src : '/images/avatar.jpg',
            phone:'123456' ,
            birth:'',
            pass:'123',
            city : 'yazd',
            phone2 : '123456',
            idcard : '5030065326',
            toggle1 : 0,
            toggle2 : 0,
            h1 : 0,
            h2 : 0,
  
        }
    },
    methods: {
         select1 : function(ev){  
          if (this.toggle1  == 0) {       
                document.getElementById("address").style.visibility = "hidden";
                this.h1 =  document.getElementById("address").style.height ;
                 document.getElementById("address").style.height = "0px";
                this.toggle1 = 1;
                //bayad inja on aksa ham avaz beshe badan ishala
            } else{
                document.getElementById("address").style.visibility = "visible";
                document.getElementById("address").style.height = this.h1 ;
                this.toggle1 = 0; 
            }
        },
        select2 : function(ev){  
          if (this.toggle2  == 0) {       
                document.getElementById("order").style.visibility = "hidden";
                this.h2 =  document.getElementById("order").style.height  ;
                document.getElementById("order").style.height = "0px";
                this.toggle2 = 1;
                //bayad inja on aksa ham avaz beshe badan ishala
            } else{
                document.getElementById("order").style.visibility = "visible";
                document.getElementById("order").style.height = this.h2 ;
                this.toggle2 = 0; 
            }
        },
        
    }
}
</script>

<style scoped>
    @font-face {
        font-family: myFirstFont;
        src: url(~/assets/font/Shabnam-light.woff);
    }
    .profile{
        font-family: myFirstFont;
        font-size: 90%;
        display: flex;
        width: 85%;
        height: 30%;
        align-self: center;
        border: solid black 1px;
        margin-right: 40px;
        margin-left: 15px;
        margin: auto auto;
    }
    #right{
        margin:  15px 25px 15px 15px;
        color: rgb(21, 116, 224);
        text-align: right;
        width: 30%;
    }
    .item{
        border-radius: 12px;
        box-shadow: none;
        border: none;
        background-color: rgb(219, 238, 255);
        width: 80%;
    }
    .item:focus{
        border: none;
    }
    #center{
        text-align: center;
        width: 40%;
        margin:  15px 25px 15px 15px;
        color: rgb(21, 116, 224);
    }
    #img{
        width: 150px;
        height: 150px;
        border-radius: 100px;
        border: solid;


    }
    #left{
        width: 30%;
        margin:  15px 25px 15px 15px;
        color: rgb(21, 116, 224);
        text-align: right;
    }
    #jens{
        background-color:  rgb(219, 238, 255);
        width: 30%;
        margin: auto auto;
        border-radius: 15px;
        display: flex;
        margin-top: 5px;
        /* flex-direction: row; */
    }
    .s{
        width: 20%;
        height: 100%;
    }
    #man{
        color: black;         
        text-align: right;   
    }
    #zan{
        color: black; 
        text-align: left;      
    }
    #manimg{
        background-image: url('/images/male.png');
    }
    #zanimg{
        background-image: url('/images/female.png');
    }
    #change{
        background-color: blue;
        color: white;
        width: 50%;
        border-radius: 15px;
        margin: auto auto;
        margin-top: 20px;
    }
    /* #addreses{
        height: 0px;
        visibility: hidden;
    }
    #orders{
        height: 0px;
        visibility: hidden;
    } */
    #t{
        height: 90px;
        border: solid;
    }
    #order{
        margin-right: 40px;
        margin-left: 15px;
        margin-top: 30px;
    }
    #orderhead{
        font-family: myFirstFont;
        background-image: url('~/assets/pic/select2.png');
        background-repeat: no-repeat;
        background-position:    left 2px center;
        width: 15%;
        text-align: right;       
    }
    #oitem{
        text-align: center;
        width: 100%;
        background-color: red;
    }
    #address{
        margin-right: 40px;
        margin-left: 15px;
        margin-top: 30px;
    }
    #addrhead{
        font-family: myFirstFont;
        background-image: url('~/assets/pic/select2.png');
        background-repeat: no-repeat;
        background-position:   left 2px center;
        width: 15%;
        text-align: right;   
    }
   
</style>
