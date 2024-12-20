import {
    request
} from "../request";

export let addPosition  = (data) => request('/api/common/getGlobalConfiguration', 'GET', data)
