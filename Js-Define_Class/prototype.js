// 原型方式
//利用了对象的prototype属性。首先用空函数创建类名，然后所有的属性和方法都被赋予prototype属性

//demo1
function Car() {
}
Car.prototype.color = "red";
Car.prototype.doors = 4;
Car.prototype.showColor = function () {
    alert(this.color);
}
var car1 = new Car();
var car2 = new Car();


//demo2
//原型方式有个很严重的问题就是当属性指向的是对象时，如数组
function Car() {
}
Car.prototype.color = "red";
Car.prototype.doors = 4;
Car.prototype.arr = new Array("a", "b");
Car.prototype.showColor = function () {
    alert(this.color);
}
var car1 = new Car();
var car2 = new Car();
car1.arr.push("cc");
alert(car1.arr); //output:a,b,cc
alert(car2.arr); //output:a,b,cc
//这里由于数组的引用值，Car的两个对象指向的都是同一个数组，所以当在car1添加值后，在car2中也可以看到。