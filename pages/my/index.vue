<template>
    <div class="index">
        <div class="header">

        </div>
        <button @click="login">登录</button>
        <tabbar :num="4"></tabbar>
    </div>
</template>

<script setup>
import Tabbar
    from "../../components/tabbar.vue";

//登录
const login = ()=>{
    uni.navigateTo({
        url:'/pages/my/login'
    })
}
</script>

<style scoped lang="less">

</style>
