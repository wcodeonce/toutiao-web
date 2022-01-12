<template>
<div class="home-container">
    <!-- 标题 -->
    <van-nav-bar
      title="黑马头条"
      fixed
    />

    <!-- 下拉刷新 -->
    <van-pull-refresh
      v-model="isLoading"
      :disabled="finished"
      @refresh="onRefresh"
    >
      <!-- 列表 -->
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <!-- 导入、注册、使用 ArticleInfo 组件 -->
        <!-- 在使用组件的时候，如果某个组件名是"小驼峰"形式，则绑定属性的时候建议改写成"连字符"格式 -->
        <ArtItem
          v-for="item in artlist"
          :key="item.id"
          :title="item.title"
          :author="item.aut_name"
          :cmt-count="item.comm_count"
          :time="item.pubdate"
          :cover="item.cover"
        ></ArtItem>
      </van-list>
    </van-pull-refresh>
</div>
</template>

<script>
// 导入 request.js
// import request from '@/utils/request.js'
// 按需导入 API 接口
import { getArticleListAPI } from '@/api/articleAPI.js'
import ArtItem from '@/components/Article/ArtItem.vue'

export default {
  name: 'Home',
  data() {
    return {
      // 页码值
      page: 1,
      // 每页显示数据数量
      limit: 10,
      // 文章的数组
      artlist: [],
      // 是否正在加载下一页数据,如果 loading 为 true ，则不会反复触发 load 事件
      // 当下一页数据请求回来后，一定要记得吧 loading 从 true 改为 false
      loading: true,
      // 所有数据是否加载完毕了,如果没有更多数据了要把 finished 改成 true
      finished: false,
      // 是否正在下拉刷新
      isLoading: false
    }
  },
  created() {
    this.initArticleList()
  },
  methods: {
    // 封装获取文章列表数据的方法
    async initArticleList(isRefresh) {
      // 发起 GET 请求，获取文章的列表数据
      const { data: res } = await getArticleListAPI(this.page, this.limit)
      // 为列表填充数据
      if (isRefresh) {
        // 下拉刷新
      // this.artlist = [新数据在前，旧数据在后]
        this.artlist = [...res, ...this.artlist]
        // 恢复下拉刷新状态
        this.isLoading = false
      } else {
        // 上拉加载
      // this.artlist = [旧数据在前，新数据在后]
        this.artlist = [...this.artlist, ...res]
      }
      // 当第一次数据请求回来后 加载状态改为 false
      this.loading = false
      // 怎么没有下一页数据了，自己吧 finished 改为 true 表示数据加载完了
      if (res.length === 0) {
        this.finished = true
      }
    },
    // 只要 onLoad 被调用，就请求下一页数据
    onLoad() {
      // 1、页码值 +1
      this.page++
      // 2、重新请求接口获取数据
      this.initArticleList()
    },
    // 下拉刷新处理
    onRefresh() {
      // 1、让页码值 +1
      this.page++
      // 2、重新请求接口获取数据
      this.initArticleList(true)
    }
  },
  components: {
    ArtItem
  }
}
</script>

<style lang="less" scoped>
.home-container {
    padding: 44px 0 50px 0;
}
</style>
