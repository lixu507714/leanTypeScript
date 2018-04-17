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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var Car = (function () {
    function Car() {
    }
    Car = __decorate([
        logging(true)
    ], Car);
    return Car;
}());
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
        logging(true),
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
plant.print();
// method decorator    propertyDedcriptor :需查找
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
function overwrite(value) {
    return function (target, propName) {
        var newDescriptor = {
            writable: value
        };
        return newDescriptor;
    };
}
var Project = (function () {
    function Project(name) {
        this.proiectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        overwrite(false)
    ], Project.prototype, "proiectName", void 0);
    __decorate([
        editable(false)
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project("gaoqz");
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
//parameter 参数 decorator 装饰
function printInfo(target, methodName, paramIndex) {
    console.log("target:", target);
    console.log("methodName", methodName);
    console.log("paramIndex", paramIndex);
}
var Course = (function () {
    function Course(name) {
        this.name = name;
    }
    Course.prototype.printStudentNumbers = function (mode, printAll) {
        if (printAll) {
            console.log(10000);
        }
        else {
            console.log(20000);
        }
    };
    __decorate([
        __param(1, printInfo)
    ], Course.prototype, "printStudentNumbers", null);
    return Course;
}());
var course = new Course("lsh");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);
//# sourceMappingURL=decorator.js.map