/*
* 顶层路由 '/' 的model
* 获取用户信息，并逐级传递
* 用户信息用于导航菜单的权限控制，以及操作权限控制
*/
import { parse } from 'qs';

export default {
  namespace: 'roots',
  state: { 
    list:null,
  },

  reducers: { 
    querySuccess(state, action) {
      return { ...state, ...action.payload, }; 
    },
  },

};
