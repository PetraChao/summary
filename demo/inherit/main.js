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

a1 = new A();
a1.age


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

a2 = new A();
a2.age

//三
B = function () {
    this.age = '26';
}
B.prototype.sayAge = function () {
    alert(this.age)
}
A = function () {
    this.name = 'pengchao';
}

function F() {}

F.prototype = B.prototype;

A.prototype = new F();

A.prototype.sayName = function () {
    alert(this.name);
}

A.prototype.construntor = A;

a2 = new A();
a2.age