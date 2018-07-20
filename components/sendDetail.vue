<template>
     <div id="addreses">
            <table  class = "t1"  v-for="a in addresses" :key="a"   v-bind:style="{borderColor : setaddres()}">
                <tr>
                    <td class="atd" rowspan="2"  width="3%" v-on:click="setaddres()">'**'</td>     
                    <td class="atd"  width="20%">تحویل گیرنده: {{a.name}} </td>  
                    <td class="atd"  width="30%">شماره تلفن ثابت : {{a.phone1}} </td>
                    <td class="atd"  width="20%">شماره تلفن همراه : {{a.phone2}} </td>
                    <td class="atd"  width="5%">*</td>               
                </tr>
                <tr>
                    <td class="atd"   colspan="2" width="30%">آدرس :{{a.address}} </td>                
                    <td class="atd"  width="20%">کد پستی : {{a.code}}</td>
                    <td class="atd"  width="5%">*</td>
                </tr>
            </table>
            <button id="addaddress" v-on:click="add_address()" >اضافه کردن آدرس جدید</button>
        </div>
</template>

<script>
import address from '~/components/address.vue';

export default {
    components: {
        address,
    },
    data() {
        return {
            adrslc : false,
            addresses:[ 
                {name : 'maryam' , phone1 :'1234' ,phone2:'8765' ,address : 'yazd' ,code:'766'}
            ],
        }
    },
    methods: {
         setaddres:function(){
            //ajax to server which our addres is this
            if (!this.adrslc){
                this.adrslc = true; 
                return 'rgb(0, 217, 255)';
            }
            else{
                this.adrslc = false; 
                return 'rgb(146, 144, 148)';            
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
    #address{
        margin-right: 40px;
        margin-left: 15px;
        margin-top: 30px;
    }
    #addaddress{
        font: myFirstFont;
        width: 23%;
        background-color: blue;
        color: white;
        border-radius: 15px;
        border: none;
        margin-left: 5%;
        height: 35px;
        margin-top: 10px;
    }
    .t1{
        font-family: myFirstFont;
        text-align: right;
        border: solid 2px;
        /* border-color: red; */
        width: 90%;
        margin: auto auto;
        margin-bottom: 10px;
    }
    .atd{
        border: solid rgb(146, 144, 148);
    }
</style>
