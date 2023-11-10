<template>
  <el-breadcrumb :separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/home' }" @click="handleClickBackToHome">系统主页</el-breadcrumb-item>
    <el-breadcrumb-item v-if="firstBreadCrumbName">{{ firstBreadCrumbName }}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="secondBreadCrumbName">{{ secondBreadCrumbName }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue';
import { ref, watchEffect } from 'vue';

const firstBreadCrumbName = ref();
const secondBreadCrumbName = ref();

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
  firstBreadCrumbName.value = '';
  secondBreadCrumbName.value = '';
};

watchEffect(() => {
  firstBreadCrumbName.value = props.firstAuthName;
  secondBreadCrumbName.value = props.secondAuthName;
});
</script>

<style lang="scss" scoped>
.el-breadcrumb {
  margin-bottom: 15px;
}
</style>
