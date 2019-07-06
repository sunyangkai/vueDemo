<template>
  <el-row :gutter="10">
    <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title" >
            <i class="el-icon-location"></i>
            <span>酒店管理</span>
          </template>
          <el-menu-item index="1-1" @click="getTo('/pc/hotel/info')">信息管理</el-menu-item>
          <el-menu-item index="1-2" @click="getTo('/pc/hotel/staff')">员工管理</el-menu-item>
        </el-submenu>
        <el-menu-item index="2" @click="getTo('/pc/order')">
          <i class="el-icon-menu"></i>
          <span slot="title">订单管理</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">财务管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">统计管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
      <router-view/>
    </el-col>
  </el-row>
</template>

<script>
import Vue from 'vue'
import { Row, Col, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
export default {
  name: 'pc',
  data () {
    return {
      msg: 'pc'
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    getTo (path) {
      this.$router.push({path: path})
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
