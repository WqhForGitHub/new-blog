<template>
  <div class="icon-group">
    <div class="svg-icon">
      <svg @click.once="clickLike()" t="1706328109640" class="icon" viewBox="0 0 1024 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="4330" width="200" height="200">
        <path
          d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819"
          fill="#8a8a8a" p-id="4331"></path>
      </svg>
      <div class="like-nums">{{ obj.likeNum }}</div>
      <svg @click="backTo()" t="1706327906265" class="icon1" viewBox="0 0 1307 1024" version="1.1"
        xmlns="http://www.w3.org/2000/svg" p-id="2369" width="200" height="200">
        <path
          d="M268.70922 566.468085h929.588652c36.312057 0 72.624113-29.049645 72.624114-72.624113 0-36.312057-29.049645-72.624113-72.624114-72.624114H305.021277l297.758865-297.758865c29.049645-29.049645 29.049645-72.624113 0-101.673759-29.049645-29.049645-72.624113-29.049645-101.673759 0L72.624113 450.269504c-14.524823 14.524823-21.787234 36.312057-21.787234 58.09929 0 21.787234 0 43.574468 21.787234 58.099291l428.48227 428.48227c29.049645 29.049645 72.624113 29.049645 101.673759 0 29.049645-29.049645 29.049645-72.624113 0-101.673759l-334.070922-326.808511z"
          fill="#8a8a8a" p-id="2370"></path>
      </svg>
    </div>
  </div>

  <a-card class="blogMark">
    <h1 style="text-align: center;">{{ obj.blogTitle }}</h1>
    <div class="motto">
      {{ obj.blogMotto }}
    </div>

    <div class="content" v-highlight v-html="aff">
    </div>
  </a-card>
</template>

<script setup>
import { defineEmits, defineProps, ref } from 'vue';
import { addLikeNum } from '../api/blog'
import { marked } from "marked";

let rendererMD = new marked.Renderer();
marked.setOptions({
  async: false,
  silent: true,
  renderer: rendererMD,
  gfm: true,
  breaks: true,
  pedantic: false,
});//基本设置

let emits = defineEmits('backToBlog')

let props = defineProps({
  blogItem1: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

let aff = ref('');

aff.value = marked.parse(props.blogItem1.blogMarkDownContent) // markdown 转 html

let obj = props.blogItem1
// 调用点赞接口
const clickLike = () => {
  addLikeNum(props.blogItem1).then(res => {
    if (res.data.code === 0) {
      // eslint-disable-next-line vue/no-mutating-props
      obj.likeNum = obj.likeNum + 1
    }
  })
}

let backTo = () => {
  emits('backToBlog', false)
}
</script>

<style lang="scss" scoped>
.blogMark {
  width: 800px;
  min-height: 100vh;
  height: auto;
  margin-top: 100px;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;

  h2 {
    text-align: center;
    margin-top: 20px;
  }

  .motto {
    width: 100%;
    min-height: 10px;
    height: auto;
    margin-top: 30px;
    font-size: 13px;
    color: #666;
  }

  .content {
    margin-top: 20px;
    min-height: 10px;
    height: auto;
    word-break: break-all;
    font-size: 16px;
  }
}

.icon-group {
  height: 100px;
  margin-left: -80px;
  position: absolute;
  margin-top: 390px;

  svg {
    display: block;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  .like-nums {
    margin-top: 10px;
    text-align: center;
  }

  .icon1 {
    margin-top: 20px;
  }
}
</style>