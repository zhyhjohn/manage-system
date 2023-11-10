<template>
  <div class="login-container">
    <div class="login-box">
      <div class="box-header">登录</div>
      <div class="box-body">
        <el-form class="login-form" ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="70">
          <el-form-item label="用户名:" prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名" type="text" :prefix-icon="User" />
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input
              v-model="loginForm.password"
              placeholder="请输入密码"
              type="password"
              :prefix-icon="Lock"
              show-password
            />
          </el-form-item>
          <el-form-item class="action-btn">
            <el-button type="primary" @click="handleLogin">登录</el-button>
            <el-button type="info" @click="handleReset">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus';
import { User, Lock } from '@element-plus/icons-vue';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { getLoginInfo } from '@/api/index.js';

const router = useRouter();

const loginFormRef = ref(null);

const loginForm = reactive({
  username: '',
  password: '',
  token: 'abc123',
});

const loginFormRules = ref({
  username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
});

const handleLogin = () => {
  if (!loginFormRef.value) return;
  loginFormRef.value.validate(async (valid) => {
    const { username, password } = loginForm;
    if (valid) {
      // if (loginForm.username === 'admin' && loginForm.password === '123456') {
      //   ElMessage.success('登陆成功!跳转至主页!');
      //   window.sessionStorage.setItem('token', loginForm.token);
      //   router.push('/home');
      // } else {
      //   ElMessage.error('用户名或密码错误!');
      // }
      const result = await getLoginInfo(username, password);
      if (result) {
        ElMessage.success('登陆成功!跳转至主页!');
        window.sessionStorage.setItem('token', result.token);
        router.push('/home');
      } else {
        ElMessage.error('用户名或密码错误!');
      }
    } else {
      if (!username && password) ElMessage({ message: '请输入用户名!', type: 'error' });
      if (!password && username) ElMessage({ message: '请输入密码!', type: 'error' });
      if (!username && !password) ElMessage({ message: '请输入用户名和密码!', type: 'error' });
      return false;
    }
  });
};

const handleReset = () => {
  loginForm.username = '';
  loginForm.password = '';
};
</script>

<style lang="scss" scoped>
.login-container {
  background-color: #409eff;
  height: 100%;

  .login-box {
    width: 400px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .box-header {
      display: flex;
      margin-top: 20px;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: 800;
    }

    .box-body {
      .login-form {
        width: 100%;
        position: absolute;
        padding: 0 20px;
        bottom: 60px;
        box-sizing: border-box;
      }
    }
  }
}

.action-btn {
  margin-left: 50px;
}
</style>
