<template>
  <div class="container">
    <form class="login-form" novalidate @submit.stop.prevent="login">
      <md-input-container md-has-password>
        <label>Github Personal Token(Press Enter)</label>
        <md-input type="password" v-model="token"></md-input>
      </md-input-container>
    </form>
    <p v-show="loading">loading...</p>
    <p>{{msg}}</p>
    <md-button href="https://github.com/settings/tokens/new" target="_blank" class="md-raised md-primary">generate your token</md-button>
  </div>
</template>

<script type="application/ecmascript">
  import * as types from '../store/types'
  import api from '../assets/js/api'

  export default {
    name: '',
    data () {
      return {
        msg: '',
        token: '',
        loading: false
      }
    },
    //when $el replace el mounted happens
    mounted(){
      this.$store.commit(types.TITLE, 'Login');
    },
    methods: {
      async login(){
        this.loading = true
        this.msg = ''
        this.$store.commit(types.LOGIN, this.token)
        if (this.token) {
          let params = {
              sort: 'updated'
          }
          await this.axios.get(api.repo_list, params).then((res) => {
            res && localStorage.setItem('data',JSON.stringify(res.data))
          }).catch((res = {message: 'no response'}) => {
              res.name == "TypeError" ? this.msg = "timeout or what ,client error": this.msg = res.message
              this.loading = false
              return Promise.reject('wrong token')
          });
//          let redirect = decodeURIComponent(this.$route.query.redirect || '/');
          this.$router.push({
            path: '/repository'
          })
        }else{
            this.loading = false
            this.msg = ''
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' rel="stylesheet/scss" type="text/css">
  .login-form{
    width: 400px;
    margin: 50px auto;
  }
</style>
