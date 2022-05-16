import axios from "axios";
// 单独引用message
import { Message } from 'element-ui';
import router from "@/router";

// 响应拦截器--deyi is cool
axios.interceptors.response.use(success=>{
    // 业务逻辑错误
    if (success.status && success.status == 200){
        // 所有的错误
        if (success.data.code == 500 || success.data.code == 401 || success.data.code == 403){
            Message.error({message:success.data.message});
            return;
        }
        // 成功
        if (success.data.message){
            Message.success(success.data.message);
        }
    }
    // 返回数据对象
    return success.data;
},error => {
    if (error.response.code == 504 || error.response.code == 404){
        Message.error({message:"服务器异常-服务器被吃了"});
    }else if (error.response.code == 403){
        Message.error({message:"权限不足，请联系管理员"});
    }else if (error.response.code == 401){
        Message.error({message:"尚未登录，请登录"});
        router.replace('/')
    }else {
        if (error.response.data.message){
            Message.error({message:error.response.code.message});
        }else {
            Message.error({message:"未知错误"});
        }
    }
    return;
});

let base = '';
// 传送json格式的post请求
export const postRequest = (url, params) => {
    return axios({
        method:'post',
        url:`${base}${url}`,
        data:params
    })

}
















