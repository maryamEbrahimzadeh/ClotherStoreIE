<template>
    <div class="navbarbox">
        <div class ="nav" id ="مردانه"  v-on:click="select($event)">مردانه</div>
        <div class ="nav" id ="زنانه" v-on:click="select($event)">زنانه</div>
        <div class ="nav" id = "گانه" v-on:click="select($event)">بچه گانه</div>
        <div class ="nav" id = "ورزشی" v-on:click="select($event)">ورزشی</div>
        <div class ="nav" id = "تخفیف" v-on:click="select($event)">تخفیف</div>
        <div class ="nav" id = "برندها" v-on:click="select($event)">برندها</div>
    </div>
    
</template>

<script>
export default {
    methods: {
        select: function(event) {
            // targetId = event.currentTarget.id;
            // alert(event.target.id);
            // this.$router.push(`ProductList/${targetId}`);
            this.$emit('targetId', event.target.id);
            // alert(bye);
        }
    }
}
</script>

<style scoped>
    @font-face {
        font-family: myFirstFont;
        src: url(~/assets/font/Shabnam-light.woff);
    }
    .navbarbox {
        font-family: myFirstFont;
        display: flex; 
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-left: 100px; 
        margin-right: 100px; 
        padding-bottom: 5px;  
        border-bottom:thin solid #DCE2E6;
    }
    .nav {
        font-family: myFirstFont;
        display: flex; 
        /* flex: 6; */
        padding-left: 50px;
        padding-right: 50px;
        /* margin-left: auto; 
        margin-right: auto;  */
    }
    .nav:hover {
        font-family: myFirstFont;
        color:#006DF0; 
        text-decoration: underline;
    }
</style>
