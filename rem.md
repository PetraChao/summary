# 史上最容易逻辑解释rem自适应的原理

我们希望在不同宽度的手机上，按相同的比例去展示元素。

当我们拿到设计稿时，设计稿的宽度（vWidth）已知，某元素在设计稿上的宽度(eleWidth)也已知。

要在不同的宽度的手机上，按照相同的比例展示元素，即元素的实际宽(x)与手机屏幕宽度(dWidth)的比例要与设计稿上元素宽度与设计稿宽度相等，用公式表示为
``` x/dWidth = eleWidth/vWidth ```

现在我们已知vWidth固定、eleWidth固定 ，但手机的屏幕宽度dWidth不固定，如果用一个绝对单位，那就得动态设置每个元素的实际宽度x的css值，但是如果用一个相对单位，使得
``` y*unit/dWidth = eleWidth/vWidth ```
中y值（css样式值）不变，（y*unit为元素的实际宽度）那么我们就只需要改变unit的值，使它满足公式即可。

rem是一个相对单位，可以通过动态设置根节点字体大小来决定rem大小。得到
``` y*rem/dWidth = eleWidth/vWidth ```

我希望我在css中写的样式值就是我在设计稿中量出来的元素宽度，即y=eleWidth，代入公式，则为
``` eleWidth*rem/dWidth = eleWidth/vWidth ```
=>``` 1*rem/dWidth = 1/vWidth ```
=>``` 1*rem = dWidth/vWidth ```

则我们只需要在页面加载的时候设置根字体大小为
``` 1*rem = dWidth/vWidth ```即可
