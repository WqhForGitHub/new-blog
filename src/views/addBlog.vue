<template>
  <div>
    <a-form ref="formRef" :model="formState" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item ref="name" label="博客标题" name="blogTitle">
        <a-input v-model:value="formState.blogTitle" placeholder="请输入博客标题" />
      </a-form-item>
      <a-form-item label="博客简介" name="motto">
        <a-input v-model:value="formState.motto" placeholder="请输入博客简介">
        </a-input>
      </a-form-item>
      <a-form-item label="博客类型" name="type">
        <a-select v-model:value="formState.type" style="width: 100%" placeholder="请选择博客类型" :options="options"></a-select>
      </a-form-item>
      <a-form-item label="是否markdown" name="isMarked">
        <a-radio-group v-model:value="formState.isMarked" name="radioGroup">
          <a-radio value="1">是</a-radio>
          <a-radio value="0">否</a-radio>
        </a-radio-group>
      </a-form-item>
      <a-form-item label="博客内容" name="content">
        <a-textarea v-model:value="formState.content" show-count :rows="18"></a-textarea>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit" :loading="loading">新建</a-button>
        <a-button style="margin-left: 10px" @click="resetForm">重置</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive, ref, toRaw } from 'vue';
import { AddBlog } from '../api/blog'

let loading = ref(false)
const formRef = ref();
const labelCol = {
  span: 3,
};
const wrapperCol = {
  span: 13,
};
const formState = reactive({
  blogTitle: '', // 博客标题
  motto: '', // 博客简介
  date1: '',
  type: '',
  isMarked: "",
  content: ''
});

const options = ref([
  {
    value: '2',
    label: '前端',
  },
  {
    value: '1',
    label: '后端',
  },
  {
    value: '3',
    label: '大数据',
  },
  {
    value: '4',
    label: '综合',
  },
  {
    label: 'ios',
    value: '0'
  }
]);

const rules = {
  blogTitle: [
    {
      required: true,
      message: '请输入博客标题',
      trigger: 'blur',
    },
  ],
  motto: [
    {
      required: true,
      message: '请输入博客简介',
      trigger: 'blur',
    },
  ],
  type: [
    {
      required: true,
      message: '请选择博客类型',
      trigger: 'change',
    },
  ],
  isMarked: [
    {
      required: true,
      message: '是否markdown',
      trigger: 'change',
    },
  ],
  content: [
    {
      required: true,
      message: '请输入博客内容',
      trigger: 'blur',
    },
  ],
};

const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log('values', formState, toRaw(formState));
      loading.value = true
      AddBlog(toRaw(formState)).then((res) => {
        if (res.data.code === 0) {
          loading.value = false
        }
      })
    })
    .catch(error => {
      console.log('error', error);
    });
};

const resetForm = () => {
  formRef.value.resetFields();
};
</script>

<style lang="scss" scoped>
.ant-form {
  margin-top: 130px;

}
</style>