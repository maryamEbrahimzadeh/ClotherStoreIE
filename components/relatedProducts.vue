<template>
    <div class="main">
        <h6 id="title">محصولات مرتبط</h6>
        <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                aria-orientation="vertical"
                background="#ababab"
                :interval="4000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <b-carousel-slide class ="slide" img-src="" >
      </b-carousel-slide>

      <b-carousel-slide class ="slide" >
            <span id= "item" v-for="p in products" :key="p" >
                 <product-card id = "item" v-bind:imgsrc =  p.src v-bind:name = p.name  v-bind:brandname = p.brand  v-bind:cost1 = p.cost1 v-bind:cost2 = p.cost2  />
            </span>
      </b-carousel-slide>

    </b-carousel>
    </div>
</template>

<script>
import ProductCard from '~/components/ProductCard';
export default {
    components: {
        ProductCard,
    },
    data () {
      slide = 0,
      sliding = null
    
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
</style>


