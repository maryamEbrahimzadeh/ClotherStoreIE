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
        padding-right: 4px;
        position: relative;
        
    }
    #in {     
        margin-left:10%;
        border-radius: 14px;
        background-image: url('~/assets/pic/magnifying-glass1.png');
        background-repeat: no-repeat;
        background-position: left 7px center;
        margin-top: 6%;
        margin-bottom:5%;
        width: 110%;
        height: 60%;
        border-style: solid;
        border-color:  rgb(112,112,112);
        text-align: right;
        padding-right: 8px;
    }
    #in:hover,#in:focus {
        margin-left:10%;
        border-radius: 14px;
        background-image: url('~/assets/pic/magnifying-glass2.png');
        background-repeat: no-repeat;
        background-position: left 7px center;
        margin-top: 6%;
        margin-bottom:5%;
        width: 110%;
        height: 60%;
        border-style: solid;
        text-align: center;
        border-color: #006DF0;
        text-align: right;
        padding-right: 8px;
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
    
</style>
