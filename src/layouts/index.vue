<template>
  <el-container class="main-container">
    <el-header>
      <myHeader />
    </el-header>
    <el-container>
      <el-aside>
        <asideNav />
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import myHeader from '@/layouts/components/myHeader.vue'
import asideNav from '@/layouts/components/asideNav.vue'
</script>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  .el-header {
    padding: 0;
    height: 80px;
  }
  .el-aside {
    background-color: #313743;
  }

  .el-main {
    background-color: #e9edf1;
  }
}
</style>
