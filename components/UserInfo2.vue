<template>
    <div>
        <span class="reg">
            <div id="nameandfamily">
                 <!-- {{username}} -->
                 maryam ebi
            </div>
            <div id = "basket">
                سبد خرید
                <a id="basketimg"></a>
            </div>
            <div id = "order">
                پیگیری سفارش
                <a id="orderimg"></a>
            </div>
        </span>
        
    </div>
</template>

<script>
export default {
   
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
        margin-right: 50px; 
        font-family: myFirstFont       
    }
    #basket{
        flex : 1 0 auto;
    }
    #basketimg{
        background-image: url('~/assets/pic/magnifying-glass1.png');
        background-repeat: no-repeat;
        /* background-position: left 7px center; */
        width: 40%;
        height: 60%;
        border-style: solid;
        border-color:  rgb(112,112,112);
    }
    #order{
        flex :1 0 auto;
    }
    #ordertimg{
        background-image: url('~/assets/pic/magnifying-glass2.png');
        background-repeat: no-repeat;
        /* background-position: left 7px center; */
        width: 40%;
        height: 60%;
        border-style: solid;
        border-color:  rgb(112,112,112);
    }
    #nameandfamily{
        flex :1 0 auto;  
    }

   
</style>
