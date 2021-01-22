
<p><a href="https://github.com/chuxiaoguo/datav-vite/blob/master/README.en.md">English</a> | 简体中文</p>

## datav-vite

> 一个快速生成可视化模板的vue插件

这个插件是什么？我们一般都会遇到公司让我们写一个或多个简单的大屏可视化，上面可能会有图表，炫酷的动画，文本等。
此时，你需要想怎么去适配屏幕分辨率啊，这时你会想什么网格布局啊，那我们能不能有一个统一的模板呢？我不关心屏幕的适配，我只关心这个大屏需要展示什么内容。

于是，就有了这样一个组件 - datav-vite(快速构建可视化大屏或数据大屏)。你不需要关心需要设计什么算法，你只管拿到ui的涉及稿，按照ui上的布局位置，将每个组件安置在固定的位置。

还是不懂？看个例子？
参考一个完整的例子，[点击这里](https://github.com/chuxiaoguo/datav-vite/blob/master/docs/src/App.vue)

其实就是两个组件
一个父亲组件负责渲染背景图和提供缩放算法
一个子组件为不同的图形组件提供包装，使其具备绝对布局的功能

## 演示效果


![[avatar](https://chuantu.xyz/t6/739/1592846042x992248267.jpg)](https://chuantu.xyz/t6/739/1592846042x992248267.jpg)


## 在线demo
国内站点 [点击这里查看](https://chuxiaoguo.gitee.io/datav-vite)
git站点 [点击这里查看](https://chuxiaoguo.github.io/datav-vite/)

## 安装
```
npm install --save datav-vite
```

## 使用
```
import DatavVite from 'datav-vite';
Vue.use(DatavVite);
```

## 使用
```
<template>
  <div id="app">
    <DataVTemplate :palette="palette" :scaleMode="mode">
      <DataVCell :partStyle="partStyle">
            <!-- 这里放置echarts的折线图 -->
        </DataVCell>
        <DataVCell :partStyle="partStyle">
            <!-- 这里放置antD的折线图 -->
        </DataVCell>
    </DataVTemplate>
  </div>
</template>

<script lang="ts">
import bg from './assets/bg.png'
const enum ScaleMode {
    // 等比缩放
    EQUAL = 1,
    // 宽度铺满，高度等比缩放
    HSCALE,
    // 高度铺满，宽度等比缩放
    WSCALE,
}

export default {
  name: 'app',
  data: () => {
    return {
      palette: {
        backgroundImage: bg,
      },
      mode: ScaleMode.HSCALE,
      partStyle: {
        height: 100,
        width: 100,
        top: 0,
        left: 0,
      }
    }
  }
}
</script>
```
## api

### DataVTemplate属性api

``` typescript
const enum ScaleMode {
    // 根据屏幕的分辨率，等比缩放
    EQUAL = 1,
    // 宽度铺满，高度等比例缩放
    HSCALE = 2,
    // 高度铺满，宽度等比例缩放
    WSCALE = 3,
}

interface Palette {
    // 背景色，无背景图时，用背景色填充
    backgroundColor: string;
    // 背景图
    backgroundImage: '',
}
```
|  属性|  描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| screenW                | 屏幕分辨率的宽度          | Number  | 1920 |
| screenH                | 屏幕分辨率的高度          | Number  | 1080 |
| scaleMode              | 屏幕预览类型             | Number (ScaleMode) | 3 |
| disabledBackgroundFill | 禁止超出的背景以背景图填充  | Boolean | false |
| palette                | 色盘                    | Palette  | { backgroundColor: '#000' } |

### DataVCell属性api
``` typescript
const enum PartStyle {
    width: number,
    height: number,
    left: number,
    top: number,
    zIndex: number,
}
```
|  属性|  描述 | 类型 | 默认值 |
| --- | --- | --- | --- |
| partStyle    |  赋予一个组件为绝对布局，需要用户输入该组件的宽高，位置和组件的堆叠顺序  | PartStyle  | - |
