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
             title="Submit your name"
             @ok="handleOk"
             @shown="clearName">
      <form @submit.stop.prevent="handleSubmit">
        <b-form-input type="text"
                      placeholder="Enter your name"
                      v-model="name"></b-form-input>
        <b-form-input type="text"
                      placeholder="Enter your name"
                      v-model="name"></b-form-input>
      </form>
    <p>
      This <a href="#" >Link</a>
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
</style>
