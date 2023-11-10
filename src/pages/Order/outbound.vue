<template>
  <div class="header-container">
    <el-input v-model="searchOutboundId" placeholder="请输入出库单号" />
    <el-input v-model="searchCustomName" placeholder="请输入供应商的姓名" />
    <el-input v-model="searchOutboundGoodName" placeholder="请输入入库商品名称" />
    <el-button type="primary" style="margin-left: 12px" :icon="Search">查询</el-button>
    <el-button :icon="Plus" @click="handleClickAdd">新增出库单</el-button>
  </div>
  <el-table :data="tableData" border height="680px" style="width: 100%">
    <el-table-column prop="id" label="出库单号" width="200" />
    <el-table-column prop="good" label="出库产品" width="200" />
    <el-table-column prop="time" label="出库日期" width="200" />
    <el-table-column prop="customer" label="客户" width="100" />
    <el-table-column prop="remark" label="备注" width="400" />
    <el-table-column prop="action" label="操作" fixed="right">
      <template #default="action">
        <el-button size="small" type="primary" :icon="View" @click="handleClickView(action.$index, action.row)">
          查看
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getOutboundList } from '@/api/index.js';

const tableData = ref([]);

const fetchData = async () => {
  try {
    const data = await getOutboundList();
    tableData.value = data;
  } catch (error) {
    console.log('error: ', error);
  }
};

const handleClickView = () => {
  console.log('view');
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped>
.header-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
  .el-input {
    width: 20%;
    margin-right: 20px;
  }
}
</style>
