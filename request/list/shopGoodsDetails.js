import {
    request
} from "../request";

export let shopGoodsDetails  = (data) => request(`/api/shopGoods/details/${data}`, 'GET', ) //商品详情查询
