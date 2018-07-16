<template>
    <div class="main">
        <div class="title">
            <span id="prop">مشخصات محصول</span>
            <span id="comment">نظرات کاربران</span>
        </div>
        <br>
        <div class= "item" v-for="p in productProps" :key="p" >
                <div class="i" >
                p                {{p.p}}
                </div>
        </div>
        <br>
    </div>
</template>

<script>
export default {
    data() {
        return{
            productProps:[{p : 'value'}],
        
        }
    }
}
</script>

<style scoped>
.title {
    font-family: myFirstFont;
    background-color: lightblue;
    margin-left: 100px;
    margin-right: 100px;
    height: 40px;
}
#prop {
    border-bottom: solid black;
    padding-right: 100px;
    padding-left: 10px;
    /* width: 50px; */
}
#comment {
    padding-left: 400px;
    padding-right: 20px;
}
.i{
    background-color: lightblue;
    text-align: center;
    margin-left: 200px;
    margin-right: 200px;
}
</style>


