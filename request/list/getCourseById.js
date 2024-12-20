import {
    request
} from "../request";

export let getCourseById  = (data) => request('/api/CourseApi/getCourseById', 'GET', data) //查询视频详情
