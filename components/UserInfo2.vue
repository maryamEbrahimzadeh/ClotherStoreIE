<template>
    <div>
        <span class="reg">
            <a id="nameandfamily" v-on:click="profile($event)">
                 {{username}}
                 <!-- مریم -->
                 <img id ="nameimg"/>
            </a>
            <a id = "basket">
                سبد خرید
                {{numberoforder}}
                <img id="basketimg"/>                
            </a>
            <a id = "order">
                پیگیری سفارش
                <img id="orderimg"/>
            </a>
        </span>
        
    </div>
</template>

<script>

export default {
   props: ['username','numberoforder'],
    data() {
        return {
            proftoggle : 0,
        }
    },
   methods: {
        profile: function(event) {            
            // this.$router.push(`Profile/${this.username}`);  
            if ( this.proftoggle==0) {
                 this.$emit('profile', true);
                 this.proftoggle =  1;
            } else {
                this.$emit('profile', false);
                this.proftoggle = 0;
            }
        }
   }
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
        /* width: 50px;
        height: 50px; */
        /* background-image: url('~/assets/pic/select2.png');
        background-repeat: no-repeat;
        background-position: left  center; */
    }
    #nameimg{     
        height: 20px;
        width: 20px;   
        background-image: url('~/assets/pic/select2.png');
        background-repeat: no-repeat;
        background-position:   center;
        border: none;
    }
     #basket{
        flex : 1 0 auto;
        margin-right: 4px;
        margin-left: 4px;
        /* background-image: url('~/assets/pic/basket.png');
        background-repeat: no-repeat;
        background-position: left  center; */
    }
    #basketimg{
        height: 20px;
        width: 20px;   
        background-image: url('~/assets/pic/basket.png');
        background-repeat: no-repeat;
        background-position:   center;
        border: none;
    }
    #order{
        flex :1 0 auto;
        margin-right: 4px;
        margin-left: 4px;
        /* background-image: url('~/assets/pic/list.png');
        background-repeat: no-repeat;
        background-position: left  center; */
    }
    #orderimg{
        height: 20px;
        width: 20px;   
        background-image: url('~/assets/pic/list.png');
        background-repeat: no-repeat;
        background-position:   center;
        border: none;
    }

       
</style>
