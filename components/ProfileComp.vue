
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
               <div  class="s"  id= "manimg" ></div>
               <div  class="s"   id = "zanimg"></div>
               <div  class="s"  id= "zan" >زن</div>
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
    <div  id= "address">
        <div id="addrhead" v-on:click="select1($event)" >آدرس ها</div>
        <hr/>
        <div id="addreses">
          <!-- <address  id="t" v-bind:name='maryam' v-bind:code="123456" v-bind:phone1="123" v-bind:phone2="987" 
          v-bind:address="yazd"></address>   -->
          <address/>
        </div>
        <button id="addaddress" v-on:click="add_address()" >اضافه کردن آدرس جدید</button>
    </div>

    <div  id= "order">
        <div id="orderhead" v-on:click="select2($event)" >سفارش ها</div>
        <hr/>
        <table id = "t2">
            <tr id="head">
                <td width = "5%" >ردیف</td>
                <td width = "15%">کد</td>
                <td width = "15%" >تاریخ ساعت</td>
                <td width = "15%" >مبلغ کل</td>
                <td width = "15%" >وضعیت</td>
                <td width = "15%" >عملیات</td>
                <td width = "20%" >جزییات</td>
            </tr>
            <tr id ="row"  v-for="o in orderarr" :key="o">
                <td width = "5%" > {{o.index}}</td>
                <td width = "15%"> {{o.code}}</td>
                <td width = "15%">{{o.date}}</td>
                <td width = "15%" >{{o.cost}}</td>
                <td width = "15%" >{{o.status}}</td>
                <td width = "15%" ></td>
                <td width = "20%" ><img src="~/assets/pic/select2.png"/>  </td>
            </tr>      
        </table>
    </div>
</span>
    
</template>

<script>

import address from '~/components/address.vue';
export default {
    components: {
        address,
    },
    props : ['username'],
    data() {
        return {
            name : 'maryam',
            src : '~/assets/pic/magnifying-glass1.png',
            phone:'123456' ,
            birth:'',
            pass:'123',
            city : 'yazd',
            phone2 : '123456',
            idcard : '5030065326',
            toggle1 : 0,
            orderarr :[
                {'index': 1 , 'code' : 111 ,'date' : '1.2.3' ,'cost' : 1000 ,'status' : 'delivery'}
            ],


        }
    },
    methods: {
         select1 : function(ev){  
          if (this.toggle1  == 1) {       
                document.getElementById("addreses").style.visibility = "hidden";
                document.getElementById("addreses").style.height = "0px";
                this.toggle1 = 0;
                //bayad inja on aksa ham avaz beshe badan ishala
            } else{
                document.getElementById("addreses").style.visibility = "visible";
                // document.getElementById("addreses").style.height = "200px";
                this.toggle1 = 1; 
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
        background-image: url('~/assets/pic/basket.png');
    }
    #zanimg{
        background-image: url('~/assets/pic/list.png');
    }
    #change{
        background-color: blue;
        color: white;
        width: 50%;
        border-radius: 15px;
        margin: auto auto;
        margin-top: 20px;
    }
    #address{
        margin-right: 40px;
        margin-left: 15px;
        margin-top: 30px;
    }
    #addrhead{
        background-image: url('~/assets/pic/select2.png');
        background-repeat: no-repeat;
        background-position:   left 2px center;
        width: 15%;
        text-align: right;
        
    }
    #addaddress{
        font: myFirstFont;
        width: 23%;
        background-color: blue;
        color: white;
        border-radius: 15px;
        border: none;
        margin-left: 5%;
        height: 35px;
        margin-top: 10px;
    }
    #addreses{
        /* height: 0px;
        visibility: hidden; */
        background-color: aqua;
        height: 100px;;
    }
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
        background-image: url('~/assets/pic/select2.png');
        background-repeat: no-repeat;
        background-position:   left 2px center;
        width: 15%;
        text-align: right;       
    }
    #t2{
        width: 100%;
        text-align: center;
    }
    #head{
        background-color: rgb(208, 212, 211);
        border: none;
    }
    #oitem{
        text-align: center;
        width: 100%;
        background-color: red;
    }
    #row{
        background-color: rgb(220, 228, 228);
        width: 100%;
        margin-top: 2px;
    }
   
</style>
