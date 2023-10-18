<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="姓名" width="100" />
    <el-table-column prop="gender" label="性别" width="100" />
    <el-table-column prop="email" label="邮箱" />
    <el-table-column prop="tel" label="手机" />
    <el-table-column prop="address" label="地址" />
    <el-table-column prop="action" label="操作" />
  </el-table>
  <el-pagination
    :current-page="queryInfo.pageNum"
    :page-size="queryInfo.pageSize"
    :page-sizes="[5, 10, 20]"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  ></el-pagination>
</template>

<script setup>
import { getUserList } from '@/api/index.js';
import { ref, reactive, onMounted, watch } from 'vue';

const userListData = ref([]);
const tableData = ref();
const total = ref(0);
// 用于真实后端请求分页参数
const queryInfo = reactive({
  query: '',
  pageNum: 1,
  pageSize: 5,
});

const fetchData = async () => {
  try {
    const data = await getUserList();
    userListData.value = data;
  } catch (err) {
    console.log('err: ', err);
  }
};

const handleSizeChange = (newSize) => {
  queryInfo.pageSize = newSize;
  fetchData();
  console.log('newSize: ', newSize);
};

const handleCurrentChange = (newPage) => {
  queryInfo.pageNum = newPage;
  fetchData();
  console.log('newPage: ', newPage);
};

onMounted(() => {
  fetchData();
});

watch(userListData, (newVal) => {
  tableData.value = newVal;
  total.value = newVal.length;
});
</script>

<style lang="scss" scoped>
.el-table {
  margin-bottom: 15px;
}
</style>
