import { request,config } from '../utils'
import qs from 'qs'

export async function myCity(params) {
  return {};
  return request('http://www.zuimeitianqi.com/zuimei/myCity', {
    method: 'get',
    cross:true,
    data:params,
  })
}

export async function queryWeather(params) {
  // return {};
  return request('http://www.zuimeitianqi.com/zuimei/queryWeather', {
    method: 'get',
    cross:true,
    data:params,
  })
}

export async function query(params) {
  // return {};
  return request('/api/dashboard', {
    method: 'get',
    data:params,
  })
}
