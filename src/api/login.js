import { get, post } from './index'

// 获取publicKey
export const getPublicKey = () => {
  return get('/getPublicKey')
}

// 登录
export const loginIn = (data) => {
  return post('/login', data)
}

//   // 注册
//   export const register = (params: typeResigter) => {
//     return HttpClient.post<typeResigter>("/addUser", params );
//   };

//   // 退出登录
//   export const loginOut = (params: Out) => {
//     return HttpClient.post<Out>("/loginOut", params);
//   };
