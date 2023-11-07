<template>
  <div class="header-container">
    <div class="logo-container">
      <img class="logo-pic" src="@/assets/manage-system.png" alt="" />
      <div class="logo-text-container">
        <span class="logo-text">后台管理系统</span>
      </div>
    </div>
    <div class="action">
      <el-tooltip effect="light" :content="content" placement="bottom">
        <Rank v-if="isFullScreen === false" class="full-screen-btn" @click="handleClickFullScreen" />
        <FullScreen v-if="isFullScreen === true" class="full-screen-btn" @click="handleClickFullScreen" />
      </el-tooltip>
      <el-button class="logout-btn" @click="handleLogout">退出</el-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { Rank, FullScreen } from '@element-plus/icons-vue';
import { ref, computed } from 'vue';

const router = useRouter();

const isFullScreen = ref(false);

const content = computed(() => {
  return isFullScreen.value ? '点击全屏缩小' : '点击全屏放大';
});

const handleClickFullScreen = () => {
  if (document.fullscreenElement) {
    isFullScreen.value = false;
    // 如果当前已经是全屏模式,就退出全屏
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    isFullScreen.value = true;
    // 否则进入全屏模式
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  }
};

const handleLogout = () => {
  window.sessionStorage.clear();
  router.push('/login');
};
</script>

<style lang="scss" scoped>
.header-container {
  height: 100%;
  background-color: #313743;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo-container {
    display: flex;
    flex-direction: row;
    .logo-pic {
      width: 30px;
      height: 30px;
      padding: 10px;
    }
    .logo-text-container {
      display: flex;
      align-items: center;

      span {
        margin-left: 15px;
      }
      .logo-text {
        font-size: 20px;
        font-weight: 800;
        color: white;
      }
    }
  }

  .action {
    width: 15 0px;
    display: flex;
    flex-direction: row;

    .full-screen-btn {
      width: 35px;
      height: 35px;
      color: white;
      cursor: pointer;
    }
  }

  .logout-btn {
    margin-left: 15px;
    margin-right: 15px;
  }
}
</style>
