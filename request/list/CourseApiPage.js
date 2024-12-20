import {
    request
} from "../request";

export let CourseApiPage  = (data) => request('/api/CourseApi/page', 'GET', data) //分页查询视频
