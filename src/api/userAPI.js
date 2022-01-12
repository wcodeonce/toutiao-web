// 用户相关的 API 接口
import request from '@/utils/request.js'

export const getUserInfoAPI = function() {
  return request.get('/user')
}
