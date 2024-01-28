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
/*
// 添加博客
export const AddBlog = (params: addBlogModel) => {
  return HttpClient.post<addBlogModel>("/blog", params);
};

// 调用点赞接口
export const addWatched = (params: addWatchModel) => {
 return HttpClient.post<addWatchModel>("/addWatchedNum", params);
}; 

// 调用点赞接口
export const addLikeNum = (params: addWatchModel) => {
  return HttpClient.post<addWatchModel>("/addLikeNum", params);
};

// 发表评论接口
export const publistComments = (params: ListModel) => {
  return HttpClient.post<ListModel>("/publishComments", params);
}

// 发表子评论接口
export const publistSubComments = (params: ListModel) => {
  return HttpClient.post<ListModel>("/publishSubComments", params);
}
*/
