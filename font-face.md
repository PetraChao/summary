# 自定义字体

在网页制作时，需要添加自定义字体，为了能在下拉菜单选择的时候，就能看见字体样式，

将font-face增添到编辑页的头部。
@font-face {
font-family: 'FangzhenglantingGBK-Regular';
src: url('//static/FangzhenglantingGBK-Regular.ttf')
网页中的字匹配到对应的family，去对应的字体库ttf(全集)中，查出字体给网页，显示对应字体。

为了减小tff的大小，h5editor中，发布的时候去调用server-new服务，server-new根据所传入的文字和family，匹配的文字库后，生成一个对应的ttf（非全集，只包含查到的字所需要的库）输出给浏览器相应的地址，h5editor生成相应的样式给文档头部。

对应的网页头部：
@font-face {
font-family: 'FangzhenglantingGBK-Regular';
src: url('//static.didialift.com/pinche/gift/resource/FangzhenglantingGBK-Regular（x）.ttf’)

好啦，制作网页的自定义字体就是这样了~