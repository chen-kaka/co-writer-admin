/**
 * Created by kakachan on 16/12/30.
 */

import { query } from '../services/repo_node';
import { parse } from 'qs';

export default {
  namespace: 'repo_node',

  state:{  //model的状态数据
    list: [],
    loading: false,
    currentItem: {},
    modalVisible: false,
    modalType: 'create',
    pagination:{
      showSizeChanger: true,
      showQuickJumper: true,
      showTotal: total => `共 ${total} 条`,
      current:1,
      total:null,
      size:'default'
    }
  },

  subscriptions:{ //订阅
    setup( { dispatch, history }){
      history.listen( location => {
        if(location.pathname === '/repos/repo_node'){
          dispatch({
            type: 'query',
            payload: location.query,
          }
          )
        }
      })
    }
  },

  effects: { //跟后端数据交互
    *query({ payload },{ call, put }){
      yield put({
        type: 'showLoading'
      })
      const data = yield call(query, parse( payload ))
      if(data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list : data.data,
            pagination: {
              total: data.page.total,
              current: data.page.current
            }
          }
        })
      }
    }
  },

  reducers:{ //分发器
    showLoading(state){
      return {
        ...state,
        loading: true
      }
    },
    querySuccess( state, action) {
      return {
        ...state,
        ...action.payload, loading: false
      }
    }
  }
}
