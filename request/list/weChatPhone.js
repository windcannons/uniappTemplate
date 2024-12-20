import {
    request
} from "../request";

export let weChatPhone  = (data) => request('/api/appletUser/weChatPhone', 'POST', data)//根据code获取手机号登录
