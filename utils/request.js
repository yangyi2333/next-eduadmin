import fetch from "isomorphic-unfetch";
import { message } from 'antd';


const BaseUrl = 'http://60.205.253.148:9030/';
export async function authRequest(method,url,params,data){
    if(params){
        let arr = [];
        for (let key in params){
            arr.push(`${key}=${params[key]}`);
        }
        url += `?${arr.join('&')}`;
    }
    return await baseMethod(
        fetch(`${BaseUrl}auth/${url}`,{
            headers:{
                'Content-Type': 'application/json'
            },
            method: method,
            body: JSON.stringify(data),
        })
    )
}

export async function request(method,url,params,data={}){
    const accessToken = JSON.parse(localStorage.getItem('eduUserInfo')).accessToken || '';
    if(params){
        let arr = [];
        for (let key in params){
            arr.push(`${key}=${params[key]}`);
        }
        url += `?${arr.join('&')}`;
    }
    return await baseMethod(
        fetch(`${BaseUrl}eduapi/${url}`,{
            headers:{
                accessToken:accessToken,
                'Content-Type': 'application/json'
            },
            method: method,
            body: data,
        })
    )
}
async function baseMethod(fn){
    if(fn){
        try {
            const res = await fn;
            const data = await res.json();
            if(data.code === 0){
                return data.data;
            }else{
                message.warning(data.msg)
            }
        }catch (e) {
            return null
        }
    }
}
