<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input type="email" class="form-control" v-model="user.email"/>
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" class="form-control" v-model="user.password"/>
      </div>
      <button type="submit" class="btn btn-primary brn-block">Logar</button>
      <router-link :to="{ name: 'new.user' }">
        Não possui um cadastro, cadastre-se aqui!
      </router-link>
    </form>
  </div>
</template> 

<script>
// import http from '@/http'

export default {
  data() {
    return {
      user: {}
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', this.user)
        .then(() => this.$router.push({ name:  'gerentes' }))
    }
  }
};
</script>

<style lang="scss" scoped>
</style>