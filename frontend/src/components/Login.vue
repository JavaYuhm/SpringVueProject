<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label>
        Username:
        <input type="text" v-model="username" required>
      </label>
      <br>
      <label>
        Password:
        <input type="password" v-model="password" required>
      </label>
      <br>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      axios.post('/api/auth/login', {
        username: this.username,
        password: this.password
      })
          .then(response => {
            localStorage.setItem('jwt', response.data.token)
            // 로그인 성공 후, 다른 페이지로 이동
            this.$router.push('/dashboard')
          })
          .catch(error => {
            console.log(error)
            alert('로그인에 실패했습니다.')
          })
    }
  }
}
</script>