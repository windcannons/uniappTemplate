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
import {
    addPosition
} from "../../request/list/addPosition";

const store = useUserStore()
const add = () => {
    store.setShopPage(store.shopPage + 1)
}

onMounted(()=>{
    addPosition({code:'home_bottom_become_a_Member_content'}).then(res=>{
        console.log(res)
    })
})

</script>

<style
    scoped
    lang="less">

</style>
