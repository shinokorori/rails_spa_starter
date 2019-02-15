<template>
  <header>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a @click="logout()" v-if="$store.state.user.isAuth">Logout</a></li>
        </ul>
      </div>
    </nav>
  </header>

</template>
<script>
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('logout')

      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
  header {
    background: #EEE;
  }
</style>
