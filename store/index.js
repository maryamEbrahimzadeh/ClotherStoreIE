import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      is_login: false
    },
    getters:{
      getis_login : state =>state.is_login
    },
    mutations: { 
      login(state,lg) {
        state.is_login = true;
      }   
    },
  })
}

export default createStore