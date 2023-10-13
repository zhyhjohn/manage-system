<template>
  <div class="login-container">
    <div class="login-box">
      <div class="box-header">登录</div>
      <div class="box-body">
        <el-form class="login-form" :model="loginForm">
          <el-form-item>
            <el-input
              v-model="loginForm.username"
              placeholder="请输入用户名"
              type="text"
              :prefix-icon="User"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginForm.password"
              placeholder="请输入密码"
              type="password"
              :prefix-icon="Lock"
              show-password
            />
          </el-form-item>
          <el-row justify="center">
            <el-form-item class="action-btn">
              <el-button type="primary" @click="handleLogin">登录</el-button>
              <el-button type="info" @click="handleReset">重置</el-button>
            </el-form-item>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const loginForm = reactive({
  username: '',
  password: '',
  token: 'abc123'
})

const handleLogin = () => {
  if (loginForm.username == 'admin' && loginForm.password == '123456') {
    console.log(loginForm)
    ElMessage.success('登陆成功!跳转至主页!')
    window.sessionStorage.setItem('token', loginForm.token)
    router.push('/home')
  } else {
    ElMessage.error('用户名或密码错误!')
  }
}

const handleReset = () => {
  loginForm.username = ''
  loginForm.password = ''
}
</script>

<style lang="scss" scoped>
.login-container {
  background-color: #2b4b6b;
  height: 100%;
  .login-box {
    width: 400px;
    height: 300px;
    background-color: #fff;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .box-header {
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .box-body {
      .login-form {
        width: 100%;
        position: absolute;
        padding: 0 20px;
        box-sizing: border-box;
        bottom: 80px;
      }
    }
  }
}

.el-form-item__content {
  display: block;
}
</style>
