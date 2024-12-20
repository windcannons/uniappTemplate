import {
    request
} from "../request";

export let shopGoodsPags  = (data) => request('/api/shopGoods/page', 'GET', data)
