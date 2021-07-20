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
      this.$http.post('auth/login', this.user)
        .then(response => {
          console.log(response)
          localStorage.setItem('token', response.data.access_token)
          this.$router.push({ name: 'gerentes' })
        })
        .catch(erro => console.log(erro))
    }
  }
};
</script>

<style lang="scss" scoped>
</style>