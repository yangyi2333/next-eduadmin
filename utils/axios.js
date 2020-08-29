import axios from 'axios'
import React from 'react';
import {message,Modal} from 'antd'
// import {reLoginFlag,reLoginStatu} from './common'



const { confirm } = Modal;
const service = axios.create({
  baseURL: 'http://60.205.253.148:9030/',
  timeout: 20000,
  headers: {
    common: {
      'Content-Type': 'application/json;charset=UTF-8',
    }
  }
})

// axios.defaults.timeout = 2000;
// axios.defaults.baseURL = process.env.BASE_URL;
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
// axios.defaults.headers.common['Authorization'] = 'Basic dHRhOnR0YXNlY3JldA==';
// http request 拦截器
service.interceptors.request.use(
  config => {
      // if(config.url!=='eduadmin/login'){
          if (!localStorage.getItem('eduUserInfo') || localStorage.getItem('eduUserInfo') == 'undefine'){
              // if(!reLoginFlag){
              //     React.$history.push('/login');
              //     message.error('请先登录!')
              //     // reLoginStatu()
              // }
          }else{
              config.headers['accessToken'] = JSON.parse(localStorage.getItem('eduUserInfo')).accessToken;
          }
      // }
      if (config.params) {
          config.params['clientId'] = 'adminweb:1234';
      } else {
          config.params = {
              clientId: 'adminweb:1234',
          }
      }
      if (config.data) {
          config.data['clientId'] = 'adminweb:1234';
      }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response && (error.response.status == '401' || error.response.status == '601')) {
      // if (localStorage.getItem('eduadmin_info') == null || localStorage.getItem('eduadmin_info').accessToken == null) {
      //   console.log(reLoginFlag,reLoginStatu)
        // if(!reLoginFlag){
        //     React.$history.push('/login');
        //     message.error('请先登录!')
        //     reLoginStatu()
        // }
        // }
      // } else {
      //   refreshToken()
      // }
    return Promise.reject(error) // 返回接口返回的错误信息
  }
  })
/**
 * 封装request方法
 * @param url
 * @param params
 * @param method
 * @param baseUrl
 * @param config
 * @returns {Promise}
 */
export function request (method = 'get', url, params = {}, baseUrl = '', config ={}){
    const data_type = method === 'get' ? 'params' : 'data';
  return new Promise((resolve, reject) => {
    service({
      url: (baseUrl||'eduapi/') + url,
      method: method,
      [data_type]:params,
      ...config
    }).then((res) => {
      if(res && res.status === 200){
        if (res.data.code === 0) {
            resolve(res.data)
        }else{
            // if(res.data){
            //     resolve(res.data)
            // }
            message.warning(res.data.msg||'Something error!');
            reject(res)
        }
      }

    }).catch((error) => {
      reject(error)
      console.log(error)
    })
  })
}
/**
 * 封装并发请求方法
 * @requsetArray url
 * @callback params
 */
export function multiple (requsetArray, callback) {
    //两个请求执行完成后，才执行axios.spread()中的函数，且axios.spread()回调函数的的返回值中的请求结果的顺序和请求的顺序一致
    axios.all(requsetArray).then(axios.spread(callback));
}
/**
 * 封装批量删除
 * @param url
 * @param ids
 * @param e
 */
export function batchDelete(url,ids,e,callback) {
    if(ids.length == 0){
        message.warning('请选择要删除的项');
        return
    }
    Modal.confirm({ title: `确认删除选中的 ${ids.length} 条数据吗？`, content: '删除后不可恢复，请谨慎操作！',okText: '确认', cancelText: '取消',
        onOk() {
            request('delete',`${url}?ids=${ids.join(',')}`).then(()=>{
                e.dataInit()
                e.setState({selectedRowKeys:null,selectedRows:[]})
                message.success('删除成功');
                if(callback){
                    callback()
                }
            })
        },
    });
}
/**
 * 封装文件导出方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function exportWay (method = 'get', url, params = {}, baseUrl = '', config ={}){
    const data_type = method === 'get' ? 'params' : 'data';
    return new Promise((resolve, reject) => {
        service({
            url: (baseUrl||'eduadmin/') + url,
            method: method,
            [data_type]:params,
            ...config
        }).then(res=>{
            console.log(res)
            let file = new FileReader();
            file.onload = function(){
                try{
                    let resData = JSON.parse(this.result);
                    if(resData && resData['code'] !== 0){
                        message.warning(resData['msg']||'Something error!');
                    }
                }catch (e) {
                    const blob = new Blob([res['data']], {type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'})
                    const fileName = res['headers']['content-disposition'].split('filename=')[1];
                    if ('download' in document.createElement('a')) { // 非IE下载
                        const elink = document.createElement('a')
                        elink.download = fileName
                        elink.style.display = 'none'
                        elink.href = URL.createObjectURL(blob)
                        document.body.appendChild(elink)
                        elink.click()
                        URL.revokeObjectURL(elink.href) // 释放URL 对象
                        document.body.removeChild(elink)
                    } else { // IE10+下载
                        navigator.msSaveBlob(blob,fileName)
                    }
                }
            }
            file.readAsText(res.data)
            // if(res['code'] === 0){
            // }else{
            //     message.warning(res['msg']||'Something error!');
            // }
        }).catch((error) => {
            reject(error)
            console.log(error)
            // 数据请求成功，1s后关闭动画；
            // setTimeout(() => {
            //   store.commit("LOADING", false);
            // }, 200)
            // // ;
        })
    })
}
/**
 * 封装用户操作请求，包括登录、验证码、修改密码等不需要token的操作
 * @param url
 * @param data
 * @returns {Promise}
 */

export function requestAuth (method, url, params = {}){
  return new Promise((resolve, reject) => {
      params.clientId = 'adminweb:123';
    axios({
      baseURL:config.BASE_URL + 'auth/',
      url: url,
      method: method,
      params: params,
      responseType: 'application/json'
      // headers: {
      //     Authorization: 'Basic dHRhOnR0YXNlY3JldA==',
      // }
    }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        resolve(res.data)
      } else {
        alert(res.data.msg)
      }
    }).catch((err) => {
      reject(err)
    })
  })
}
/**
 * 刷新token方法
 */
function refreshToken () {
  let json = JSON.parse(localStorage.getItem('eduadmin_info'))
  requestAuth('post', '/refreshToken', {refreshToken: json.refreshToken}).then(res => {
    if (res.code === 0) {
      json.refreshToken = res.data.refreshToken
      json.accessToken = res.data.accessToken
      localStorage.setItem('eduadmin_info', JSON.stringify(json))
      React.$history.go(0)
    }
  }).catch(err=>{
      if(err.response.status===401&&err.response.data.code===21){
         React.$history.push('/login');
        message.error('请重新登录!')
      }
  })
}
