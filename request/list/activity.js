import {
    request
} from "../request";

export let activity  = (data) => request('/api/tiku', 'GET', data)//活动-查询活动相关信息(注册须知等)
