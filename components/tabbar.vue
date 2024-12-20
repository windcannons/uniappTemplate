<template>
	<view class="tabbar">
		<view class="li" :class="pageNum===0?'Choose':''" @click="goPage('/pages/index/index')">
			<image src="https://yuanjinren.oss-cn-shanghai.aliyuncs.com/static/tabbar/11.png"></image>
			<image src="https://yuanjinren.oss-cn-shanghai.aliyuncs.com/static/tabbar/10.png"></image>
		</view>
		<view class="li" :class="pageNum===1?'Choose':''" @click="goPage('/pages/reserve/index')">
			<image src="https://yuanjinren.oss-cn-shanghai.aliyuncs.com/static/tabbar/21.png"></image>
			<image src="https://yuanjinren.oss-cn-shanghai.aliyuncs.com/static/tabbar/20.png"></image>
		</view>
		<view class="li" :class="pageNum===2?'Choose':''" @click="goPage('/pages/dialogue/index')">
			<image src="https://yuanjinren.oss-cn-shanghai.aliyuncs.com/static/tabbar/51.png"></image>
			<image src="https://yuanjinren.oss-cn-shanghai.aliyuncs.com/static/tabbar/50.png"></image>
		</view>
		<view class="li" :class="pageNum===3?'Choose':''" @click="goPage('/pages/drug/index')">
			<image src="https://yuanjinren.oss-cn-shanghai.aliyuncs.com/static/tabbar/41.png"></image>
			<image src="https://yuanjinren.oss-cn-shanghai.aliyuncs.com/static/tabbar/40.png"></image>
		</view>
		<view class="li" :class="pageNum===4?'Choose':''" @click="goPage('/pages/my/index')">
			<image src="https://yuanjinren.oss-cn-shanghai.aliyuncs.com/static/tabbar/51.png"></image>
			<image src="https://yuanjinren.oss-cn-shanghai.aliyuncs.com/static/tabbar/50.png"></image>
		</view>
	</view>
</template>

<script setup>
let num = defineProps(['num'])
let pageNum = num.num;
const goPage = (url,num)=>{
	if (num){
		uni.navigateTo({
			url
		});
	}else{
		uni.switchTab({
			url
		});
	}
}
</script>

<style scoped lang="less">
	.tabbar {
		position: fixed;
		z-index: 9999;
		bottom: 20rpx;
		left:30rpx;
		height: 140rpx;
		width: calc(100vw - 60rpx);
		background-color: #1e293b;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10rpx 20rpx;
		border-radius: 40rpx;


		.li {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 0 20rpx;
			width: 90rpx;
			height: 90rpx;
			border-radius: 20rpx;
			position: relative;
			overflow: hidden;

			image {
				width: 46rpx;
				height: 46rpx;

				&:nth-child(1) {
					display: none;
				}
			}
		}

		.Choose {
			background-color: #334155;
			&::after{
				position: absolute;
				bottom: -12rpx;
				left: calc(50% - 25rpx);
				content: '';
				display: block;
				width: 50rpx;
				height: 20rpx;
				background-color: #14b8a6;
				border-radius: 999rpx;
			}
			image {
				&:nth-child(1) {
					display: block !important;
				}

				&:nth-child(2) {
					display: none !important;
				}
			}
		}
	}
</style>
