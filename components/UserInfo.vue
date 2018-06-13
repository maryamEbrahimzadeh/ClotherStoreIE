<template>
    <div>
    <span class="reg">
        <button class="button" id="o">عضویت</button>
        <button class="button" id="v">ورود</button>
    </span>
    {{this.username}}
    </div>
</template>

<script>
export default {
    props: ['username']
}
</script>

<style scoped>
    .reg {
        float: right; 
        margin-right: 50px;
    }
    .button {
        border-radius: 20px; 
        width: 100px; 
        height: 30px;
    }
    #v {
        background-color: black; 
        color: white;
    }
    #o {
        background-color: white;
    }
    #v:hover {
        background-color: #006DF0; 
        color:white;
    }
    #o:hover {
        background-color:white; 
        color:#006DF0; 
        border-color:#006DF0;
    }
</style>
