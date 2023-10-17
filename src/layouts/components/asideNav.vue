<template>
  <div class="aside-container">
    <el-menu
      active-text-color="#409eff"
      background-color="#545c64"
      text-color="#fff"
      unique-opened
      :router="true"
      :default-active="activePath"
      @select="handleSelect"
    >
      <el-menu-item index="welcome">
        <el-icon><house /></el-icon>
        <span>系统主页</span>
      </el-menu-item>
      <el-sub-menu index="user">
        <template #title>
          <el-icon><user /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item>
          <el-menu-item index="userlist">用户列表</el-menu-item>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="good">
        <template #title>
          <el-icon><icon-menu /></el-icon>
          <span>商品管理</span>
        </template>
        <el-menu-item>
          <el-menu-item index="goodlist">商品列表</el-menu-item>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="chart">
        <template #title>
          <el-icon><Histogram /></el-icon>
          <span>图表</span>
        </template>
        <el-menu-item>
          <el-menu-item index="barchart">柱状图</el-menu-item>
        </el-menu-item>
        <el-menu-item>
          <el-menu-item index="linechart">折线图</el-menu-item>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="setting">
        <el-icon><setting /></el-icon>
        <span>设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { House, Menu as IconMenu, User, Setting, Histogram } from '@element-plus/icons-vue'
import { ref } from 'vue'

const activePath = ref('')

const handleSelect = (index) => {
  // console.log(index)
  window.sessionStorage.setItem('activePath', index)
  activePath.value = window.sessionStorage.getItem('activePath')
}
</script>

<style lang="scss" scoped>
.aside-container {
  background-color: #000;
}
</style>
