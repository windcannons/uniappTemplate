import {
    request
} from "../request";

export let queryBarrage  = (data) => request('/api/CourseApi/queryBarrage', 'GET', data) //查询弹幕
