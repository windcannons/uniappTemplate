import {
    request
} from "../request";

export let getUserIntegral  = (data) => request('/api/appletUser/getUserIntegral', 'GET', data) //用户获取积分
