//构造函数方式

function Car(color,door){
    this.color = color;
    this.doors = door;
    this.showColor = function(){
    alert(this.color)
    };
    }
    var car1 = new Car("red",4);
    var car2 = new Car("blue",4);
    //构造函数方式同工厂方式一样
    //在函数内部没有创建对象，是用this关键字。因为在调用构造函数时已经创建了对象，而在函数内部只能用this来访问对象属性
    //用new来创建对象,每次调用都会为对象创建自己的方法。
