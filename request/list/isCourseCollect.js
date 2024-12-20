import {
    request
} from "../request";

export let isCourseCollect  = (data) => request('/api/appletUser/isCourseCollect', 'GET', data) //收藏-取消收藏教程
