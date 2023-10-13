<template>
  <div class="header-container">
    <div class="logo-container">
      <img class="logo-pic" src="@/assets/manage-system.png" alt="" />
      <div class="logo-text-container">
        <span class="logo-text">后台管理系统</span>
      </div>
    </div>
    <el-button type="info" @click="handleLogout">退出</el-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const handleLogout = () => {
  window.sessionStorage.clear()
  router.push('/login')
}
</script>

<style lang="scss" scoped>
.header-container {
  height: 100%;
  background-color: #313743;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo-container {
    display: flex;
    flex-direction: row;
    .logo-pic {
      width: 30px;
      height: 30px;
      padding: 10px;
    }
    .logo-text-container {
      display: flex;
      align-items: center;

      span {
        margin-left: 15px;
      }
      .logo-text {
        font-size: 20px;
        font-weight: 800;
        color: white;
      }
    }
  }
}
</style>
