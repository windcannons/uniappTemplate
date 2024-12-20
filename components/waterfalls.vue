<template>
    <view
            style="padding: 0 10rpx;">
        <view
                class="handle">
            <button
                    class="btn"
                    type="default"
                    @click="add()">
                增加数据
            </button>
            <button
                class="btn"
                type="default"
                @click="column++">
                增加列数
            </button>
            <button
                class="btn"
                type="default"
                @click="column>1?column--:column">
                减少列数
            </button>
            <button
                    class="btn"
                    type="default"
                    @click="reset()">
                刷新数据
            </button>
        </view>
        <custom-waterfalls-flow
                ref="waterfallsFlowRef"
                :value="data.list"
                :column="column"
                :columnSpace="1.5"
                :seat="2"
                @wapperClick="wapperClick"
                @imageClick="imageClick"
                @loaded="loaded">
            <view
                    class="item"
                    v-for="(item,index) in data.list"
                    :key="index"
                    slot="slot{{index}}">
                <view
                        class="title">
                    {{
                    item.title
                    }}
                </view>
                <view
                        class="desc">
                    {{
                    item.desc
                    }}
                </view>
            </view>
        </custom-waterfalls-flow>
    </view>
</template>
<script
    setup>
import {
    reactive,
    ref
} from 'vue';

const data = reactive({
    list: [
        {
            image: '/static/waterfallsImg/1.png',
            title: '我是标题1',
            desc: '描述描述描述描述描述描述描述描述1'
        },
        {
            image: '/static/waterfallsImg/2.png',
            title: '我是标题2',
            desc: '描述描述描述描述描述描述描述描述2'
        },
        {
            image: '/static/waterfallsImg/3.png',
            title: '我是标题3',
            desc: '描述描述描述描述描述描述描述描述3'
        },
        {
            image: '/static/waterfallsImg/4.png',
            title: '我是标题4',
            desc: '描述描述描述描述描述描述描述描述4'
        },
        {
            image: '/static/waterfallsImg/5.png',
            title: '我是标题5',
            desc: '描述描述描述描述描述描述描述描述5'
        }, {
            image: '/static/waterfallsImg/1.png',
            title: '我是标题1',
            desc: '描述描述描述描述描述描述描述描述1'
        },
        {
            image: '/static/waterfallsImg/2.png',
            title: '我是标题2',
            desc: '描述描述描述描述描述描述描述描述2'
        },
        {
            image: '/static/waterfallsImg/3.png',
            title: '我是标题3',
            desc: '描述描述描述描述描述描述描述描述3'
        },
        {
            image: '/static/waterfallsImg/4.png',
            title: '我是标题4',
            desc: '描述描述描述描述描述描述描述描述4'
        },
        {
            image: '/static/waterfallsImg/5.png',
            title: '我是标题5',
            desc: '描述描述描述描述描述描述描述描述5'
        }]
});
const column = ref(3);

function add() {
    const newArr = [{
        image: '/static/waterfallsImg/1.png',
        title: '我是标题1',
        desc: '描述描述描述描述描述描述描述描述1'
    },
        {
            image: '/static/waterfallsImg/2.png',
            title: '我是标题2',
            desc: '描述描述描述描述描述描述描述描述2'
        },
        {
            image: '/static/waterfallsImg/3.png',
            title: '我是标题3',
            desc: '描述描述描述描述描述描述描述描述3'
        },
        {
            image: '/static/waterfallsImg/4.png',
            title: '我是标题4',
            desc: '描述描述描述描述描述描述描述描述4'
        },
        {
            image: '/static/waterfallsImg/5.png',
            title: '我是标题5',
            desc: '描述描述描述描述描述描述描述描述5'
        }];
    data.list.push(...newArr);
}

function loaded() {
    console.log('加载完成')
}

function wapperClick(item) {
    console.log('单项点击事件', item)
}

function imageClick(item) {
    console.log('图片点击事件', item)
}

const waterfallsFlowRef = ref(null);

function reset() {
    data.list = [
        {
            image: '/static/waterfallsImg/1.png',
            title: '春意盎然',
            desc: '春天的花朵盛开，带来了生机勃勃的气息。'
        },
        {
            image: '/static/waterfallsImg/2.png',
            title: '夏日炎炎',
            desc: '夏日的海滩，阳光灿烂，是度假的好时光。'
        },
        {
            image: '/static/waterfallsImg/3.png',
            title: '秋色宜人',
            desc: '秋天的枫叶，金黄一片，是收获的季节。'
        },
        {
            image: '/static/waterfallsImg/4.png',
            title: '冬日暖阳',
            desc: '冬天的雪花，洁白无瑕，带来了宁静与祥和。'
        },
        {
            image: '/static/waterfallsImg/5.png',
            title: '晨光熹微',
            desc: '清晨的第一缕阳光，温暖而充满希望。'
        }
    ];
    waterfallsFlowRef.value.refresh();
}
</script>

<style
    lang="less"
    scoped>
.handle {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20rpx;
  padding: 10rpx;
  position: sticky;
  top: 0;
  left: 0;

  .btn {
    margin: 20rpx 10rpx;
    padding: 0 20rpx;
    background: #2878FF;
    font-size: 28rpx;
    color: #fff;

    &::after {
      border: 0;
    }
  }
}

.item {
  padding: 10rpx 10rpx 20rpx;

  .title {
    line-height: 48rpx;
    font-size: 28rpx;
    color: #222;
  }

  .desc {
    font-size: 24rpx;
    color: #666;
  }
}
</style>
