<template>
    <div class="c">
        hiiiiiiiiii
        <table  id = "t"  >
            <tr>
                <td width="5%">*</td>
                <td width="20%">شماره تلفن همراه : {{phone2}} </td>
                <td width="30%">شماره تلفن ثابت : {{phone1}} </td>
                <td width="20%">تحویل گیرنده: {{name}} </td>
                <td rowspan="2"  width="5%">'**'</td>
            </tr>
            <tr>
                <td width="5%">*</td>
                <td width="20%">کد پستی : {{code}}</td>
                <td  class="2" width="30%">آدرس :{{address}}} </td>
            </tr>
        </table>
    </div>
    
</template>

<script>
export default {
    props : ['name','phone1','phone2','address','code'],
    data() {
        return {          


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
    .c{
        height: 200px;
        width: 400px;
        background-color: red;
    }
   #t{
       height: 100px;
       width: 80%;

   }
   
    
   
</style>
