<template>
  <div class="card-contaienr">
    <a-card v-for="(item, index) in blogList" @click="showBlogMark(item)">
      <div class="title">{{ item.blogTitle }}</div>
      <div class="motto">{{ item.blogMotto }}
      </div>
      <div class="personal-card">
        <div class="author">{{ item.author }}</div>
        <div>|</div>
        <div class="position">{{ tabObject[item.tag] }}</Div>

        <div class="eye-icon">
          <svg t="1706322244227" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="2404" width="200" height="200">
            <path
              d="M512 188.2c-266.7 0-482.9 145-482.9 323.8S245.3 835.8 512 835.8s482.9-145 482.9-323.8S778.7 188.2 512 188.2z m0 545.4c-122.4 0-221.6-99.2-221.6-221.6 0-122.4 99.2-221.6 221.6-221.6S733.6 389.6 733.6 512c0 122.4-99.2 221.6-221.6 221.6z"
              p-id="2405" fill="#8a8a8a"></path>
            <path d="M512 512m-136.3 0a136.3 136.3 0 1 0 272.6 0 136.3 136.3 0 1 0-272.6 0Z" p-id="2406" fill="#8a8a8a">
            </path>
          </svg>
        </div>
        <div class="watchedNum">{{ item.watchedNum }}</div>
        <div class="eye-icon">
          <svg t="1706322300939" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="4488" width="200" height="200">
            <path
              d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819"
              fill="#8a8a8a" p-id="4489"></path>
          </svg>
        </div>
        <div class="likeNum">{{ item.likeNum }}</div>
        <div class="eye-icon">
          <svg t="1706322351964" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="6585" width="200" height="200">
            <path
              d="M781.3 188.6H269.7c-59.6 0-108 51.1-108 113.9v312.8c0 64.8 50.3 119.5 109.9 119.5h120.2c30.4 32.8 109.8 117 109.8 117 6.2 6.7 14.9 10.5 23.9 10.5s17.6-3.8 24.6-11.3c0.6-0.7 62.1-72 105.6-116.2h123.7c59.6 0 110-54.7 110-119.5V302.6c-0.1-62.9-48.6-114-108.1-114z m-431.4 321c-25.2 0-45.6-20.4-45.6-45.6s20.4-45.6 45.6-45.6 45.6 20.4 45.6 45.6-20.4 45.6-45.6 45.6z m179.4 0c-25.2 0-45.6-20.4-45.6-45.6s20.4-45.6 45.6-45.6 45.6 20.4 45.6 45.6-20.4 45.6-45.6 45.6z m179.4 0c-25.2 0-45.6-20.4-45.6-45.6s20.4-45.6 45.6-45.6 45.6 20.4 45.6 45.6-20.4 45.6-45.6 45.6z"
              fill="#8a8a8a" p-id="6586"></path>
          </svg>
        </div>
        <div class="commentNum">{{ item.commentNum }}</div>
      </div>
    </a-card>

    <a-pagination @change="changePageSize" @showSizeChange="showSizeChange" v-model:pageSize="pageSize"
      v-model:current="current" v-model:total="total" show-less-items />
  </div>
</template>

<script setup>
import { defineEmits, ref, defineProps, watch, reactive } from 'vue'
import { getList, addWatched } from '../api/blog'
let props = defineProps({
  tabValue: {
    type: String,
    default: ''
  }
})

watch(() => props.tabValue, (newVal) => {
  List(newVal)
})

let pageNum = ref(1)
let pageSize = ref(5)

let current = ref(1);
let total = ref(0)
let blogList = ref([])

let tabObject = reactive({
  "2": "前端",
  "1": "后端",
  "0": "ios",
  "3": "大数据",
  "4": "综合"
})

let emits = defineEmits(['updateBlogShow', 'deliverBlogItem']);
// 博客 markdown 展示
const showBlogMark = (value) => {
  emits('updateBlogShow', true)
  emits('deliverBlogItem', value)

  addWatched(value).then((res) => {
    if (res.data.code === 0) {
      value.watchedNum++
    }
  })
}

let changePageSize = (page1, pageSize1) => {
  pageNum.value = Number.parseInt(page1);

  pageSize.value = Number.parseInt(pageSize1);

  List()
}

const showSizeChange = (current, size) => {
  pageNum.value = Number(current);
  pageSize.value = Number(size);
  List()
}

// 获取博客
const List = (value = undefined) => {
  getList({
    id: 1,
    pageNum: pageNum.value,
    pageSize: pageSize.value,
    tagValue: value
  }).then((res) => {
    if (res.data.code === 0) {
      blogList.value = res.data.data
      total.value = res.data.total
    } else {
      return
    }
  })
}


List()


</script>

<style lang="scss" scoped>
.card-contaienr {
  width: 100%;
  height: 100%;
  padding-top: 100px;

  .ant-card {
    width: 800px !important;
    height: 130px;
    margin-top: 20px;
    cursor: pointer;

    ::v-deep .ant-card-body {
      padding: 19px !important;
    }

    .title {
      font-size: 18px;
      font-weight: 700;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .motto {
      margin-top: 10px;
      font-size: 12px;
      color: #666;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .personal-card {
      margin-top: 20px;
      display: flex;
      align-items: center;

      .eye-icon {
        width: 20px;
        height: 20px;
        margin-left: 35px;

        svg {
          width: 20px;
          height: 20px;
        }
      }

      .watchedNum {
        margin-left: 5px;
      }

      .likeNum {
        margin-left: 5px;
      }

      .commentNum {
        margin-left: 5px;
      }

      .author {
        width: 50px;
      }

      .position {
        width: 50px;
        margin-left: 10px;
      }
    }
  }

  .ant-card:nth-child(1) {
    margin-top: 0;
  }

  .ant-pagination {
    margin-top: 30px;
  }

}
</style>