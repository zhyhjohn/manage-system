<template>
  <div class="aside-container">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="1"
      text-color="#fff"
    >
      <el-menu-item index="1">
        <el-icon><house /></el-icon>
        <span>系统主页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon><user /></el-icon>
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><icon-menu /></el-icon>
        <span>商品管理</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <span>设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { House, Menu as IconMenu, User, Setting } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.aside-container {
  background-color: #000;
}
</style>
