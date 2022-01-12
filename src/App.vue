<template>
  <div class="app-container">
    <!-- 路由占位符 -->
    <router-view></router-view>

    <!-- Tabbar区域 -->
    <van-tabbar route>
      <!-- 首页 -->
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <!-- 用户 -->
      <van-tabbar-item icon="user-o" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>

</style>
