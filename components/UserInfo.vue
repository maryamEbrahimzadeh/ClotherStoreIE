<template>
    <div>
        <span class="reg">
            <b-btn v-b-modal.modalreg class="button" id="o">عضویت</b-btn>
            <b-btn v-b-modal.modalenter class="button" id="v">ورود</b-btn>
        </span>
        <b-modal hide-footer id="modalenter"
                    centered
                    ref="modal"
                    title="ورود">
            <form @submit.stop.prevent="handleSubmit">
                <p id="title"> شماره تلفن یا ایمیل </p>
                <b-form-input id= "input"
                            type="text"
                            placeholder="برای مثال maryam.ebrahimzadeh@yahoo.com"
                            v-model="name"></b-form-input>
                <p id="title"> رمز عبور</p>             
                <b-form-input id= "input"
                            type="text"
                            placeholder=""
                            v-model="pass"></b-form-input>
                </form>
            <p id= "forget">
                رمز عبور خود را فراموش کرده اید؟
            <a href="#" >کلیک کنید</a>
            </p> 
            <b-btn id="enter" @click="handleOk">ورود</b-btn> 
        </b-modal>

        <b-modal hide-footer id="modalreg"
                    centered
                    ref="modal"
                    title="عضویت">
            <form @submit.stop.prevent="handlereg">
                <p id="title"> شماره تلفن یا ایمیل </p>
                <b-form-input id= "input"
                            type="text"
                            placeholder="برای مثال maryam.ebrahimzadeh@yahoo.com"
                            v-model="name1">
                </b-form-input>
                <p id="title"> رمز عبور</p>             
                <b-form-input id= "input"
                            type="text"
                            placeholder=""
                            v-model="pass1">
                </b-form-input>
            </form>
            <b-btn id="register" @click="handleOk2">ثبت نام</b-btn> 
        </b-modal>
    </div>
</template>

<script>
import axios from 'axios'

export default {

    data () {
    return {
      name: '',
      pass:'',
      name1: '',
      pass1:'',
    }
  },
  methods: {
    clearName () {
      this.name = '',
      this.pass = '',
      this.name1= '',
      this.pass1=''
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.name) {
        alert('Please enter your name')
      }else if (!this.pass){
        alert('Please enter your password')
      }else {
        this.handleSubmit()
      }
    },handleSubmit () {
        // alert("hi");
        // alert(createStore.state.is_login);
        // ajaxxxx 
        axios.post('http://localhost:5656/login' , {'username' : this.name , 'password' : this.pass  }  )
        .then ( (res) => {
            console.log(res)
            if ( res.data == true){  
                alert("true!")              
                this.$emit('islogin', true);
                this.$emit('username',this.name);
                $store.commit('login')
            }
        })
        this.clearName()
        this.$refs.modal.hide()
    },
    handleOk2 (evt) {
        // Prevent modal from closing
        evt.preventDefault()
        //   cheak it is not repetetive vali velesh kon nemikhad
        //   add him to db
         axios.post('http://localhost:5656/adduser' , {'username' : this.name1 , 'password' : this.pass1   })
        .then ( (res) => {
            alert(res);
         })
        this.clearName()
        this.$refs.modal.hide()
    }
    
  }
}
</script>

<style scoped>
    .reg {
        flex: 2 0 auto;
	    display: flex;
        float: right; 
        margin-right: 50px;
        
    }
    .button {
        border-radius: 20px; 
        width: 100%; 
        height: 40%;
    }
    #v {
        flex: 1 0 auto;
        border-color:  rgb(112,112,112);
        font-family: myFirstFont;
        background-color: rgb(112,112,112); 
        color: white;
    }
    #o {
        flex: 1 0 auto;
        font-family: myFirstFont;
        background-color: white;
        color: darkgray;
        margin-left: 2px;
    }
    #v:hover {
        
        flex: 1 0 auto;
        border-color:#006DF0;
        font-family: myFirstFont;
        color: white;
        background-color: #006DF0; 
        color:white;
    }
    #o:hover {
        flex: 1 0 auto;
        background-color:white;
        font-family: myFirstFont; 
        color:#006DF0; 
        border-color:#006DF0;
    }
    #modalPrevent {
        font-family: myFirstFont; 
        text-align: center;
    }
    #input {
        font-family: myFirstFont;
        border-radius: 14px;
        width: 80%;
        height: 60%;
        border-style: solid;
        border-color:  rgb(112,112,112);
        color: darkgray;
        text-align: right;
        padding-right: 8px;
    }
    #title {
        font-family: myFirstFont; 
        text-align: right;
        color: #006DF0;
    }
    #forget {
        font-family: myFirstFont;
        text-align: center;
    }
    #forget > a {
        color: #006DF0;
    }
    #enter {
        font-family: myFirstFont; 
        border-radius: 20px;
        width: 150px;
        margin-left: 50%;
        margin-right: 50%;
    }
    #register {
        font-family: myFirstFont;
    }
</style>
