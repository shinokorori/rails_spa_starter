<template>
  <div class="container">
    <h1>This is an login page</h1>
    <div class="row">
      <div class="c-inputBox error-wrap" v-if="error_msg !== ''">
        {{error_msg}}
      </div>
      <form class="j" method="post" @submit.prevent="login">
        <input v-model="user.email" class="" type="email" placeholder="" maxlength="254">
        <input v-model="user.password" type="password" placeholder="" maxlength="32">
        <button class="" type="submit" name="button">ログイン</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      user: {},
      error_msg: ''
    }
  },
  methods: {
    async login () {
      axios.post('/api/v1/auth/sign_in', {
          email: this.user.email,
          password: this.user.password
        })
        .then(response => {
          this.$store.dispatch('login')
          this.$router.push({ path: '/' })
        })
        .catch(error => {
          this.error_msg = error.response.data.errors[0]
          $('html, body').scrollTop(0)
        })
      }
    },
  }

</script>


<style scoped>

</style>
