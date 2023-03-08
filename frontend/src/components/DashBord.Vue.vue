<template>
  <div>
    <h1>Welcome, {{ username }}!</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  },
  created() {
    // localStorage에 저장된 jwt 토큰에서 사용자 정보 추출
    const jwt = localStorage.getItem('jwt')
    if (jwt) {
      const payload = JSON.parse(atob(jwt.split('.')[1]))
      this.username = payload.sub
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('jwt')
      // 로그아웃 후, 로그인 페이지로 이동
      this.$router.push('/login')
    }
  }
}
</script>