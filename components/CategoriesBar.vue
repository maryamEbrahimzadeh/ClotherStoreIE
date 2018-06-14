<template>
    <div class="navbarbox">
        <div class ="nav">مردانه</div>
        <div class ="nav">زنانه</div>
        <div class ="nav">بچه گانه</div>
        <div class ="nav">ورزشی</div>
        <div class ="nav">تخفیف</div>
        <div class ="nav">برندها</div>
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
