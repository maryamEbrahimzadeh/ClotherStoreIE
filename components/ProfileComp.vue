
<template>
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
       <div ></div>
        
    </div>
    
</template>

<script>
export default {
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
            idcard : '5030065326'

        }
    },
    methods: {
      
        
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

   
</style>
