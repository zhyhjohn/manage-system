<template>
  <el-container class="main-container">
    <el-header>
      <MyHeader />
    </el-header>
    <el-container>
      <el-aside>
        <AsideNav />
      </el-aside>
      <el-main>
        <BreadCrumb />
        <el-card class="box-card">
          <router-view></router-view>
        </el-card>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import MyHeader from '@/layouts/components/myHeader.vue';
import AsideNav from '@/layouts/components/asideNav.vue';
import BreadCrumb from '@/layouts/components/breadCrumb.vue';
</script>

<style lang="scss" scoped>
.main-container {
  height: 100%;

  .el-header {
    padding: 0;
    height: 80px;
  }

  .el-aside {
    width: 250px;
    background-color: #313743;
  }

  .el-main {
    background-color: #e9edf1;
  }
}
</style>
