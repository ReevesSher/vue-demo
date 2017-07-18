<template>
    <div>
        <ul>
            <router-link :to="{path:'/repository'}">
              <md-button href="#/repository"  class="md-raised md-primary">view your repositories</md-button>
            </router-link>
        </ul>
        <p>{{ msg }}</p>
    </div>
</template>

<script type="application/ecmascript">
  import * as types from '../store/types'

    export default {
        name: '',
        data () {
            return {
                msg: 'hey msg here'
            }
        },
        mounted () {
            this.$store.commit(types.TITLE,'index')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss' rel="stylesheet/scss" type="text/css">

</style>
