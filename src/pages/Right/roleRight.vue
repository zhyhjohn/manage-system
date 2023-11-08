<template>
  <el-select style="margin-bottom: 20px" v-model="role" placeholder="请选择角色">
    <el-option v-for="item in roleOptions" :key="item.value" :label="item.label" :value="item.value" />
  </el-select>
  <el-tree
    ref="treeRef"
    :data="data"
    show-checkbox
    default-expand-all
    node-key="id"
    highlight-current
    :props="defaultProps"
  />
</template>

<script setup>
import { ref } from 'vue';

const role = ref('');
const treeRef = ref(null);
const roleOptions = [
  {
    value: '超级管理员',
    label: '超级管理员',
  },
  {
    value: '管理员',
    label: '管理员',
  },
  {
    value: '普通用户',
    label: '普通用户',
  },
];

const defaultProps = {
  children: 'children',
  label: 'label',
};

const data = [
  {
    id: 1,
    label: 'Level one 1',
    children: [
      {
        id: 4,
        label: 'Level two 1-1',
        children: [
          {
            id: 9,
            label: 'Level three 1-1-1',
          },
          {
            id: 10,
            label: 'Level three 1-1-2',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: 'Level one 2',
    children: [
      {
        id: 5,
        label: 'Level two 2-1',
      },
      {
        id: 6,
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: 3,
    label: 'Level one 3',
    children: [
      {
        id: 7,
        label: 'Level two 3-1',
      },
      {
        id: 8,
        label: 'Level two 3-2',
      },
    ],
  },
];
</script>

<style lang="scss" scoped></style>
