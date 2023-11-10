<template>
  <el-container class="main-container">
    <el-header class="page-header">
      <MyHeader />
    </el-header>
    <el-container>
      <AsideNav ref="NavRef" />
      <el-container>
        <el-main class="page-main">
          <BreadCrumb :firstAuthName="firstAuthName" :secondAuthName="secondAuthName" />
          <el-card>
            <router-view></router-view>
          </el-card>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup>
import MyHeader from '@/layouts/components/myHeader.vue';
import AsideNav from '@/layouts/components/asideNav.vue';
import BreadCrumb from '@/layouts/components/breadCrumb.vue';

import { ref, watchEffect } from 'vue';

const NavRef = ref(null);
const firstAuthName = ref('');
const secondAuthName = ref('');

watchEffect(() => {
  try {
    firstAuthName.value = NavRef.value.firstAuthName;
    secondAuthName.value = NavRef.value.secondAuthName;
  } catch (error) {
    console.log('error: ', error);
  }
});
</script>

<style lang="scss" scoped>
.main-container {
  height: 100%;

  .page-header {
    padding: 0;
    height: 80px;
  }

  .page-main {
    background-color: #e9edf1;
  }
}
</style>
