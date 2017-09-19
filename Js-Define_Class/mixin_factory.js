//混合工厂方式

//它的目的师创建假构造函数，只返回另一种对象的新实例
function Car() {
    var ocar = new Object();
    ocar.color = "red";
    ocar.doors = 4;
    ocar.showColor = function () {
        alert(this.color)
    };
    return ocar;
}
    //与工厂方式所不同的是，这种方式使用new运算符。