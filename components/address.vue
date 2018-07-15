
<template>
    <div class="c">
        hiiiiiiiiii
        <table  id = "t" width="80%" border="1"  >
            <tr>
                <td width="5%">*</td>
                <td width="20%">شماره تلفن همراه : </td>
                <td width="30%">شماره تلفن ثابت</td>
                <td width="20%">تحویل گیرنده</td>
                <td rowspan="2"  width="5%">'**'</td>
            </tr>
            <tr>
                <td width="5%">*</td>
                <td width="20%">کد پستی</td>
                <td  class="2" width="30%">آدرس :</td>
            </tr>
        </table>
    </div>
    
</template>

<script>
export default {
    // props : ['name','phone1','phone2','address','code'],
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
        height: 100px;
        background-color: red;
    }
   #t{
       height: 100px;
       width: 80%;

   }
   
    
   
</style>
