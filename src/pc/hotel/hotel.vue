<template>
     <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>酒店管理</span>
    </el-header>
    <el-main>
       <router-view/>
    </el-main>
  </el-container>
</template>
<script>
import Vue from 'vue'
import { Container, Main, Header, DropdownMenu, DropdownItem, Dropdown } from 'element-ui'
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Dropdown)
export default {
  name: 'login',
  data () {
    return {
      msg: 'login'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>
