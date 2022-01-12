// 文章相关的模块都封装到这个模块种
import request from '@/utils/request.js'

// 向外按需导出一个 API 函数
export const getArticleListAPI = function(_page, _limit) {
  return request.get('/articles', {
    // 请求参数
    params: {
      _page,
      _limit
    }
  })
}
