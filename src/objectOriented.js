var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function () {
    //一个构造器 (constructor()), 构造器中参数(name) 的作用域是全局变量，Public 成员可以在任何地方访问， private 成员只允许在类中访问。  name：string卸载class person 与写在constructor是一样的，都是全局的；protected:受保护的。
    //任何对象都可以作为另一个对象的原型（prototype）；
    //定义类：需要专门的类定义符去定义类，在定义类时需要定义特殊的方法，称为构造器（constructor）；来创建类的实例，在构造方法中，可以指定实例的属性的初始值。
    //在TypeScript中接口interfaces的责任就是命名这些类型,函数类型的interface去描述我们的数据.
    //类static/instance区别:static(静态)部分和instance(实例)部分。
    //11.6~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~using classes to create objects~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    var Person = (function () {
        function Person(name, username) {
            this.username = username;
            this.age = 22;
            this.name = name;
        }
        Person.prototype.printAge = function () {
            console.log(this.age);
        };
        Person.prototype.setType = function (type) {
            this.type = type;
            console.log(this.type);
        };
        return Person;
    }());
    var person = new Person("Max", "max"); //创建一个实例
    console.log(person.name, person.username);
    person.printAge();
    person.setType("ewq");
    //Inheritance 继承 和 构造函数
    var Max = (function (_super) {
        __extends(Max, _super);
        //name = "Max";
        function Max(username) {
            _super.call(this, "Max", username);
            this.age = 23;
        }
        return Max;
    }(Person));
    var max = new Max("nax");
    console.log(max);
    //getters & Setters
    var Plant = (function () {
        function Plant() {
            this._species = "qw";
        }
        Object.defineProperty(Plant.prototype, "species", {
            // public species:string;
            get: function () {
                return this._species;
            },
            set: function (value) {
                if (value.length > 3) {
                    this._species = value;
                }
                else {
                    this._species = 'lx';
                }
            },
            enumerable: true,
            configurable: true
        });
        return Plant;
    }());
    var plant = new Plant();
    console.log(plant.species);
    plant.species = 'ABced';
    console.log(plant.species);
    //static properties and method 静态的 性能 和 方法
    //周长，圆径
    var Helpers = (function () {
        function Helpers() {
        }
        Helpers.calcCircumference = function (diameter) {
            return this.PI * diameter;
        };
        Helpers.PI = 3.14;
        return Helpers;
    }());
    console.log(2 * Helpers.PI);
    console.log(Helpers.calcCircumference(8));
    //abstract classes 抽象的类
    var Project = (function () {
        function Project() {
            this.projectName = "default";
            this.budget = 1000;
        }
        Project.prototype.calcBudget = function () {
            return this.budget * 2;
        };
        return Project;
    }());
    var ITProject = (function (_super) {
        __extends(ITProject, _super);
        function ITProject() {
            _super.apply(this, arguments);
        }
        ITProject.prototype.changeName = function (name) {
            this.projectName = name;
        };
        return ITProject;
    }(Project));
    var newProject = new ITProject();
    console.log(newProject);
    newProject.changeName("supper");
    console.log(newProject);
    //private constructors 私有的构造器
    var OnlyOne = (function () {
        function OnlyOne(name) {
            this.name = name;
        }
        OnlyOne.getInstance = function () {
            if (!OnlyOne.instance) {
                OnlyOne.instance = new OnlyOne('The Only One');
            }
            return OnlyOne.instance;
        };
        return OnlyOne;
    }());
})();
//# sourceMappingURL=objectOriented.js.map