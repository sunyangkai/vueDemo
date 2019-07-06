<template>
   <el-button>注册</el-button>
</template>

<script>
import Vue from 'vue'
import { Button, Select } from 'element-ui'
Vue.use(Button)
Vue.use(Select)

export default {
  name: 'register',
  data () {
    return {
      msg: 'register'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
