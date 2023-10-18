<template>
  <div class="aside-container">
    <el-menu
      active-text-color="#409eff"
      background-color="#545c64"
      text-color="#fff"
      unique-opened
      :router="true"
      :default-active="defaultActivePath"
    >
      <el-sub-menu v-for="item in menuList" :key="item.id" :index="item.id + ''">
        <template #title>
          <el-icon>
            <component :is="iconsObj[item.id]" />
          </el-icon>
          <span>{{ item.authName }}</span>
        </template>
        <el-menu-item
          v-for="subItem in item.children"
          :key="subItem.id"
          :index="subItem.path"
          @click="saveNavPath(subItem.path)"
        >
          <template #title>
            <!-- <el-icon><user /></el-icon> -->
            <span>{{ subItem.authName }}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { Avatar, HomeFilled, Histogram } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue';
import { getMenuList } from '@/api/index.js';

const menuList = ref([]);
const defaultActivePath = ref('');
const iconsObj = {
  300: Avatar,
  310: HomeFilled,
  320: Histogram,
};

const fetchData = async () => {
  const resultList = await getMenuList();
  menuList.value = resultList;
};

const saveNavPath = (activePath) => {
  window.sessionStorage.setItem('activePath', activePath);
};

const defaultActiveChange = () => {
  defaultActivePath.value = window.sessionStorage.getItem('activePath');
};

onMounted(() => {
  fetchData();
  defaultActiveChange();
});
</script>

<style lang="scss" scoped>
.aside-container {
  background-color: #000;
}
.el-menu {
  border-right: none;
}
</style>
