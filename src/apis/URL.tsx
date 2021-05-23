const baseURL:string = 'IS_DEVELOPMETN' ? "http://127.0.0.1:3000" : "http://data.photoqiu.com"
const prefixUsers:string = 'usercenter'

export const login:string = `${baseURL}${prefixUsers}/login` // 登陆
export const loginByTicket:string = `${baseURL}/${prefixUsers}/loginByTicket` // 通过ticket登陆
export const loginByKey:string = `${baseURL}/service/pagerservice/checkKey` // 通过key进入项目
export const logout:string = `${baseURL}/${prefixUsers}/logout` // 登出