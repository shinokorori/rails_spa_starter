<template>
  <header>
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">Logo</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">JavaScript</a></li>
          <li><a @click="logout()" v-if="$store.getters.loggedIn">Logout</a></li>
        </ul>
      </div>
    </nav>
  </header>

</template>
<script>
export default {
  methods: {
    async logout () {
      await this.$store.dispatch('auth/logout')

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
