import {
    request
} from "../request";

export let publishBarrage  = (data) => request('/api/CourseApi/publishBarrage', 'POST', data) //发布弹幕
