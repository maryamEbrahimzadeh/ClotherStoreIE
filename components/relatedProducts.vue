<template>
    <div class="main">
        <h6 id="title">محصولات مرتبط</h6>
        <carousel id="carous" :per-page="1"  mouse-drag=true navigationEnabled=true spacePadding:0 
        v-for="p in products" :key="p">
            <slide>
             <product-card id = "item" v-bind:imgsrc =  p.src v-bind:name = p.name  v-bind:brandname = p.brand  v-bind:cost1 = p.cost1 v-bind:cost2 = p.cost2  />
            </slide>
        </carousel>
    </div>
</template>

<script>
import ProductCard from '~/components/ProductCard';
import { Carousel, Slide } from 'vue-carousel';
export default {
    components: {
        ProductCard,
        Carousel,
        Slide
    },
    data () {

    
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
.main {
    background-color: lightblue;
    margin-left: 100px;
    margin-right: 100px;
}
#title {
    font-family: myFirstFont;
    text-align: right;
    font-weight: bold;
}
#carous {
    width: 200px;
    height: 50px;
}
</style>


