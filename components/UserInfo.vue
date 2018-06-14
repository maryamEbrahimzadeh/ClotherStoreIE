<template>
    <div>
    <span class="reg">
        <button class="button" id="o">عضویت</button>
        <b-btn v-b-modal.modalPrevent class="button" id="v">ورود</b-btn>
    </span>
    <!-- {{this.username}} -->
    <b-modal id="modalPrevent"
             centered
             ref="modal"
             title="ورود"
             @ok="handleOk"
             @shown="clearName">
      <form @submit.stop.prevent="handleSubmit">
         <p id="title"> شماره تلفن یا ایمیل </p>
        <b-form-input id= "input"
                      type="text"
                      placeholder="ایمیل"
                      v-model="name"></b-form-input>
         <p id="title"> رمز عبور</p>             
        <b-form-input id= "input"
                      type="text"
                      placeholder="رمز"
                      v-model="name"></b-form-input>
      </form>
    <p id= "forget">
        رمز عبور خود را فراموش کرده اید؟
       <a href="#" >کلیک کنید</a>
    </p>    
  </b-modal>
    </div>
</template>

<script>
export default {
    props: ['username']
    ,
    data () {
    return {
      name: '',
      names: []
    }
  },
  methods: {
    clearName () {
      this.name = ''
    },
    handleOk (evt) {
      // Prevent modal from closing
      evt.preventDefault()
      if (!this.name) {
        alert('Please enter your name')
      } else {
        this.handleSubmit()
      }
    },
    handleSubmit () {
      this.names.push(this.name)
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
</style>
