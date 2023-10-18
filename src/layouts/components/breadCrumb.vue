<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/home' }">系统主页</el-breadcrumb-item>
    <el-breadcrumb-item v-if="firstAuthName">{{ firstAuthName }}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="SecondAuthName">{{ SecondAuthName }}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="ThirdAuthName">{{ ThirdAuthName }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue';

const props = defineProps({
  firstAuthName: {
    type: String,
    default: '1',
  },
  SecondAuthName: {
    type: String,
    default: '2',
  },
  ThirdAuthName: {
    type: String,
    default: '3',
  },
});
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  margin-bottom: 15px;
}
</style>
