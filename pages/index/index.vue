<template>
    <div class="index">
        {{ store.shopPage }}
        <button @click="add">
            +
        </button>
        <tabbar :num="0"></tabbar>
    </div>
</template>

<script
    setup>
import Tabbar
    from "../../components/tabbar.vue";
import {
    useUserStore
} from "../../stores/counter";
import {
    onMounted
} from "vue";


const store = useUserStore()
const add = () => {
    store.setShopPage(store.shopPage + 1)
}

onMounted(()=>{

})

</script>

<style
    scoped
    lang="less">

</style>
