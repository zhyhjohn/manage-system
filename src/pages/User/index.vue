<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="姓名" width="100" />
    <el-table-column prop="gender" label="性别" width="100" />
    <el-table-column prop="email" label="邮箱" width="250" />
    <el-table-column prop="tel" label="手机" width="150" />
    <el-table-column prop="address" label="地址" width="300" />
    <el-table-column label="操作" fixed="right">
      <template #default="action">
        <el-button size="small" @click="handleClickView(action.row)">查看</el-button>
        <el-button type="primary" size="small" @click="handleClickEdit(action.row)" disabled>编辑</el-button>
        <el-button type="danger" size="small" @click="handleClickDelete(action.$index, action.row)">删除</el-button>
      </template>
    </el-table-column>
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

  <el-dialog v-model="userInfoDialogVisible" title="用户信息" width="30%">
    <div class="user-info-dialog-text">
      <span> 姓名:{{ userInfoDialog.name }} </span>
      <span>性别:{{ userInfoDialog.gender }} </span>
      <span>邮箱:{{ userInfoDialog.email }}</span>
      <span>手机:{{ userInfoDialog.tel }}</span>
      <span>地址:{{ userInfoDialog.address }}</span>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="UserInfoDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="UserInfoDialogVisible = false"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="deleteDialogVisible" title="删除确认" width="30%">
    <span>你是否确定要删除[{{ userInfoDialog.name }}]的信息</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="
            deleteDialogVisible = false;
            tableData.splice(deleteIndex, 1);
          "
        >
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="EditDialogVisible" title="编辑" width="40%">
    <el-form ref="userForm" :model="editForm" class="edit-container" label-width="50px">
      <el-form-item label="姓名:">
        <el-input v-model="editForm.name" />
      </el-form-item>
      <el-form-item label="性别:">
        <el-input v-model="editForm.gender" />
      </el-form-item>
      <el-form-item label="邮箱:">
        <el-input v-model="editForm.email" />
      </el-form-item>
      <el-form-item label="手机:">
        <el-input v-model="editForm.tel" />
      </el-form-item>
      <el-form-item label="地址:">
        <el-input v-model="editForm.address" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">确定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup>
import { getUserList } from '@/api/index.js';
import { ref, reactive, onMounted } from 'vue';

const tableData = ref([]);
const total = ref(0);
const deleteIndex = ref();
const userForm = ref('');
const userInfoDialogVisible = ref(false);
const deleteDialogVisible = ref(false);
const EditDialogVisible = ref(false);

// 用于真实后端请求分页参数
const queryInfo = reactive({
  query: '',
  pageNum: 1,
  pageSize: 5,
});

const userInfoDialog = reactive({
  name: '',
  gender: '',
  email: '',
  tel: '',
  address: '',
});

const editForm = reactive({
  name: '',
  gender: '',
  email: '',
  tel: '',
  address: '',
});

const fetchData = async () => {
  try {
    const data = await getUserList();
    tableData.value = data;
  } catch (err) {
    console.log('err: ', err);
  }
};

const handleClickView = (row) => {
  // console.log('row: ', row);
  userInfoDialog.name = row.name;
  userInfoDialog.gender = row.gender;
  userInfoDialog.email = row.email;
  userInfoDialog.tel = row.tel;
  userInfoDialog.address = row.address;
  userInfoDialogVisible.value = true;
};

const handleClickEdit = (row) => {
  editForm.name = row.name;
  editForm.gender = row.gender;
  editForm.email = row.email;
  editForm.tel = row.tel;
  editForm.address = row.address;
  EditDialogVisible.value = true;
  console.log(row);
};

const submitForm = () => {};

const handleClickDelete = (index, row) => {
  // console.log('index: ', index);
  // console.log('row: ', row);
  userInfoDialog.name = row.name;
  deleteDialogVisible.value = true;
  deleteIndex.value = index;
  // tableData.value.splice(index, 1);
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
</script>

<style lang="scss" scoped>
.el-table {
  margin-bottom: 15px;
}
.user-info-dialog-text {
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 5px;
  }
}

.edit-container {
  .el-form-item asterisk-left {
    .el-form-item__label {
      display: block !important;
      width: 60px !important;
    }
  }
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
