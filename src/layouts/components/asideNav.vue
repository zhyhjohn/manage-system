<template>
  <div class="aside-container">
    <el-aside :width="isCollapse ? '64px' : '250px'">
      <div class="collapse-btn" @click="handleCollapse">|||</div>
      <el-menu
        active-text-color="#409eff"
        background-color="#545c64"
        text-color="#fff"
        unique-opened
        :router="true"
        :collapse="isCollapse"
        :collapse-transition="false"
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
            :name="subItem.authName"
            @click="saveNavPath(subItem.path)"
          >
            <template #title>
              <span>{{ subItem.authName }}</span>
            </template>
          </el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script setup>
import { Avatar, HomeFilled, Histogram } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue';
import { getMenuList } from '@/api/index.js';

const menuList = ref([]);
const defaultActivePath = ref('');
const isCollapse = ref(false);
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

const defaultValueChange = () => {
  defaultActivePath.value = window.sessionStorage.getItem('activePath');
};

const handleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};

onMounted(() => {
  fetchData();
  defaultValueChange();
});
</script>

<style lang="scss" scoped>
.aside-container {
  background-color: #4a5064;
  .collapse-btn {
    background-color: #4a5064;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 5px;
    cursor: pointer;
  }
}
.el-menu {
  border-right: none;
}
</style>
