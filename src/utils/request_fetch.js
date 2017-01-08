import fetch from 'dva/fetch';
import { message } from 'antd';

 let parseJSON=(response)=>{
   message.destroy();
   return response.json();
 }

 let checkStatus=(response)=>{
   if (response.status >= 200 && response.status < 300) {
    return response;
   }
   const error = new Error(response.statusText);
   error.response = response;
   throw error;
 }

let handleError=(err)=>{
   message.destroy();
   message.error(err.msg||'请求出错，请稍后重试',4);
}

/**
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

export default (url, options)=>{
  message.loading('loading...', 1000);
  return fetch(url, {...options,credentials:'same-origin'})
    .then(parseJSON)
    .catch((err)=>handleError(err))
}
