<template>
  <div>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/gerentes" class="nav-link"> Gerente </router-link>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click.prevent="logout"> Logout </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.commit('DESLOGAR_USER')
      this.$router.push({ name: 'login' })
    }
  },
};
</script>

<style>
</style>