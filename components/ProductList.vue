<template>
    <div class ="list">
        <div id = "name">{{categoryname}}</div>
        <div id = "controlpage">
            <span id = "ordering">
                محبوب ترین 
                <select>
                    <option value="favorite">محبوب ترین</option>
                </select>
            </span>
            <span id = "pages">
               <button id = "next"> صفحه بعد</button>
               صفحه {{first}} از  {{last}}
               <button id = "before">صفحه قبل</button>
            </span>
        </div>
        <hr/>
        <div id = "products">
            <span id= "item" v-for="p in products" :key="p" >
                 <product-card id="item" :imgsrc="p.src" :name="p.name"  :brandname="p.brand"  :cost1="p.cost1" :cost2="p.cost2"  />
            </span>
        </div>
    </div>
    
</template>

<script>
import ProductCard from '~/components/ProductCard';


export default {
    props : ['categoryname'],
    components: {
        ProductCard,
    },
    data() {
        return {
            first : '1',
            last : '1',
            selectedProduct:[],
            products:[
                {src : '~/assets/pic/magnifying-glass2.png', name : 'mobile',
            brand : 'sony', cost1 :2000, cost2 : 1000} 
            ],//ajax fot complete it
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
    .list{
        /* width: 60%; */
        font-family: MyFirstFont;
        
    }
    #name{
        padding-right: 15px;
        text-align : right;
        
    }
    #controlpage{
        display: flex;
    }
    #ordering{
        flex: 1 0 ;
        margin-left: 20px;
        padding-right: 15px;
        text-align : right;

    }
    #pages{
        flex: 1 0;
        margin-right: 20px;
        padding-right: 0px;
        align-content: right; 
    }
    #next{
        width:70px;
        height: 25px;
        margin-left: 20px;
        font-size: 50%;
    }
    #before{
        width:70px;
        height: 25px;
        margin-right: 20px;
        margin-left: 50px;
        font-size: 50%;
    }
    #products{
        display: grid;        
        grid-template-columns: auto auto auto;
    }
    #item{
        background-color: rgba(255, 255, 255, 0.8);
        border: none;
        text-align: center;
        grid-gap: 3px;
        margin: 25px 15px 5px 15px;
    }
   
</style>
