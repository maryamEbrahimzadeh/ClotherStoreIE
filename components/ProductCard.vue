<template>
    <div @click="test" class ="product">
        <img id="img" :src="imgsrc"  />
        <br/>
        {{name}}
        {{imgsrc}}
        <br/>
        {{brandname}}
        <br/>
         قیمت قبل تخفیف  قیمت بعد تخفیف
        <br/>
        {{cost1}}
   
        {{cost2}}
        
        
    </div>
    
</template>

<script>
export default {
    props:['imgsrc','name','brandname','cost1','cost2'],
    data() {
        return {
            
        }
    },
    methods: {
        test: () => console.log(this.imgsrc)
    }
}
</script>

<style scoped>
    @font-face {
        font-family: myFirstFont;
        src: url(~/assets/font/Shabnam-light.woff);
    }
   .product{
       font-family: myFirstFont;
       font-size: 80%;
   }
   #img{
       height: 100px;
       border: 1px solid rgba(0, 0, 0, 0.8);

   }
</style>
