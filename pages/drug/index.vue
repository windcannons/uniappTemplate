<template>
    <div class="index">
        <up-navbar
            title="社区"
            :autoBack="false"
            :leftIconSize="0"
            bgColor="skyblue"
            :placeholder="true"
        >
        </up-navbar>

        <waterfalls></waterfalls>

        <tabbar :num="3"></tabbar>
    </div>
</template>

<script setup>
import Tabbar
    from "../../components/tabbar.vue";
import Waterfalls
    from "../../components/waterfalls.vue";
</script>

<style scoped lang="less">

</style>
