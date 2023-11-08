<template>
  <div class="header-container">
    <el-input v-model="searchUserInfo" placeholder="请输入需要查询的姓名" />
    <el-button type="primary" style="margin-left: 12px" :icon="Search">查询</el-button>
    <el-button :icon="Plus" @click="handleClickAdd">新增</el-button>
  </div>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="name" label="姓名" width="100" />
    <el-table-column prop="gender" label="性别" width="100" />
    <el-table-column prop="email" label="邮箱" width="250" />
    <el-table-column prop="tel" label="手机" width="150" />
    <el-table-column prop="address" label="地址" width="300" />
    <el-table-column prop="action" label="操作" fixed="right">
      <template #default="action">
        <el-button size="small" @click="handleClickView(action.$index, action.row)">查看</el-button>
        <el-button type="primary" size="small" :icon="Edit" @click="handleClickEdit(action.$index, action.row)">
          编辑
        </el-button>
        <el-button
          type="danger"
          size="small"
          :icon="DeleteFilled"
          @click="handleClickDelete(action.$index, action.row)"
        >
          删除
        </el-button>
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

  <el-dialog v-model="addUserDialogVisible" title="新增用户" width="30%">
    <el-form ref="addUserFormRef" :model="addForm" :rules="UserFormRules" class="edit-container" label-width="60px">
      <el-form-item label="姓名:" prop="name">
        <el-input v-model="addForm.name" />
      </el-form-item>
      <el-form-item label="性别:" prop="gender">
        <el-radio-group v-model="addForm.gender">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="邮箱:" prop="email">
        <el-input v-model="addForm.email" />
      </el-form-item>
      <el-form-item label="手机:" prop="tel">
        <el-input v-model="addForm.tel" />
      </el-form-item>
      <el-form-item label="地址:" prop="address">
        <el-input v-model="addForm.address" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitAddUser(addUserForm)">确定</el-button>
        <el-button @click="resetAddUserForm(addUserForm)">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
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
    <span>你是否确定要删除姓名为:[{{ userInfoDialog.name }}]的信息?</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="deleteDialogVisible = false">取消</el-button>
        <el-button
          type="primary"
          @click="
            deleteDialogVisible = false;
            tableData.splice(deleteIndex, 1);
            ElMessage({ message: '删除成功', type: 'success' });
          "
        >
          确认
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="EditDialogVisible" title="编辑" width="40%">
    <el-form ref="editUserFormRef" :model="editForm" :rules="UserFormRules" class="edit-container" label-width="60px">
      <el-form-item label="姓名:" prop="name">
        <el-input v-model="editForm.name" />
      </el-form-item>
      <el-form-item label="性别:" prop="gender">
        <el-radio-group v-model="editForm.gender">
          <el-radio border label="男" />
          <el-radio border label="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="邮箱:" prop="email">
        <el-input v-model="editForm.email" />
      </el-form-item>
      <el-form-item label="手机:" prop="tel">
        <el-input v-model="editForm.tel" />
      </el-form-item>
      <el-form-item label="地址:" prop="address">
        <el-input v-model="editForm.address" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitEditForm">确定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script setup>
import { getUserList } from '@/api/index.js';
import { ref, reactive, onMounted } from 'vue';
import { Search, Plus, Edit, DeleteFilled } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

const tableData = ref([]);
const total = ref(0);
const deleteIndex = ref();
const editIndex = ref();
const addUserFormRef = ref(null);
const editUserFormRef = ref(null);
const searchUserInfo = ref();
const addUserDialogVisible = ref(false);
const userInfoDialogVisible = ref(false);
const deleteDialogVisible = ref(false);
const EditDialogVisible = ref(false);

const UserFormRules = ref({
  name: [{ required: true, message: '姓名不能为空', trigger: 'blur' }],
  gender: [{ required: true, message: '性别不能为空', trigger: 'blur' }],
  email: [{ required: true, message: '邮箱不能为空', trigger: 'blur' }],
  tel: [{ required: true, message: '手机不能为空', trigger: 'blur' }],
  address: [{ required: true, message: '地址不能为空', trigger: 'blur' }],
});

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

const addForm = ref({
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

const handleClickAdd = () => {
  addUserDialogVisible.value = true;
};

const submitAddUser = () => {
  if (!addUserFormRef.value) return;
  addUserFormRef.value.validate((valid) => {
    if (valid) {
      addForm.value['id'] = tableData.value.length;
      tableData.value.push(addForm.value);
      addUserDialogVisible.value = false;
      ElMessage({ message: '新增用户成功', type: 'success' });
    } else {
      ElMessage({ message: '新增用户失败', type: 'error' });
      return false;
    }
  });
};

const resetAddUserForm = () => {
  if (!addUserFormRef.value) return;
  addUserFormRef.value.resetFields();
};

const handleClickView = (index, row) => {
  // userInfoDialog.name = row.name;
  // userInfoDialog.gender = row.gender;
  // userInfoDialog.email = row.email;
  // userInfoDialog.tel = row.tel;
  // userInfoDialog.address = row.address;
  Object.assign(userInfoDialog, row);
  userInfoDialogVisible.value = true;
};

const handleClickEdit = (index, row) => {
  editIndex.value = index;
  editForm.name = row.name;
  editForm.gender = row.gender;
  editForm.email = row.email;
  editForm.tel = row.tel;
  editForm.address = row.address;
  EditDialogVisible.value = true;
};

const submitEditForm = () => {
  if (!editUserFormRef.value) return;
  editUserFormRef.value.validate((valid) => {
    if (valid) {
      tableData.value[editIndex.value].name = editForm.name;
      tableData.value[editIndex.value].gender = editForm.gender;
      tableData.value[editIndex.value].email = editForm.email;
      tableData.value[editIndex.value].tel = editForm.tel;
      tableData.value[editIndex.value].address = editForm.address;
      ElMessage({ message: '修改成功', type: 'success' });
      EditDialogVisible.value = false;
    } else {
      ElMessage({ message: '修改失败', type: 'error' });
      return false;
    }
  });
};

const handleClickDelete = (index, row) => {
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

.header-container {
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;
  .el-input {
    width: 30%;
  }
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
