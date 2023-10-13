<template>
  <div class="aside-container">
    <el-menu
      active-text-color="#409eff"
      background-color="#545c64"
      text-color="#fff"
      default-active="welcome"
      unique-opened
      :router="true"
      @open="handleOpen"
      @close="handleClose"
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
          <el-menu-item index="user">用户列表</el-menu-item>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="good">
        <template #title>
          <el-icon><icon-menu /></el-icon>
          <span>商品管理</span>
        </template>
        <el-menu-item>
          <el-menu-item index="good">商品列表</el-menu-item>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>设置(别点!!!!!!!!!!!!!!!!!!!!)</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { House, Menu as IconMenu, User, Setting } from '@element-plus/icons-vue'

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.aside-container {
  background-color: #000;
}
</style>
