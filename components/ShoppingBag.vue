<template>
    <div class="main">
        <table id="tab">
            <tr id="head">
                <td class="td" width="25%">مشخصات محصول</td>
                <td class="td" width="25%">تعداد</td>
                <td class="td" width="25%">قیمت</td>
                <!-- <td width="5%">   </td> -->
            </tr>
            <tr id="pros" v-for="p in products" :key="p">
                <td class="td">
                    <div class="flex">
                        <div class="pic">
                            <img id="img" :src=p.src >
                        </div>
                        <div class="txt">
                            <p class="brand">{{p.brand}}</p>
                            <p class="product">{{p.name}}</p>
                            <p class="color" > رنگ:   {{p.color}} </p>
                            <p class="size" > سایز:   {{p.size}}</p>
                            <p > کد کالا:   {{p.id}} </p>
                        </div>
                    </div>
                </td>
                <td class="td">
                    <img id="plus" src='~/assets/pic/plus.png' @click="plus">
                    <span id="num" >{{numberOfOrder}}</span>
                    <img id="minus" src='~/assets/pic/minus.png' @click="minus">
                </td>
                <td class="td">
                    <p id="p1">قیمت واحد              {{p.cost1}}   تومان</p>
                    <p id="p2">تخفیف        {{p.cost1 - p.cost2}}        تومان</p>
                    <p id="p3">قیمت نهایی       {{p.totalcost}}       تومان</p>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            products: [
                    {src :'~/assets/pic/heart.png' , name : 'mobile',
                    brand : 'sony', cost1 :2000, cost2 : 1000,totalcost:99, color:'مشکی', size:'small',id: 1}
                    ],
            numberOfOrder: 1
        }      
    },
    methods: {
        plus() {
            this.numberOfOrder = this.numberOfOrder+1;
        },
        minus() {
           this.numberOfOrder --;
        }
    }
}
</script>

<style scoped>
#tab {
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
    border: solid;
}
#head{
    font-family: myFirstFont;
    background-color: lightblue;
    border: solid;
}
.td {
    border: solid;
}
#pros {
    font-family: myFirstFont;

}
.flex {
    display: flex;
}
.pic {
    flex-direction: row;
}
.txt {
    font-family: myFirstFont;
    flex-direction: row;
    font-size: small;
}
#p1 {
    font-family: myFirstFont;
}
#p2 {
    font-family: myFirstFont;
    color: crimson;
}
#p3 {
    font-family: myFirstFont;
    border-top: solid grey;
}
#num {
    margin-left: 10px;
    margin-right: 10px;
}
#plus {
    width: 20px;
    height: 20px;
}
#minus {
    width: 20px;
    height: 20px;
}
</style>
