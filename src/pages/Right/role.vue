<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="id" label="账号ID" width="100" />
    <el-table-column prop="username" label="账号" width="300" />
    <el-table-column prop="password" label="密码" width="300" />
    <el-table-column prop="role" label="角色" width="150" />
    <el-table-column label="操作" fixed="right">
      <template #default="action">
        <el-button type="primary" size="small" :icon="Edit" @click="handleClickEdit(action.$index, action.row)">
          修改
        </el-button>
        <el-button type="danger" size="small" @click="handleClickDelete(action.$index, action.row)"> 删除 </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="EditDialogVisible" title="修改信息" width="40%">
    <el-form ref="editUserFormRef" :model="editForm" :rules="editFormRules" class="edit-container" label-width="60px">
      <el-form-item label="账号:" prop="username">
        <el-input v-model="editForm.username" disabled />
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input v-model="editForm.password" />
      </el-form-item>
      <el-form-item label="角色:" prop="role">
        <el-radio-group v-model="editForm.role">
          <el-radio border label="超级管理员" />
          <el-radio border label="管理员" />
          <el-radio border label="普通用户" />
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitEditForm">确定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  <el-dialog v-model="deleteDialogVisible" title="删除确认" width="30%">
    <span>你是否确定要删除账号[{{ userInfoDialog.username }}]的信息?</span>
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
</template>

<script setup>
import { getRightList } from '@/api/index.js';
import { Edit } from '@element-plus/icons-vue';
import { ref, reactive, onMounted } from 'vue';
import { ElMessage } from 'element-plus';

const tableData = ref([]);
const EditDialogVisible = ref(false);
const deleteDialogVisible = ref(false);
const editUserFormRef = ref(null);
const editIndex = ref();
const deleteIndex = ref();

const editForm = reactive({
  username: '',
  password: '',
  role: '',
});

const userInfoDialog = reactive({
  username: '',
  password: '',
  role: '',
});

const editFormRules = ref({
  username: [{ required: true, message: '账号不能为空', trigger: 'blur' }],
  password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
  role: [{ required: true, message: '角色不能为空', trigger: 'blur' }],
});

const fetchData = async () => {
  try {
    const data = await getRightList();
    console.log('data: ', data);
    tableData.value = data;
  } catch (err) {
    console.log('err: ', err);
  }
};

const handleClickEdit = (index, row) => {
  editIndex.value = index;
  editForm.username = row.username;
  editForm.password = row.password;
  editForm.role = row.role;
  EditDialogVisible.value = true;
};

const submitEditForm = () => {
  if (!editUserFormRef.value) return;
  editUserFormRef.value.validate((valid) => {
    if (valid) {
      tableData.value[editIndex.value].username = editForm.username;
      tableData.value[editIndex.value].password = editForm.password;
      tableData.value[editIndex.value].role = editForm.role;
      ElMessage({ message: '修改成功', type: 'success' });
      EditDialogVisible.value = false;
    } else {
      ElMessage({ message: '修改失败', type: 'error' });
      return false;
    }
  });
};

const handleClickDelete = (index, row) => {
  userInfoDialog.username = row.username;
  deleteDialogVisible.value = true;
  deleteIndex.value = index;
};

onMounted(() => {
  fetchData();
});
</script>

<style lang="scss" scoped></style>
