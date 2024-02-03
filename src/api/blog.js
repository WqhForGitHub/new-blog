import { get, post } from './index'
/*
 * 获取博客
 */
export function getList(params) {
  return get('/blog', params)
}

/*
 * 获取标签
 */
export function getTags(params) {
  return get('/tag', params)
}

/*
 * 调用点赞接口
 */
export const addWatched = (data) => {
  return post('/addWatchedNum', data)
}

/*
 * 调用点赞接口
 */
export const addLikeNum = (data) => {
  return post('/addLikeNum', data)
}

/*
 * 添加博客接口
 */
export const AddBlog = (data) => {
  return post(`/blog`, data)
}
