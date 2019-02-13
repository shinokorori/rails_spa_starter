<template>
  <div id="app">
    <header-component />
    <div v-if="$route.query.message">ログイン認証が必要なページです。</div>
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import * as history from 'connect-history-api-fallback';
import HeaderComponent from './components/shared/header';

import FooterComponent from './components/shared/footer';
export default {
  components: {
    HeaderComponent,
    FooterComponent
  },

  methods: {
   logout () {
     this.$store.commit('setUserId', '')
     if (this.$route.meta.requiresAuth) {
       this.$router.push({
         path: '/login',
         query: { redirect: this.$route.fullPath }
       })
     }
   }
 }
}


</script>

<style scoped>
</style>
