# uniapp项目模板

------

#### 引用uview-plus插件

```
https://uiadmin.net/uview-plus/
```



#### 引入sass&less预处理语言



#### 配置pinia以及数据持久化

```
<template>
    <div class="index">
        {{ store.shopPage }}
        <button @click="add">
            +
        </button>
    </div>
</template>

<script
    setup>
import {
    useUserStore
} from "../../stores/counter";

const store = useUserStore()
const add = () => {
    store.setShopPage(store.shopPage + 1)
}

</script>

<style
    scoped
    lang="less">

</style>

```



#### 配置防抖节流

- 调用`utils/utils.js`中的方法，其中时间选填

```
const fn = debounceFn((info) => {
   //执行方法
},300)//传入时间
```



#### 封装方法方法

- 分享页面 在onLoad中调用

```
showShareMenu()
```

- 统一页面跳转

```
<button @click="goPage(`/pages/my/address`)">地址</button>
```



#### 配置列表请求方法

- 方法

```
//请求列表并记录参数   url(请求路径)
export function requestList(request, getInfo, callback) {
    // 下拉加载 且当前加载条数为总条数
    if (Number(getInfo.allSize) && getInfo.current * getInfo.size <= getInfo.allSize) {
        callback([]);
        return;
    }
    let arr = [];
    getInfo.isLoading = true;
    request(getInfo).then(res => {
        if (res.success) {
            arr = res.data.records;
            getInfo.current++;
            getInfo.allSize = res.data.total;
            getInfo.isLoading = false;
            callback(arr); // 使用回调函数返回结果
        } else {
            getInfo.isLoading = false;
            callback([]);
        }
    }).catch(err => {
        getInfo.isLoading = false;
        callback([]);
    });
}
```

- 请求

```
import {
    findActivityList
} from "../../request/list/findActivityList";
//列表参数
let getInfo = reactive({
    current: 1,
    size: 12,
    allSize: '',
    isLoading: true,
})
//列表数据
let activityList = reactive([])
onLoad(async () => {
    requestList(findActivityList, getInfo, (newActivities) => {
        activityList.splice(0, activityList.length, ...newActivities);
    });
    showShareMenu()
})
// 触底事件处理函数
onReachBottom(() => {
    requestList(findActivityList, getInfo, (newActivities) => {
        activityList.push(...newActivities);
    });
})
```

`findActivityList`为请求方法

```
import {
    request
} from "../request";

export let findActivityList  = (data) => request('/api/issueEssay/findActivityList', 'GET', data) //活动列表查询
```



#### 封装顶部导航栏

```
<navbar title='标题名称'></navbar>
```



#### 封装文字溢出省略样式

- 通过增加类名绑定省略，设置`data-omit=?`来设置显示行数
- 目前设置1-3行，可在`assets/main.less`下增加

```
<div class="name textOmit" :data-omit="3">
```



## 初始化

```
npm i
```



# 项目相关信息

微信小程序账号

```
wangzhen@neumee.email
neumee88TT
```





# 瀑布流组件

https://ext.dcloud.net.cn/plugin?id=7594#c9

需先在uniapp插件市场进行下载导入插件

使用参考`components/waterfalls.vue`文件



# 富文本插件

https://ext.dcloud.net.cn/plugin?id=14726

## prop 参数

| 参数          | 类型    | 默认值                                                       | 必填                            | 说明                                                         |
| :------------ | :------ | :----------------------------------------------------------- | :------------------------------ | :----------------------------------------------------------- |
| editorId      | String  | editor                                                       | 否（使用 v-for 循环时建议填写） | 编辑器标签 id 属性，用于循环渲染编辑器时动态赋值，防止 id 重复 |
| placeholder   | String  | 写点什么吧 ~                                                 | 否                              | 编辑器占位字样                                               |
| readOnly      | Boolean | false                                                        | 否                              | 是否只读                                                     |
| maxlength     | Number  | -1                                                           | 否                              | 最大字数限制，-1 时不限制                                    |
| toolbarConfig | Object  | 详见 [toolbarConfig 参数](https://sv-app-docs.pages.dev/src/plugins/sp-editor/sp-editor.html#toolbarconfig-参数) | 否                              | 工具栏配置                                                   |

### toolbarConfig 参数

| 参数        | 类型   | 默认值 | 说明                                                         |
| :---------- | :----- | :----- | :----------------------------------------------------------- |
| keys        | Array  | []     | 要显示的工具，优先级最大，详见 [toolbar 工具](https://sv-app-docs.pages.dev/src/plugins/sp-editor/sp-editor.html#toolbar-工具) |
| excludeKeys | Array  | []     | 除这些指定的工具外，其他都显示                               |
| iconSize    | String | 18px   | 工具栏字体大小                                               |
| iconColumns | Number | 10     | 工具栏列数                                                   |

### toolbar 工具

| 工具 key        | 说明     |
| :-------------- | :------- |
| header          | 标题     |
| H1              | 一级标题 |
| H2              | 二级标题 |
| H3              | 三级标题 |
| H4              | 四级标题 |
| H5              | 五级标题 |
| H6              | 六级标题 |
| bold            | 加粗     |
| italic          | 斜体     |
| underline       | 下划线   |
| strike          | 删除线   |
| align           | 对齐方式 |
| alignLeft       | 左对齐   |
| alignCenter     | 居中对齐 |
| alignRight      | 右对齐   |
| alignJustify    | 两端对齐 |
| lineHeight      | 行间距   |
| letterSpacing   | 字间距   |
| marginTop       | 段前距   |
| marginBottom    | 段后距   |
| fontFamily      | 字体     |
| fontSize        | 字号     |
| color           | 文字颜色 |
| backgroundColor | 背景颜色 |
| date            | 日期     |
| listCheck       | 待办     |
| listOrdered     | 有序列表 |
| listBullet      | 无序列表 |
| indentInc       | 增加缩进 |
| indentDec       | 减少缩进 |
| divider         | 分割线   |
| scriptSub       | 下标     |
| scriptSuper     | 上标     |
| direction       | 文本方向 |
| image           | 图片     |
| video           | 视频     |
| link            | 超链接   |
| undo            | 撤销     |
| redo            | 重做     |
| removeFormat    | 清除格式 |
| clear           | 清空     |
| export          | 导出     |

提示

建议按需引入对应的工具，尽量简化富文本工具

## emit 事件

| 事件名     | 参数                                                         | 说明                                           |
| :--------- | :----------------------------------------------------------- | :--------------------------------------------- |
| init       | editor：编辑器实例；id：编辑器 id（在 v-for 循环渲染编辑器时，可以通过 id 来作区分处理） | 编辑器就绪回调                                 |
| upinImage  | tempFiles：包含插入图片的本地临时路径的对象（开发者可用此路径上传文件至服务器）；editor：编辑器实例；id：编辑器 id | 插入图片时回调                                 |
| upinVideo  | tempFilePath：本地视频临时地址（开发者可用此路径上传文件至服务器）；其他同上 upinImage | 插入视频时回调                                 |
| input      | e：{ html, text } 当前内容的 html 文本、 text 文本；id：编辑器 id | 输入内容时回调                                 |
| addLink    | e：{ text, href } 添加的链接描述、链接地址；id：编辑器 id    | 添加超链接回调，toolbar 需要开启 `link` 工具   |
| exportHtml | e：导出的 html 内容；id：编辑器 id                           | 工具栏导出回调，toolbar 需要开启 `export` 工具 |

## 插件内置工具方法

| 方法名                       | 参数                           | 返回         | 说明                                                         |
| :--------------------------- | :----------------------------- | :----------- | :----------------------------------------------------------- |
| handleHtmlWithVideo          | html：要进行处理的富文本字符串 | 返回处理结果 | 将含有特殊占位图片形式视频的富文本转换成正常视频的富文本     |
| convertImgStylesToAttributes | html：要进行处理的富文本字符串 | 返回处理结果 | 将 img 标签中内联 style 属性中的宽高样式提取出标签 width 与 height 属性 |



# 图片裁剪

https://ext.dcloud.net.cn/plugin?id=14084

- 使用自定义tabbar需要设置`裁剪按钮位置`

