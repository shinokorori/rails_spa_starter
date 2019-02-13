import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
      id: '',
      isAuth: false,
      email: '',
    },
  },
  mutations: {
    login(state, updated) {
      state.user.isAuth = true;
      state.user.id = updated.id;
      state.user.email = updated.email;
      if (localStorage.getItem('oauth')) {
        state.user.oauth = true;
      }
    },
    updateUser(state, updated) {
      state.user.email = updated.email;
    },
    logout(state) {
      state.user = {
        id: '',
        isAuth: false,
        email: '',
      };
      state.tmp_user = {
        id: '',
        isAuth: false,
        email: '',
      };
      localStorage.removeItem('access-token');
      localStorage.removeItem('client');
      localStorage.removeItem('uid');
      localStorage.removeItem('token-type');
      localStorage.removeItem('email');
      localStorage.removeItem('provider');
      location.reload() // 暫定
		},
  },
  actions: {
    async login(context) {
      await axios.get('/api/v1/auth/validate_token')
      .then(res => {
        context.commit('login', res.data.data);
      })
      .catch(error => {
        context.commit('logout');
      })
    },
    logout(context) {
      context.commit('logout');
    },
  },

  getters:
  {
  },
  plugins: [createPersistedState()]
})
export default store
