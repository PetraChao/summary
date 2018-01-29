B = function () {
    this.age = '26';
}
B.prototype.sayAge = function () {
    alert(this.age)
}
A = function () {
    B.call(this);
    this.name = 'wangzhiliang';
}

A.prototype = Object.create(B.prototype);
A.prototype.sayName = function () {
    alert(this.name);
}
A.prototype.construntor = A;




//二
B = function () {
    this.age = '26';
}
B.prototype.sayAge = function () {
    alert(this.age)
}
A = function () {
    this.name = 'yupengfei';
}

A.prototype = new B();
A.prototype.sayName = function () {
    alert(this.name);
}
A.prototype.construntor = A;


