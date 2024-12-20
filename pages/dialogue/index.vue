<template>
    <div class="index">
        <up-navbar
            title="教程"
            :autoBack="false"
            :leftIconSize="0"
            bgColor="skyblue"
            :placeholder="true"
        >
        </up-navbar>

        <!--图片裁剪组件-->
        <Tailor></Tailor>

        <tabbar :num="2"></tabbar>
    </div>
</template>

<script setup>
import Tabbar
    from "../../components/tabbar.vue";
import Tailor
    from "../../components/tailor.vue";

</script>

<style scoped lang="less">

</style>
