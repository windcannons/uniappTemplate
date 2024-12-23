<!--loading-->
<template>
    <div class="index" :class="{min:props.min}">
        <image src="/static/loding.gif"></image>
        加载中。。。
    </div>
</template>

<script
    setup>
//如果传入min，则为小加载状态
const props = defineProps(() =>['min'])
</script>

<style
    scoped
    lang="less">
.index{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    width: 100%;
    font-size: 32rpx;
    color: #AFAFAF;
    min-height: 400rpx;

    image{
        width: 100rpx;
        height: 100rpx;
        margin-right: 20rpx;
    }
}
.min{
    min-height: 0 !important;
    height: auto;
}
</style>

