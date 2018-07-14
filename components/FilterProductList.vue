<template>
    <div class = "rightbar">
        <div id ="f1">
            <div id="category" v-on:click="select1($event)" >دسته بندی ها</div>
            <div id="categories">
                <br/>
                <a href="#" class="Link">Link 1</a>
                <br/>
                <a href="#" class="Link">Link 2</a>
                <br/>
                <a href="#" class="Link">Link 3</a>
                <br/>
            </div>
        </div>
        <div id ="f2">
            <div id="brand" v-on:click="select2($event)" >بر اساس برند</div>
            <div id="brands">
                <br/>
                <a href="#" class="Link2">Link 1</a>
                <br/>
                <a href="#" class="Link2">Link 2</a>
                <br/>
                <a href="#" class="Link2">Link 3</a>
                <br/>
            </div>
        </div>
        <div id ="f3">
            <div id="color" v-on:click="select3($event)" >بر اساس رنگ</div>
            <div id="colors">
                <div class="grid-item" id = "red"></div>
                <div class="grid-item" id = "blue"></div>
                <div class="grid-item" id = "white"></div>  
                <div class="grid-item" id = "black"></div>
                <div class="grid-item" id = "yellow"></div>
                <div class="grid-item" id = "brown"></div>
            </div>
        </div>
        
    </div>
    
</template>

<script>
export default {
    props : ['categoryname'],
    data() {
        return {
            toggle1 : 0,
            toggle2 : 0,
            toggle3 : 0,
        }
    },
    methods: {
      select1 : function(ev){  
          if (this.toggle1  == 1) {       
                document.getElementById("categories").style.visibility = "hidden";
                document.getElementById("categories").style.height = "0px";
                this.toggle1 = 0;
                //bayad inja on aksa ham avaz beshe badan ishala
            } else{
                document.getElementById("categories").style.visibility = "visible";
                document.getElementById("categories").style.height = "100px";
                this.toggle1 = 1; 
            }
        },
        select2 : function(ev){  
          if (this.toggle2  == 1) {       
                document.getElementById("brands").style.visibility = "hidden";
                document.getElementById("brands").style.height = "0px";
                this.toggle2 = 0;
                //bayad inja on aksa ham avaz beshe badan ishala
            } else{
                document.getElementById("brands").style.visibility = "visible";
                document.getElementById("brands").style.height = "100px";
                this.toggle2 = 1; 
            }
        },
        select3 : function(ev){  
          if (this.toggle3  == 1) {       
                document.getElementById("colors").style.visibility = "hidden";
                document.getElementById("colors").style.height = "0px";
                this.toggle3 = 0;
                //bayad inja on aksa ham avaz beshe badan ishala
            } else{
                document.getElementById("colors").style.visibility = "visible";
                document.getElementById("colors").style.height = "100px";
                this.toggle3 = 1; 
            }
        }
        
    }
}
</script>

<style scoped>
    @font-face {
        font-family: myFirstFont;
        src: url(~/assets/font/Shabnam-light.woff);
    }
    .rightbar{
        background-color: white;
    }
    #f1 , #f2 , #f3 {
        background-color: rgb(230, 240, 240);
        margin: 10px 20px 10px 20px;
        border-radius: 5px;
    }
    .Link .Link2{
        text-align: right;
        padding-right: 10%;
        background-image: url('~/assets/pic/select2.png');
        background-repeat: no-repeat;
        background-position: right 5px center;
        color: black;
    }
    #category  {   
        height: 30px;     
        background-image: url('~/assets/pic/select2.png');
        background-repeat: no-repeat;
        background-position: left 20% center;
        text-align: right;
        padding-right: 30%;
        font-style: bold;
    }
    #color{
        height: 27px;     
        background-image: url('~/assets/pic/select2.png');
        background-repeat: no-repeat;
        background-position: left 20% center;
        text-align: right;
        padding-right: 30%;
        font-style: bold; 
    }
    #brand{
        height: 30px;     
        background-image: url('~/assets/pic/select2.png');
        background-repeat: no-repeat;
        background-position: left 20% center;
        text-align: right;
        padding-right: 30%;
        font-style: bold;
    }
    #categories  {
        text-align: right;
        height: 0px;
        visibility: hidden;
    }
    #brands{
        text-align: right;
        height: 0px;
        visibility: hidden;
    }
    #colors{
        text-align: right;
        height: 0px;
        visibility: hidden;
    }
    #colors{
        display: grid;        
        grid-template-columns: auto auto auto auto auto;
        padding: 10px 10px 10px 10px;
    }
    .grid-item{
        /* background-color: red; */
        border: solid 1px;
        margin: 3px 0px 7px 0px;
        width: 35px;
        height: 35px;
    }
    #red{
        background-color: red;
    }
    #white{
        background-color: white;;
    }
    #black{
        background-color: black;
    }
    #brown{
        background-color: brown;
    }
    #blue{
        background-color: blue;
    }
    #yellow{
        background-color: yellow;
    }
</style>
