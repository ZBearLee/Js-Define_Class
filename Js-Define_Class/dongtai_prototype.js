//动态原型方式
//动态原型的方式同混合的构造函数/原型方式原理相似。唯一的区别就是赋予对象方法的位置。
function Car(color,door){
    this.color = color;
    this.doors = door;
    this.arr = new Array("aa","bb");
    if(typeof Car._initialized == "undefined"){
    Car.prototype.showColor = function(){
    alert(this.color);
    };
    Car._initialized = true;
    }
    }
