<template>
  <div class="aside-container">
    <el-aside :width="isCollapse ? '64px' : '250px'">
      <el-tooltip effect="light" :content="content" show-after="200" placement="top">
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
            @click="savePathInfo(subItem.path, item.authName, subItem.authName)"
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
import { Avatar, Goods, Histogram, WarningFilled, List, Expand, Fold } from '@element-plus/icons-vue';
import { onMounted, ref, computed } from 'vue';
import { getMenuList } from '@/api/index.js';

const menuList = ref([]);
const defaultActivePath = ref('');
const isCollapse = ref(false);
const firstAuthName = ref('');
const secondAuthName = ref('');
const iconsObj = {
  310: Avatar,
  320: Goods,
  330: Histogram,
  340: WarningFilled,
  350: List,
};

const content = computed(() => {
  return isCollapse.value ? '点击展开侧边栏' : '点击收起侧边栏';
});

const fetchData = async () => {
  const resultList = await getMenuList();
  console.log('resultList: ', resultList);
  menuList.value = resultList;
};

const savePathInfo = (activePath, firstName, secondName) => {
  window.sessionStorage.setItem('activePath', activePath);
  // window.sessionStorage.setItem('firstAuthName', firstName);
  // window.sessionStorage.setItem('secondAuthName', secondName);
  firstAuthName.value = firstName;
  secondAuthName.value = secondName;
};

const defaultMenuValueChange = () => {
  const result = window.sessionStorage.getItem('activePath');
  if (!result) {
    defaultActivePath.value = '/welcome';
  } else {
    defaultActivePath.value = window.sessionStorage.getItem('activePath');
  }
};

const handleCollapse = () => {
  isCollapse.value = !isCollapse.value;
};

onMounted(() => {
  fetchData();
  defaultMenuValueChange();
});

defineExpose({
  firstAuthName,
  secondAuthName,
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
