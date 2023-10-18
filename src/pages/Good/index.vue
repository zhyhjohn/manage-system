<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="id" label="产品编号" width="150" />
    <el-table-column prop="name" label="商品名称" width="150" />
    <el-table-column prop="category" label="分类" width="150" />
    <el-table-column prop="number" label="余量" width="150" />
    <el-table-column prop="price" label="价格" width="150" />
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
import { getGoodList } from '@/api/index.js';
import { ref, reactive, onMounted, watch } from 'vue';

const goodListData = ref([]);
const tableData = ref();
const total = ref(0);
// 用于真实后端请求分页参数
const queryInfo = reactive({
  query: '', // 查询参数
  pageNum: 1,
  pageSize: 5,
});

const fetchData = async () => {
  try {
    const data = await getGoodList();
    goodListData.value = data;
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

watch(goodListData, (newVal) => {
  tableData.value = newVal;
  total.value = newVal.length;
});
</script>

<style lang="scss" scoped>
.el-table {
  margin-bottom: 15px;
}
</style>
