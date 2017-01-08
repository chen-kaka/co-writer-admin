/**
 * Created by kakachan on 16/12/30.
 */

import { request,config } from '../utils'

export async function query( params ) {
  return request( config.backend + '/admin/repository/repository/list', {
    method : 'get',
    data: params
  })
}

export async function del( params ) {
  alert("delete");
  return {};
}
