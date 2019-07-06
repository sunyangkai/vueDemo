<template>
   <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账户" prop="username">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="pass">
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import Vue from 'vue'
import { Button, Form, FormItem, Input } from 'element-ui'
import { HTTP } from '@/network/network'
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

export default {
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账户不能为空'));
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } 
      };
      return {
        ruleForm: {
          username: '',
          pass: '',
        },
        rules: {
          username: [
            { validator: checkName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
         HTTP('post', '/login', {...this.ruleForm}).then((res) => {
           if(res.data === 'success') {
             this.$router.push({path: '/pc/order'})
           }
         }).catch((e) => {
           console.log(e)
         })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
