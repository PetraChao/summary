console.log('begin');
for(var i = 0; i<5; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
console.log('end');

// 输出begin、end
// 1秒后输出5g个5，for循环创造了5个定时器，同时输出