import App
    from './App'
import uviewPlus
    from 'uview-plus'
import {
    createSSRApp
} from 'vue'
import pinia from './utils/pinia'; // 引入 pinia 配置
import '/assets/main.less'
export function createApp() {
    const app = createSSRApp(App)
    app.use(uviewPlus)
    app.use(pinia);
    return {
        app
    }
}
