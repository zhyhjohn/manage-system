<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/home' }" @click="handleClickBackToHome">系统主页</el-breadcrumb-item>
    <el-breadcrumb-item v-if="firstAuthName">{{ firstAuthName }}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="secondAuthName">{{ secondAuthName }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue';
import { watchEffect } from 'vue';

const props = defineProps({
  firstAuthName: {
    type: String,
    default: '',
  },
  secondAuthName: {
    type: String,
    default: '',
  },
});

const handleClickBackToHome = () => {
  window.sessionStorage.setItem('activePath', '');
};

watchEffect(() => {
  console.log('props.firstAuthName: ', props.firstAuthName);
  console.log('props.secondAuthName: ', props.secondAuthName);
});
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  margin-bottom: 15px;
}
</style>
