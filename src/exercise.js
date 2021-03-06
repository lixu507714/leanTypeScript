var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var bankAccount = {
        money: 2000,
        deposit: function (value) {
            this.money += value;
        }
    };
    var myself = {
        name: "qz",
        bankAccount: bankAccount,
        hobbies: ["Sports", "Cooking"]
    };
    myself.bankAccount.deposit(3000);
    console.log(myself);
    //es6的特点
    var double = function (value) { return value * 2; };
    console.log(double(10));
    var greet = function (name) {
        if (name === void 0) { name = "Max"; }
        // if (name === undefined) { name = "Max"; }
        // console.log("Hello, " + name);
        return name + '1234';
    };
    greet();
    greet("Anna");
    var numbers = [-3, 33, 38, 5];
    console.log(Math.max.apply(Math, numbers));
    var newArray = [55, 20];
    newArray.push.apply(newArray, numbers);
    console.log(newArray);
    var testResults = [3.89, 2.99, 1.38];
    var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
    console.log(result1, result2, result3);
    var scientist = { firstName: "Will", experience: 12 };
    var firstName = scientist.firstName, experience = scientist.experience;
    console.log(firstName, experience);
    // re-write all this code using typescript ang class features. 改写所有的代码使用typescript 和 class的特点
    var Car = (function () {
        function Car(usersname) {
            this.acceleration = 0;
            this.usersname = usersname;
        }
        Car.prototype.honk = function () {
            console.log("Tooooo");
        };
        Car.prototype.accelerate = function (speed) {
            this.acceleration = this.acceleration + speed;
        };
        return Car;
    }());
    var car = new Car("bmw");
    car.honk();
    console.log(car.acceleration);
    car.accelerate(10);
    console.log(car.acceleration);
    //exercise 2
    var BaseObject = (function () {
        function BaseObject() {
            this.width = 0;
            this.height = 0;
        }
        return BaseObject;
    }());
    //用到继承  rectangle 矩形
    var Rectangle = (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Rectangle.prototype.calcSize = function () {
            return this.width * this.height;
        };
        return Rectangle;
    }(BaseObject));
    var rectangle = new Rectangle();
    rectangle.width = 5;
    rectangle.height = 10;
    console.log(rectangle.calcSize());
    //exercise 3
    var Person = (function () {
        function Person() {
            this._firstName = "";
        }
        Object.defineProperty(Person.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            set: function (value) {
                if (value.length > 3) {
                    this._firstName = value;
                }
                else {
                    this._firstName = "";
                }
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    var person = new Person();
    console.log(person.firstName);
    person.firstName = "MA";
    console.log(person.firstName);
    person.firstName = "MASERDA";
    console.log(person.firstName);
})();
//# sourceMappingURL=exercise.js.map