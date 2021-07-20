<template>
  <div class="container">
    <h1>Novo usuário</h1>
    <form @submit.prevent="sendForm">
      <div class="form-group">
        <label>Nome</label>
        <input type="text" class="form-control" v-model="user.name" />
      </div>
      <div class="form-group">
        <label>E-mail</label>
        <input type="email" class="form-control" v-model="user.email" />
      </div>
      <div class="form-group">
        <label>Senha</label>
        <input type="password" class="form-control" v-model="user.password" />
      </div>
      <button class="btn btn-primary" type="submit">Salvar</button>
    </form>
  </div>
</template>

<script>
// import http from '@/http'

export default {
  data() {
    return {
      user: {
        name:'',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    sendForm () {
      this.$http.post('auth/register', this.user)
        .then(response => {
          console.log(response)
          this.$router.push({ name: 'login' })
        })
        .catch(erro => console.log(erro))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>