<template>
  <div class="aside-container">
    <el-aside :width="isCollapse ? '64px' : '250px'">
      <el-tooltip effect="light" :content="content" placement="top">
        <div class="collapse-btn" @click="handleCollapse">
          <Fold v-if="isCollapse === false" class="fold-icon" />
          <Expand v-if="isCollapse === true" class="fold-icon" />
        </div>
      </el-tooltip>
      <el-menu
        active-text-color="#409eff"
        background-color="#242f42"
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
import { Avatar, HomeFilled, Histogram, WarningFilled, Expand, Fold } from '@element-plus/icons-vue';
import { onMounted, ref, computed } from 'vue';
import { getMenuList } from '@/api/index.js';

const menuList = ref([]);
const defaultActivePath = ref('');
const isCollapse = ref(false);
const iconsObj = {
  300: Avatar,
  310: HomeFilled,
  320: Histogram,
  330: WarningFilled,
};

const content = computed(() => {
  return isCollapse.value ? '点击收起侧边栏' : '点击展开侧边栏';
});

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
  background-color: #242f42;
  .collapse-btn {
    background-color: #242f42;
    font-size: 10px;
    line-height: 24px;
    color: #fff;
    text-align: center;
    letter-spacing: 5px;
    cursor: pointer;

    .fold-icon {
      margin-top: 6px;
      width: 22px;
      height: 22px;
      color: white;
    }
  }
}
.el-menu {
  border-right: none;
}
</style>
