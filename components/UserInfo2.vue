<template>
    <div>
        <span class="reg">
            <a id="nameandfamily">
                 {{username}}
                 <!-- مریم -->
                 <!-- <a id ="nameimg"></a> -->
            </a>
            <a id = "basket">
                سبد خرید
                <!-- <a id="basketimg"></a> -->
            </a>
            <a id = "order">
                پیگیری سفارش
                <!-- <a id="orderimg"></a> -->
            </a>
        </span>
        
    </div>
</template>

<script>

export default {
   props: ['username'],
}
</script>

<style scoped>
    @font-face {
        font-family: myFirstFont;
        src: url(~/assets/font/Shabnam-light.woff);
    }
    .reg {
        flex: 3 0 auto;
	    display: flex;
        float: right; 
        margin-right: 30px; 
        font-family: myFirstFont;
        font-size: 90%; 
        margin-top: 7%;
        width: 100%;
            
    }
    #nameandfamily{
        flex :1 0 auto;  
        margin-right: 4px;
        margin-left: 4px;
        background-image: url('~/assets/pic/select2.png');
        background-repeat: no-repeat;
        background-position: left  center;
    }
     #basket{
        flex : 1 0 auto;
        margin-right: 4px;
        margin-left: 4px;
        background-image: url('~/assets/pic/basket.png');
        background-repeat: no-repeat;
        background-position: left  center;
    }
    #order{
        flex :1 0 auto;
        margin-right: 4px;
        margin-left: 4px;
        background-image: url('~/assets/pic/list.png');
        background-repeat: no-repeat;
        background-position: left  center;
    }

       
</style>
