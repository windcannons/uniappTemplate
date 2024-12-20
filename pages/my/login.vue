<template>
    <div
        class="index">
        <u-navbar
            :placeholder="false"
            :autoBack="true">
        </u-navbar>
        <image
            src="/static/loinBg.png"
            class="bg"></image>
        <div
            class="main">
            <image
                class="logo"
                src="/static/logo.png"></image>
            <div
                class="title">
                登录
            </div>
            <button
                class="btn"
                open-type="getPhoneNumber"
                @tap="isChoose=true"
                @getphonenumber="onGetPhoneNumber">
                快捷登录
            </button>
            <div
                @tap="isChoose = !isChoose"
                class="info">
                <div
                    :class="{isChoose}"
                    class="chooseBox"></div>
                我已经阅读并同意
                <text>
                    《软件许可及用户协议》
                </text>
                和
                <text>
                    《隐私政策》
                </text>
            </div>
        </div>

        <div class="popUp" v-if="ispopUp">
            <div class="mainYhj">
<div class="yhj">
    <div class="li">
        <div class="top">
            <div class="le">
                <div class="num">
                    <text>
                        ￥
                    </text>
                    10
                </div>
                <div class="info">
                    无金额门槛
                </div>
            </div>
            <div class="ri">
                <div class="name">
                    <div class="tag">
                        满减券
                    </div>
                    无门槛10员券
                </div>
                <div class="time">
                    2024.11.21-2025.02.30
                </div>
            </div>
        </div>
        <div class="fot">
            全场商品通用
        </div>
    </div>
</div>
                <image @tap="chosePopup" class="close" src="/static/close2.png"></image>
            </div>
        </div>

    </div>
</template>

<script
    setup>
import {
    reactive,
    ref
} from 'vue';
import {
    onLoad,
} from "@dcloudio/uni-app";
import {
    weChatPhone
} from "../../request/list/weChatPhone";
import {
    backPage
} from "../../utils/method";

onLoad(() => {
    uni.login({
        provider: 'weixin',
        success: loginRes => {
            console.log(loginRes)
            loginInfo.codeLogin = loginRes.code
        }
    })
})

let loginInfo = reactive({
    codeLogin: '',
    codePhone: ''
})

//跳转协议
const agree = (type) => {
    uni.navigateTo({
        url: `/pages/mine/Agreement?type=${type}`
    })
}

//	登录
let ispopUp = ref(false)
let isChoose = ref(false)
const onGetPhoneNumber = (e) => {
    if (!e.detail.encryptedData) {
        return false;
    }
    loginInfo.codePhone = e.detail.code

    weChatPhone({...loginInfo}).then(res => {
        uni.setStorageSync('token',res.data.token)
            //newUser
            //是否新用户  0新用户  1老用户
        if (Number(res.data.newUser)) {
            backPage()
        } else {
            ispopUp.value = true
        }
    })
}

const chosePopup = ()=>{
    ispopUp.value = false
    backPage()
}
</script>

<style scoped lang="less">
.index {
    position: relative;
    height: 100vh;

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 99;
    }

    .main {
        position: relative;
        z-index: 9999;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 100rpx;

        .logo {
            width: 176rpx;
            height: 176rpx;
            margin-bottom: 32rpx;
        }

        .title {
            font-size: 60rpx;
            color: #333333;
            margin-bottom: 76rpx;
        }

        .btn {
            width: 618rpx;
            height: 88rpx;
            background: #333333;
            border-radius: 8rpx 8rpx 8rpx 8rpx;
            font-size: 36rpx;
            color: #FFFFFF;
            line-height: 88rpx;
            margin-bottom: 36rpx;
        }

        .info {
            width: 618rpx;
            font-size: 24rpx;
            color: #000000;
            line-height: 32rpx;

            .chooseBox {
                margin-top: 4rpx;
                width: 24rpx;
                height: 24rpx;
                background: #D9D9D9;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 999rpx;
                float: left;
                margin-right: 10rpx;

                &::after {
                    width: 16rpx;
                    height: 16rpx;
                    content: '';
                    border-radius: 999rpx;
                    background-color: #000;
                    display: none;
                }
            }
            .isChoose{
                &::after{
                    display: block;
                }
            }

            text {
                color: #049FFF;
            }
        }
    }

    .popUp{
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.6);
        z-index: 99999;
        display: flex;
        align-items: center;
        justify-content: center;
.mainYhj{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .yhj{
        width: 654rpx;
        height: 296rpx;
        background: #FFFFFF;
        border-radius: 16rpx 16rpx 16rpx 16rpx;
        padding: 50rpx 35rpx;

        .li {
            width: 100%;
            height: 100%;
            background: #EAEAEA;
            border-radius: 18rpx 18rpx 18rpx 18rpx;
            border: 1px solid #333333;
            margin-bottom: 20rpx;

            .top {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 142rpx;
                border-bottom: 1px dashed #333;

                .le {
                    width: 228rpx;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-right: 1px dashed #333;
                    height: 100%;

                    .num {
                        font-weight: bold;
                        font-size: 72rpx;
                        color: #333333;
                        height: 80rpx;

                        text {
                            font-weight: bold;
                            font-size: 28rpx;
                            color: #333333;
                        }
                    }

                    .info {
                        font-size: 24rpx;
                        color: #333333;
                    }
                }

                .ri {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding-left: 18rpx;
                    flex: 1;

                    .name {
                        font-size: 24rpx;
                        color: #333333;
                        margin-bottom: 28rpx;
                        display: flex;
                        align-items: center;

                        .tag {
                            width: 83rpx;
                            height: 32rpx;
                            background: #333333;
                            border-radius: 5rpx 5rpx 5rpx 5rpx;
                            text-align: center;
                            line-height: 32rpx;
                            margin-right: 10rpx;
                            font-size: 20rpx;
                            color: #FFFFFF;
                        }
                    }

                    .time {
                        font-size: 20rpx;
                        color: #333333;
                    }
                }
            }

            .fot {
                padding-left: 34rpx;
                height: 62rpx;
                line-height: 62rpx;
                font-size: 24rpx;
                color: #333333;
            }
        }
    }

    .close{
        width: 52rpx;
        height: 52rpx;
        margin-top: 28rpx;
    }
}
    }
}
</style>
