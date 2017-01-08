const Ajax = require("robe-ajax")

import fetch from 'dva/fetch';
import { message } from 'antd';

let parseJSON=(response)=>{
  message.destroy();
  return response.json();
}

let handleError=(err)=>{
  message.destroy();
  message.error(err.msg||'请求出错，请稍后重试',4);
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return Ajax.ajax({
    url: url,
    method: options.method || 'get',
    data: {},//options.data || {},
    processData: options.method == 'get'
      ? true
      : false,
    dataType: 'json'
  }).done((data) => {
    return data
  })

  // let optionParam = {
  //   method: options.method || 'get',
  //   mode: "no-cors",
  // };
  //
  // if (optionParam.method != 'get' && optionParam.method != 'GET') {
  //   if (options.headers) {
  //     optionParam.headers = options.headers;
  //   } else {
  //     optionParam.headers = {
  //       'Content-Type': 'application/json',
  //     };
  //   }
  //   if (options.data) {
  //     if (options.data instanceof String) {
  //       optionParam.body = options.data;
  //     } else {
  //       optionParam.body = JSON.stringify(options.data);
  //     }
  //   }
  // }
  // message.loading('loading...', 1000);
  // return fetch(url, optionParam)//'same-origin'})
  //   .then(parseJSON)
  //   .catch((err)=>handleError(err))
}
