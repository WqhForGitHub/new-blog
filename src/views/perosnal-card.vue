<template>
  <div class="personal-container">
    <a-card>
      <div class="avatar">
        <img :src=loginInfo.avatarURL />
      </div>

      <div class="name">{{ loginInfo.userName }}</div>

      <div class="info-container">
        <div class="publishNum">
          <div>发表</div>
          <div>{{ loginInfo.count }}</div>
        </div>
        <div class="likeNum">
          <div>点赞</div>
          <div>{{ loginInfo.likeNum }}</div>
        </div>
        <div class="commentNum">
          <div>评论</div>
          <div>{{ loginInfo.commentNum }}</div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
let store = useStore();
let loginInfo = store.state.userInfo
console.log('loginInfo: ', loginInfo);
</script>

<style lang="scss" scoped>
.personal-container {
  width: 100%;
  height: 100px;
  float: left;

  .ant-card {
    width: 350px;
    height: 240px;
    margin-top: 100px;

    .avatar {
      width: 80px;
      height: 80px;
      margin: 0 auto;
      border-radius: 5px;

      img {
        width: 80px;
        height: 80px;
        border-radius: 5px;
      }
    }

    .name {
      margin-top: 10px;
      text-align: center;
      font-size: 16px;
    }

    .info-container {
      display: flex;
    }

    .info-container {
      display: flex;
      margin-top: 20px;
      font-size: 16px;

      .publishNum {
        width: 33.3%;
        text-align: center;
        border-right: 1px solid #f0f0f0;
      }

      .likeNum {
        width: 33.3%;
        text-align: center;
        border-right: 1px solid #f0f0f0;
      }

      .commentNum {
        width: 33.3%;
        text-align: center;
      }
    }
  }
}
</style>