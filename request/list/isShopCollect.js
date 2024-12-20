import {
    request
} from "../request";

export let isShopCollect  = (data) => request('/api/appletUser/isShopCollect', 'GET', data)
