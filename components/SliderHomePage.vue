<template>
  <div>
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <b-carousel-slide class ="slide" img-src="https://picsum.photos/1024/480/?image=52">
      </b-carousel-slide>

      <b-carousel-slide class ="slide" img-src="https://picsum.photos/1024/480/?image=58">
      </b-carousel-slide>

    </b-carousel>

    <div class="image">
        <img class="img" src="https://picsum.photos/1024/480/?image=54">
        <img class="img" src="https://picsum.photos/1024/480/?image=54" >
        <img class="img" src="https://picsum.photos/1024/480/?image=54" >
    </div>
    <div class="categ">
        <p class="cat">مردانه</p>
        <p class="cat">زنانه</p>
        <p class="cat">بچه گانه</p>
    </div>    


  </div>
</template>

<script>
export default {
  data () {

      return{
        
      sliding :null,
      slide : 0,
      }
    
  },
  methods: {
    onSlideStart () {
      this.sliding = true
    },
    onSlideEnd () {
      this.sliding = false
    }
  }
}
</script>

<style scoped>
#carousel1{
    margin-left: auto;
    margin-right: auto;
}
.slide{
    width: 1000px;
    height: 400px;
}
.image{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
.img{
    display: flex;
    width: 333px;
    height: 100px;
}
.categ{
    display: flex;
    justify-content: center;
    align-items: center;
}
.cat{
    font-family: myFirstFont;
    display: flex;
    justify-content: center;
    width: 333px;
    text-align: center;
    color: white;
    border:1px solid black;
    background-color: gray;
}
</style>
