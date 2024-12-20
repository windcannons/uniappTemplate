//防抖 在连续触发事件时只执行一次函数
export const debounceFn = (fn, delay) => {
    let timer = null
    delay = delay || 500
    return (...args) => {
        const vm = this
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(vm, args)
        }, delay)
    }
}

//节流 函数在一定时间间隔内最多执行一次
export const throttleFn = (fn, delay) => {
    let timer = null
    let lastExecTime = 0
    delay = delay || 500
    return (...args) => {
        const vm = this
        const currentTime = Date.now()
        const elapsedTime = currentTime - lastExecTime
        if (!timer || elapsedTime >= delay) {
            fn.apply(vm, args)
            lastExecTime = currentTime
        }
    }
}
