import {
    request
} from "../request";

export let listCourseType  = (data) => request('/api/CourseApi/listCourseType', 'GET', data) //查询分类列表
