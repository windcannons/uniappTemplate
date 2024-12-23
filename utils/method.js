// utils/method.js
//分享页面到好友&朋友圈
export function showShareMenu() {
    wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
    });
}

//跳转页面
//type 1  跳转tabbar  ; type为空  跳转其他页面
export function goPage(url,type) {
    if (type){
        uni.switchTab({
            url
        });
    }else{
        uni.navigateTo({
            url
        })
    }
}

//返回页面
export function backPage(url) {
    if (getCurrentPages().length > 1) {
        uni.navigateBack()
    } else {
        goHome()

    }
}

//返回首页
export function goHome() {
    uni.reLaunch({
        url: '/pages/index/index'
    })
}


// 接收字符串，根据逗号分隔返回数组
export function splitStringByComma(str) {
    if (str) {
        return str.split(',').map(item => item.trim());
    }
}
// 接收数组，返回逗号分隔字符串
export function joinArrayWithComma(arr) {
    if (Array.isArray(arr)) {
        return arr.join(',').map(item => item.toString().trim());
    }
    return '';
}


//请求列表并记录参数   url(请求路径)
export function requestList(request, getInfo, callback) {
    // 下拉加载 且当前加载条数为总条数
    if (Number(getInfo.allSize) && (getInfo.current-1) * getInfo.size >= getInfo.allSize) {
        callback([]);
        return;
    }
    let arr = [];
    getInfo.isLoading = true;
    request(getInfo).then(res => {
        if (res.success) {
            arr = res.data.records;
            getInfo.current++;
            getInfo.allSize = res.data.total;
            getInfo.isLoading = false;
            callback(arr); // 使用回调函数返回结果
        } else {
            getInfo.isLoading = false;
            callback([]);
        }
    }).catch(err => {
        getInfo.isLoading = false;
        callback([]);
    });
}


//手机号加密 传入手机号，返回中间四位加密号码
export function maskPhoneNumber(phone) {
    // 判断手机号是否合法（11位数字）
    if (!/^\d{11}$/.test(phone)) {
        return null;
    }
    // 将中间四位替换为 *
    return phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
}
