export const baseUrl = 'http://192.168.5.85:8061'  //请求地址
export const handlerUpload = function (path) {
    uni.showLoading({
        title: '正在上传...'
    })
    return new Promise((resolve, reject) => {
        uni.uploadFile({
            url: baseUrl + '/api/oss/ali/single/upload',
            filePath: path,
            name: 'file',
            success(res) {
                let { code, data } = JSON.parse(res.data);
                console.log(res)
                if (code === 1) {
                    resolve(data)
                } else {
                    reject('上传失败')
                }
            },
            complete() {
                uni.hideLoading()
            }
        })
    })
}

export function request(url, method, data) {
    return new Promise((resolve, reject) => {
        let token = uni.getStorageSync('token') || '';

        uni.request({
            url: baseUrl + url,
            method,
            data,
            header: {
                "X-TOKEN": token,
            },
            success: (res) => {
                if (res.statusCode == 200) {
                    if (res.data.code == 401) {
                        // 没有权限访问接口：跳转到登录页面
                        // uni.navigateTo({ url: '' });

                        navigateToLoginAndCacheParams()
                        reject(res)
                    } else if (res.data.code == 402) {

                        // 没有权限访问接口：跳转到登录页面

                        navigateToLoginAndCacheParams()
                        reject(res)
                    } else if (res.data.code == 406) {
                        // 没有权限访问接口：跳转到登录页面
                        //uni.navigateTo({
                        //    url: `/pages/my/login`
                        //})
                        navigateToLoginAndCacheParams()
                        reject(res)
                    }
                        //    let phoneLogin = uni.getStorageSync('phoneLogin')
                        //    if (!phoneLogin) {
                        //    	uni.navigateTo({
                        //    		url: '/pages/login/index'
                        //    	})
                    //}
                    else if (res.data.code != 0) {
                        resolve(res.data)
                    } else {
                        uni.showToast({
                            title: res.data.message,
                            icon: 'none',
                            duration: 3000
                        })
                    }

                } else if (res.statusCode == 400) {
                    uni.showToast({
                        title: '服务器发生未知错误',
                        icon: 'none',
                        duration: 3000
                    })
                    reject(res)
                } else if (res.statusCode == 500) {
                    uni.showToast({
                        title: '开发者某个字段或参数发生错误',
                        icon: 'none',
                        duration: 3000
                    })
                    reject(res)
                } else if (res.statusCode == 202) {
                    uni.showToast({
                        title: 'res.data.msg',
                        icon: 'none',
                        duration: 3000
                    })
                    reject(res)
                } else {
                    uni.showToast({
                        title: '服务器发生未知错误',
                        icon: 'none',
                        duration: 3000
                    })
                    reject(res)
                }
            },
            fail: (err) => {
                uni.showToast({
                    title: '没有成功获得数据',
                    icon: 'none',
                    duration: 3000
                })
                reject(err)
            }
        })
    })
}


//保存参数跳转登录
function navigateToLoginAndCacheParams() {
    let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
    let currentRoute = routes[routes.length - 1]; // 获取当前页面对象
    let curRoute ='/'+ currentRoute.route; // 获取当前页面路由
    let curParam = currentRoute.options; // 获取当前页面参数

    // 如果有参数，将参数添加到URL中
    if (curParam && Object.keys(curParam).length > 0) {
        curRoute += '?'; // 添加查询参数的起始符号
        for (let key in curParam) {
            if (curParam.hasOwnProperty(key) && curParam[key] !== undefined) {
                // 对参数值进行URL编码
                let encodedKey = encodeURIComponent(key);
                let encodedValue = encodeURIComponent(curParam[key].toString());
                curRoute += `${encodedKey}=${encodedValue}&`;
            }
        }
        // 移除最后一个&
        curRoute = curRoute.substring(0, curRoute.length - 1);
    }

    // 缓存参数
    uni.setStorageSync('cachedParams', curRoute);

    // 跳转到登录页面
    uni.redirectTo({
        url: '/pages/my/login'
    });
}
