import { request,config,request_fetch } from '../utils'
import qs from 'qs'

export async function login(params) {
  return request_fetch(config.backend + '/admin/user/login/login', {
    method: 'post',
    body: qs.stringify(params),
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
    }
  });
}

export async function logout(params) {
  return request_fetch(config.backend + '/admin/user/login/logout', {
    method: 'post',
    body: qs.stringify(params),
    headers: {
      'Content-Type':'application/x-www-form-urlencoded',
    }
  });
}

export async function userInfo(params) {
  return request_fetch(config.backend + '/admin/user/login/userInfo?' + qs.stringify(params));
}
