# rem自适应的原理

## 等比缩放原理

rem的本质是等比缩放，在不同设备下，ue图等比缩放。

假设我们将屏幕分为100份，每一份用x表示，x=屏幕宽度/100，x为屏幕宽度的1%。如果将x作为单位，x前面的数值就为占屏幕宽度的百分比

```
p{width: 50x;}/*屏幕宽度的50%*/
```

css中并不存在这样的单位。但css中存在rem单位，元素可以相对于rem设定宽度，而rem可以相对于屏幕宽度设值，如果我们使html字体的大小恒等于屏幕宽度的1%。

```
html{font-size: dWidth/100}
p{width: 50rem;}/*50rem=屏幕宽度的50%*/
```

在页面初始化和resize时，设置font-size，代码如下：

```
document.documentElement.style.fontSize = document.documentElement.clientWidth/100+'px'
```

那么要如何设置css的值呢？

```
xrem=元素宽度/根元素font-size=元素宽度/(dWidth/100)=元素宽度/dWidth*100
```

在设计稿中表现为：


```
xrem=设计稿元素宽度/设计稿宽度*100
```

现在我们拿到一张设计稿，为640px，其中一个元素为100px，根据公式

```
设计稿元素宽度/设计稿宽度*100 = 100/640*100 = 15.625rem
```

设置后在不同设备下，ue图等比缩放


## 单位优化

每次去计算rem的值实在是太麻烦了，可不可以我在设计稿上量出多少，我就写多少呢？在less和sass中去定义一个自定义变量rpx使

```
xrem = yrpx = 设计稿元素宽度*rpx，
```

前面说过，假定将屏幕分为100份，1rem就为屏幕宽度的1%，则当设计稿元素宽度为100%时，元素为100rem，带入公式得

```
100rem=  设计稿元素宽度*rpx，
=>rpx = 100/设计稿元素宽度
```

假设现在我们拿到的设计稿是640px的，在less中代码如下

```
rpx: 100 / 640 * 1rem;
p{
    width: 320rpx;
}
```


## 安卓机型兼容问题

在三星Galaxy5和华为荣耀9中，发现屏幕展示偏大，经过追踪，发现其中1rem!=root font-size
，（端内webview的1rem=1.233font-size，非dpr）为了校正此问题，如果1rem 是font-size的n倍，则将font-size缩小n（n可以大于1，也可以小于1）倍。
那么怎么计算n值呢？我创建一个100rem的元素，计算他的offsetWidth，和用root font-size计算出来的宽度。
他们之间的比offsetWidth/root font-size计算出来的宽度就为n。将其缩小n倍，则解决了1rem!=root font-size的问题

具体代码如下

```
function remPatch(){
    var remTestFragment = document.createElement('div');
    remTestFragment.id = 'rem-test';
    remTestFragment.style.width = '100rem';
    remTestFragment.style.opacity = 0;
    remTestFragment.style.position = 'absolute';
    remTestFragment.style.top = '-1000px';
    remTestFragment.style.left = '-1000px';
    document.addEventListener('DOMContentLoaded', function(){
        document.body.appendChild(remTestFragment);
        var currentTestWidth = remTestFragment.offsetWidth;
        var rootFontSize = docEl.style.fontSize.replace(/px/, '') * 100;/*提高精度*/
        var scale = currentTestWidth / rootFontSize;
        rootFontSize = rootFontSize / 100 / scale;/*提高精度*/
        window.rootFontSize = rootFontSize;
        docEl.style.fontSize = rootFontSize + 'px';
        remTestFragment.parentNode.removeChild(remTestFragment);   
    });
}
```