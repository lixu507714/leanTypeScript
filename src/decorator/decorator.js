/**
 * Created by lixu on 17/1/3.
 */
//creating  a class decorator 装饰
//Decorator模式　　动态地给一个对象添加一些额外的职责。就增加功能来说，Decorator模式相比生成子类更为灵活。——包装器Wrapper。
//　　有时我们希望给某个对象而不是整个类添加一些功能。
//使用继承机制是添加功能的一种有效途径，从其他类继承过来的边框特性可以被多个子类的实例所使用。
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//http://www.cnblogs.com/bastard/archive/2012/02/02/2336150.html
//experimentalDecorators 避免警告   http://blog.csdn.net/wmzy1067111110/article/details/49819331
function logged(constructorFn) {
    console.log(constructorFn);
}
var children = (function () {
    function children() {
        console.log("hi");
    }
    children = __decorate([
        logged
    ], children);
    return children;
}());
//装饰工厂 factory
function logging(value) {
    return value ? logged : null;
}
//advanced 先进的
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant = (function () {
    function Plant() {
        this.name = 'lixu';
    }
    Plant = __decorate([
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
//# sourceMappingURL=decorator.js.map