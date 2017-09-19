//工厂方式

//demo1
//调用此函数时将创建新对象，并赋予它所有的属性和方法。使用此函数可以创建2个属性完全相同的对象
function Car() {
    var ocar = new Object;
    ocar.color = “blue”;
    ocar.doors = 4;
    ocar.showColor = function () {
        document.write(this.color)
    };
    return ocar;
}
var car1 = Car();
var car2 = Car();


// demo2传递参数
function Car(color, door) {
    var ocar = new Object;
    ocar.color = color;
    ocar.doors = door;
    ocar.showColor = function () {
        document.write(this.color)
    };
    return ocar;
}
var car1 = Car(“red”, 4);
var car2 = Car(“blue”, 4);
car1.showColor() //output:”red”
car2.showColor() //output:”blue”