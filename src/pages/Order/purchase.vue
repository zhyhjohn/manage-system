<template>
  <div class="header-container">
    <el-input v-model="searchPurchaseId" placeholder="请输入采购单号" />
    <el-input v-model="searchPurchaserName" placeholder="请输入采购人的姓名" />
    <el-input v-model="searchPurchaseGoodName" placeholder="请输入采购商品名称" />
    <el-button type="primary" style="margin-left: 12px" :icon="Search">查询</el-button>
    <el-button :icon="Plus" @click="handleClickAdd">新增采购单</el-button>
  </div>
  <el-table :data="tableData" border height="680px" style="width: 100%">
    <el-table-column prop="id" label="采购单号" width="200" />
    <el-table-column prop="time" label="申请采购日期" width="200" />
    <el-table-column prop="purchaser" label="申请人" width="100" />
    <el-table-column prop="good" label="采购商品" width="100" />
    <el-table-column prop="remark" label="备注" width="400" />
    <el-table-column prop="action" label="操作" fixed="right">
      <template #default="action">
        <el-button size="small" type="primary" :icon="View" @click="handleClickView(action.$index, action.row)">
          查看
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="addPurchaseListDialogVisible" title="新增用户" width="40%">
    <el-form
      ref="addPurchaseListFormRef"
      :model="addPurchaseListForm"
      :rules="addPurchaseListFormRules"
      class="edit-container"
      label-width="80px"
    >
      <el-form-item label="采购单号:" prop="id">
        <el-input v-model="addPurchaseListForm.id" disabled />
      </el-form-item>
      <el-form-item label="申请人:" prop="purchaser">
        <el-input v-model="addPurchaseListForm.purchaser" />
      </el-form-item>
      <el-form-item label="申请商品:" prop="good">
        <el-input v-model="addPurchaseListForm.good" />
      </el-form-item>
      <el-form-item label="申请时间:" prop="time">
        <el-input v-model="addPurchaseListForm.time" />
      </el-form-item>
      <el-form-item label="备注:" prop="remark">
        <el-input v-model="addPurchaseListForm.remark" type="textarea" maxlength="100" show-word-limit />
      </el-form-item>

      <!-- <el-form-item>
        <el-button type="primary" @click="submitAddPurchaseList()">确定</el-button>
        <el-button @click="resetAddPurchaseListForm()">重置</el-button>
      </el-form-item> -->
    </el-form>
  </el-dialog>
</template>

<script setup>
import { Search, Plus, View } from '@element-plus/icons-vue';
import { onMounted, ref, reactive } from 'vue';
import { getPurchaseList } from '@/api/index.js';

const tableData = ref([]);
const searchPurchaseId = ref('');
const searchPurchaserName = ref('');
const searchPurchaseGoodName = ref('');

const addPurchaseListDialogVisible = ref(false);
const addPurchaseListForm = reactive({
  id: 'CG1234567890',
  purchaser: '',
  good: '',
  time: '',
  remark: '',
});

const fetchData = async () => {
  try {
    const data = await getPurchaseList();
    tableData.value = data;
  } catch (error) {
    console.log('error: ', error);
  }
};

const handleClickAdd = () => {
  addPurchaseListDialogVisible.value = true;
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
