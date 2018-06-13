<template>
    <div class="footer">
        <div  id="foot_left">
            <b>
                تمامی حقوق این سایت متعلق به دانشگاه امیرکبیر بوده
                و هرگونه  استفاده از منابع و طراحی های این سایت توسط 
                نهادی خارج از دانشگاه با پیگرد قانونی همراه خواهد بود. 
            </b>       
        </div>

        <div id="social_network">
            <b id="txt_social">به ما در رسانه های اجتماعی بپیوندید</b>
            <div id="logo">
                <a href="https://www..com" id="twitter1"></a>
                <a href="https://www..com" id="google1"></a>
                <a href="https://www..com" id="facebook1"></a>
                <a href="https://www..com" id="twitter1"></a>
                <a href="https://www..com" id="google1"></a>
                <a href="https://www..com" id="facebook1"></a>
            
            </div>
        </div>

        <div id="info">
            <b id="txt_info">اطلاعات ما</b>
                <br>
                <a href="" id="link">درباره ما</a> 
                <br>
                <a href="" id="link">تماس با ما</a>
        </div>

        <div id="facility">
            <b id="txt_facility">خدمات مشتریان</b>
                <br>
                <a href="" id="link">سوالات متداول</a> 
                <br> 
                <a href="" id="link">بازگرداندن کالا</a> 
                <br>
                <a href="" id="link">شرایط استفاده</a> 
                <br> 
                <a href="" id="link">حریم شخصی</a> 
        </div>
    </div>
</template>



<style scoped>
   @font-face {
        font-family: myFirstFont;
        src: url(~/assets/font/Shabnam-light.woff);
    }
    .footer{
        display: flex;
        flex-direction: row-reverse;
        margin-top: 30px;
        background-color: #EFEFEF;
        padding-top: 30px;
        padding-bottom: 30px;
    }
    #foot_left{
        flex: 4 0 ; 
        margin-left: 7%;
        text-align: right;
        padding-right: 10px;
        font-family: myFirstFont;
        color: #595959;
        font-size: 90%;
        
    }
    #social_network{
        flex: 3 0 ;
        text-align: center;
        display: grid 1 2;
    }
    #txt_social{
        margin-top: 1px;
        margin-bottom: 0px;
        color: #595959;
    }
    #logo{
        display: grid ;
        grid-template-columns: auto auto auto;
        padding-left: 35%;
        padding-right: 35%;
    }
    #facebook1{
        background-image: url('~/assets/pic/facebook-logo-button.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 32px;
        height: 32px;
        margin-right: 3px;
        margin-left: 3px;
        margin-top: 15px;
        
    }
    #google1{
        background-image: url('~/assets/pic/google-plus.png');
        background-repeat: no-repeat;	
        background-size: 100% 100%;
        width: 32px;
        height: 32px;
        margin-right: 3px;
        margin-left: 3px;
        margin-top: 15px;
        
    }
    #twitter1{
        background-image: url('~/assets/pic/twitter.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 32px;
        height: 32px;
        margin-right: 3px;
        margin-left: 3px;
        margin-top: 15px;
    }
    #facebook1:hover{
        background-image: url('~/assets/pic/facebook-logo-button(1).png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 32px;
        height: 32px;
        margin-right: 3px;
        margin-left: 3px;
        margin-top: 15px;
        
    }
    #google1:hover{
        background-image: url('~/assets/pic/google-plus(1).png');
        background-repeat: no-repeat;	
        background-size: 100% 100%;
        width: 32px;
        height: 32px;
        margin-right: 3px;
        margin-left: 3px;
        margin-top: 15px;
        
    }
    #twitter1:hover{
        background-image: url('~/assets/pic/twitter(1).png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 32px;
        height: 32px;
        margin-right: 3px;
        margin-left: 3px;
        margin-top: 15px;
    }
    #info{
        flex: 2 0 ;
        text-align: center;
    }
    #txt_info{
        margin-top: 1px;
        color: #595959;
    }
    #facility{
        flex: 2 0 ;
        margin-right: 7%;
        text-align: center;
    }
    #txt_facility{
        margin-top: 1px;
        color: #595959;
    }
    #link{
        text-decoration: none;
        color: gray;
        font-size: 80%;
        font-family: myFirstFont;
        
    }
    #link:hover{
        text-decoration: none;
        color: #3b55e6;
        font-size: 80%;
        font-family: myFirstFont;
        
    }
   
</style>

