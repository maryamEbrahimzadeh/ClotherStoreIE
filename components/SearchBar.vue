<template>
    <div class="search">
        <input id="in"  @keydown="inputHandler"
                     type="search"
                      v-model="query"
                      placeholder="برای جستجو بنویسید" />

        <a href="https://www..com" id="s1"></a>
    </div>
</template>

<script>
export default {
    data() {
        return {
            query: '',
        }
    },
    methods: {
        inputHandler: function(event){
            // console.log(event);
            
            if(event.code === 'Enter')
                this.$emit('searched', event.target.value);
                // console.log(event.target.value); 
            // this.$emit('searched', event);
        }
    } 
}
</script>


<style scoped>
   @font-face {
        font-family: myFirstFont;
        src: url(~/assets/font/Shabnam-light.woff);
    }
    .search {
        float: left; 
        margin-left: 50px;
    }
    #in {
        border-radius: 15px; 
        height: 30px; 
        width: 200px; 
        padding-left: 20px;
    }
    #s1 {
        background-image: url('~/assets/pic/search.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 18px;
        height: 18px;
        position: relative; 
        left:25px; 
        top:5px;
    }
    #s1 :hover {
        background-image: url('~/assets/pic/searchb.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 18px;
        height: 18px;
        position: relative;
        top:5px; 
        left: 25px;
    }
    #in :hover {
        border-color: #006DF0;
    }
</style>
