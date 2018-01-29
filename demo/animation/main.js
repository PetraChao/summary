setTimeout(() => {
    document.getElementsByClassName("aa")[0].setAttribute("class", 'aa animate')
}, 500);

var a = 1;
function Fn1(){
    var a = 2;
    alert(this.a + a);
}
function Fn2(params) {
    var a = 10;
    Fn1();
}
Fn2();
var Fn3 = function (params) {
    this.a = 3;
}
Fn3.prototype = {
    a:4
}
var fn3 = new Fn3();
Fn1.call(fn3);