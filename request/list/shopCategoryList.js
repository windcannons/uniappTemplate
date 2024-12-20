import {
    request
} from "../request";

export let shopCategoryList  = (data) => request('/api/shopCategory/list', 'GET', data)//查询商品分类
