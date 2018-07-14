<template>

    <div class="content">
        <div id ="text" >بهترین ها را از ما خرید کنید</div>

        <div class="content2">
            <div class="brands">
                <button id ="brands_txt" >تمام برند های معتبر را با ما تجربه کنید</button>
            </div>

            <div class="news">
                <div id="pic_news"></div>
                <div id=text_news >
                    در خبرنامه ما 
                </div>
                <div id=text_news >
                    عضو شوید! 
                </div>
                <input id="news_input" type="text" name="news_input"  placeholder="آدرس ایمیل خود را وارد کنید" onfocus="placeholder='maryam@outlook.com' "> 
                <br>
                <input id="join_news" type="button" value=" عضو شوید " />
                
            </div>
        </div>
   </div>
</template>


<script>

export default {
    data() {
        return {}
    },
    methods: {   }
}
</script>

<style scoped>
    @font-face {
        font-family: myFirstFont;
        src: url(~/assets/font/Shabnam-light.woff);
    }
    .content{
        display: flex;
        flex-direction: column;
    }
    #text{
      text-align: center;
      font-family: myFirstFont ;
      font-size: 130%;
    }
    .content2{
        display: flex;
    }
    .news{
        flex: 1 0 auto;
        margin-left: 7%;
        border-radius: 4px; 
        margin-top: 20px;
        background-color: #3b55e6;
        padding-top: 30px;
        position: relative;
        
    }
    #pic_news{
        background: url('~/assets/pic/open_envelope.png') ;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        height: 50px;
        width: 70px;
        padding-top: 35px;
        margin: 0 auto;
        margin-bottom: 20px;
    }
    #text_news{
        text-align: center;
        font-family: myFirstFont ;
        color: white;
        font-style: bold;
    }

    #news_input{
        border-radius: 16px;
        border: 3px solid #FCFCFC;
        width: 80%;
        height: 12%;
        position: absolute;
        top :70%;
        left: 10%;	
        color: rgb(49, 59, 249);
        text-align: center;
        background-image: url('~/assets/pic/envelope-input(1).png');
        background-repeat: no-repeat;
        background-position: right 10px center;

    }
    #news_input:focus {
        border-radius: 16px;
        border: 3px solid #FCFCFC;
        width: 80%;
        height: 20px;
        position: absolute;
        top :70%;
        left: 10%;	
        color: gray;
        text-align: center;
        background-image: url('~/assets/pic/envelope-input.png');
        background-repeat: no-repeat;
        background-position: right 10px center;

    }

    #join_news{
        position: absolute;
        top :85%;
        left: 40%;
        padding-bottom: 20px;
        padding-top: 5px;
        padding-right: 10px;
        padding-left: 10px;
        border-radius: 16px;
        color: white;
        background-color: black;
        border: none;
        height: 30px;
        
    }
    .brands{
        flex:2.05 0 auto;
        background: url('~/assets/pic/brands2.png') ;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100% 100%;
        margin-right: 7%;
        border: solid 1px #EFEFEF  ;
        margin-top: 20px;
        margin-left: 15px;
        position: relative;
        height: 300px; display: flex;
        align-items: center;
        justify-content: center;
        
    }
    #brands_txt{
        border : solid gray 1px;
        border-radius: 22px;
        font-size: 13px;	
        font-family: myFirstFont ;
        color: white;
        background-color: #3b55e6 ;
        height: 12%;
        width: 40%;	
    }
    #brands_txt:hover{
        border : solid gray 1px;
        border-radius: 22px;
        font-size: 13px;	
        font-family: myFirstFont ;
        color: white;
        background-color:  #3b55e6;
        height: 12%;
        width: 40%;	
        box-shadow: 2px 2px 4px 0.5px #DBDBDB;;
        
    }


</style>

