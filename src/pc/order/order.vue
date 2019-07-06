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
      <span>订单管理</span>
    </el-header>
    <el-main>
        <el-button @click="getList()">获取英雄列表</el-button>
        <el-collapse v-model="activeNames">
          <el-collapse-item v-for="(hero, i) in heros" v-bind:title="hero.name"  :key="i" >
            <div>{{hero.introduce}}</div>
          </el-collapse-item>
        </el-collapse>
    </el-main>
  </el-container>
</template>

<script>
import Vue from 'vue'
import { Container, Main, Header, DropdownMenu, DropdownItem, Dropdown, Button, Collapse, CollapseItem } from 'element-ui'
import { HTTP } from '@/network/network'
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Dropdown)
Vue.use(Button)
Vue.use(Collapse)
Vue.use(CollapseItem)
export default {
  name: 'login',
  data () {
    return {
      activeNames: ['1'],
      heros: [],
      name: 'get'
    }
  },
  methods: {
    getList () {
      HTTP('post', '/getList', {}).then((res) => {
        this.heros = res.data.data
      }).catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header {
    background-color: rgb(218, 116, 204);
    color: #333;
    line-height: 60px;
  }
  .el-aside {
    color: #333;
  }
</style>
