<template>
  <div class="blog-container">
    <div class="tab-container">
      <tab v-if="!showBlog" @update-tab="updateTab"></tab>
    </div>
    <div class="blog-item">
      <blogShow v-if="showBlog" @backToBlog="backToBlog" :blogItem1="blogItem1"></blogShow>
      <blogItem v-if="!showBlog" @deliverBlogItem="deliverBlogItem" @updateBlogShow="updateBlogShow"
        v-model:tabValue="tabValue"></blogItem>
    </div>
    <div class="personal-card">
      <personalCard></personalCard>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import tab from './tab.vue'
import blogItem from './blog-item.vue'
import personalCard from './perosnal-card.vue'
import blogShow from './blog-show.vue'

let showBlog = ref(false)
let tabValue = ref('')

let blogItem1 = reactive({})

const updateBlogShow = (value) => {
  console.log(value)
  showBlog.value = value
}

const backToBlog = (value) => {
  showBlog.value = value
}

// 更新标签页
const updateTab = (value) => {
  tabValue.value = value
}

const deliverBlogItem = (value) => {
  console.log('value: ', value);
  blogItem1 = value
}
</script>

<style scoped lang="scss">
.blog-container {
  display: flex;
  background: #fafafa;
  min-height: 100vh;
  height: auto;

  .tab-container {
    width: 30%;
    min-height: 100vh;
    height: auto;
  }

  .blog-item {
    width: 44%;
    min-height: 100vh;
    height: auto;
  }

  .personal-card {
    flex: 1;
    min-height: 100vh;
    height: auto;
  }

}
</style>
