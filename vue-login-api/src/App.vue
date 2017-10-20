<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <g-signin-button :params="googleSignInParams" @success="onSignInSuccess" @error="onSignInError">Sign In with Google</g-signin-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    googleSignInParams: {
      client_id: '1020042898377-0d2bvmct8f5iv58kv7ei74asct8g3fbq.apps.googleusercontent.com'
    }
  }),
  methods: {
    onSignInSuccess (googleUser) {
      const profile = googleUser.getBasicProfile()
      console.log(profile)
    },
    onSignInError (error) {
      console.log(error)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}
</style>
