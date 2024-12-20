import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate';

// 创建 Pinia 实例
const pinia = createPinia();

// 使用持久化插件
pinia.use(
    createPersistedState({
        key: (id) => `pinia_${id}`,
        storage: {
            setItem(key, value) {
                uni.setStorageSync(key, value);
            },
            getItem(key) {
                return uni.getStorageSync(key);
            },
        },
    })
);

// 导出 pinia 实例
export default pinia;
