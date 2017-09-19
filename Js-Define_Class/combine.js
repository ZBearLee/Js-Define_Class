//联合方式
//联合是用构造函数/原型方式,可以像其他程序设计语言一样创建对象，是用构造函数定义对象的非函数属性，用原型方式定义对象的方法
function Car(color, door) {
    this.color = color;
    this.doors = door;
    this.arr = new Array("aa", "bb");
}
Car.prototype.showColor = function () {
    alert(this.color);
}
var car1 = new Car("red", 4);
var car2 = new Car("blue", 4);
car1.arr.push("cc");
alert(car1.arr); //output:aa,bb,cc
alert(car2.arr); //output:aa,bb