import {
    defineStore
} from 'pinia'
import {
    ref
} from "vue";

export const useUserStore = defineStore('user',
    () => {
        let shopPage = ref(1)
        const setShopPage = (val) => {
            shopPage.value = val
        }
        return {
            shopPage,
            setShopPage
        }
    },
    {
        persist: true
    }
)
