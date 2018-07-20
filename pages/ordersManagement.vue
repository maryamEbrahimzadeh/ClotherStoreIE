<template>
        <div id="orders">
            <p>مدیریت سفارشات</p>
            <table id = "t2">
                <tr id="head">
                    <td width = "5%" >ردیف</td>
                    <td width = "15%">کد</td>
                    <td width = "15%" >تاریخ ساعت</td>
                    <td width = "15%" >مبلغ کل</td>
                    <td width = "15%" >وضعیت</td>
                    <td width = "15%" >عملیات</td>
                    <td width = "20%" >جزییات</td>
                </tr>
                <tr id ="row"  v-for="o in orderarr" :key="o">
                    <td width = "5%" > {{o.index}}</td>
                    <td width = "15%"> {{o.code}}</td>
                    <td width = "15%"> {{o.date}}</td>
                    <td width = "15%" >{{o.cost}}</td>
                    <td id="status" width = "15%" >
                        <select id="sel">
                        <option >{{o.status}}</option>
                        <option >ارسال شده</option>
                        <option >لغو شده</option>
                        <option >در انتظار تایید</option>
                        </select>
                    </td>
                    <td width = "15%" > <button id ="pay">پرداخت</button> </td>
                    <td width = "20%" ><img src="~/assets/pic/select2.png"/>  </td>
                </tr>      
            </table>
        </div>
</template>

<script>
export default {
    data() {
        return {
            orderarr :[
                {index : '1' , code : '111' ,date : '1.2.3 ',cost : '1000' ,status : 'دریافت شده'}
            ],
        }
    }
}
</script>

<style scoped>
    #orders{
        margin-right: 40px;
        margin-left: 15px;
        margin-top: 30px;
    }
    #t2{
        font-family: myFirstFont;
        width: 90%;
        margin: auto auto;
        text-align: center;
           
    }
    #head{
        background-color: rgb(208, 212, 211);
        border: none;
    }
    #row{
        background-color: rgb(220, 228, 228);
        width: 90%;
        margin: auto auto;
    }
    #pay{
        background-color: blue;
        width: 60%;;
        border-radius: 15px;
        color: white;
        border: none;
    }
    #status {
        color: mediumaquamarine;
    }
    #sel {
        width: 100px;

    }
    p {
        font-family: myFirstFont;
        font-weight: bold;
        text-align: right;
        margin-right: 50px;
    }
</style>


