(function () {
    console.log('test bbb');
    //str
    var myName = 'lixu'; //let myNames = 'lixu';
    //number
    var num = 123; //let num = 123;
    //boolean
    var hasHobbies = false; //let hasHobbies = false;
    //Array
    var hobbies = ['football', 'eat', 2];
    // let hobbies = [1];
    console.log(hobbies);
    //tuples 元组
    var tuples = ['hobbies', 11];
    console.log(tuples);
    //enum 枚举 枚举常量的数据类型是整数。enum 枚举名{ 枚举值表 };
    var weekday;
    (function (weekday) {
        weekday[weekday["sun"] = 0] = "sun";
        weekday[weekday["mon"] = 1] = "mon";
        weekday[weekday["tus"] = 2] = "tus";
        weekday[weekday["wes"] = 3] = "wes";
        weekday[weekday["ths"] = 4] = "ths";
        weekday[weekday["fri"] = 5] = "fri";
        weekday[weekday["sat"] = 6] = "sat";
    })(weekday || (weekday = {}));
    console.log(weekday);
    //any
    var car = 'bm';
    console.log(car);
    car = {
        name: 'lixu',
        age: 22
    };
    console.log(car);
    //functions
    function values() {
        return myName;
    }
    console.log(values());
    //void //空值：某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是void：
    function hello() {
        console.log("hello");
    }
    //argument type
    function multiply(value1, value2) {
        return value1 * value2;
    }
    console.log(multiply(2, 2));
    //function types
    var myMultiply;
    myMultiply = multiply;
    console.log(myMultiply(1, 1));
    var valuess;
    valuess = values;
    console.log(valuess());
    //objects
    var userData = {
        name: 'qz',
        age: 22
    };
    //complex object
    var complex = {
        data: [1, 2, 3],
        output: function (all) {
            return this.data;
        }
    };
    console.log(complex);
    var complex2 = {
        data: [1, 2, 3],
        output: function (all) {
            return this.data;
        }
    };
    console.log(complex2);
    //union types 联合类型
    var myRealAge = 21;
    myRealAge = "22";
    //check types
    var finalValue = "22";
    if (typeof finalValue == "string") {
        console.log("happy");
    }
    //never
    // function neverReturns (): never {
    //     throw new Error("An error");
    // }
    //nullable type
    // let canbeNull : number | null = 11;
    // canbeNull = null;
    // console.log(canbeNull);
    // let canAlsoBeNull;
    // canAlsoBeNull = null;
    // let canThisBeAny: number | null = null;
    // canThisBeAny = 12;
    //编译器的一个改动
    function controlMe(isTrue, somethingElse) {
        var result;
        if (isTrue) {
            result = 10;
        }
        result = 12;
        return result;
    }
    //let 声明的变量可以在重复声明 & const(常量) : const声明的变量只可以在声明时赋值
    var variable = "sh";
    console.log(variable);
    variable = 'lx';
    console.log(variable);
    var maxLevels = 1;
    console.log(maxLevels);
    //block scope
    function reset() {
        var variable = null;
        console.log(variable);
    }
    reset();
    console.log(variable);
    //12.5
    //arrow function
    console.log("ARROW FUNCTION");
    //声明一个函数
    var addNumbers = function (value1, value2) {
        return value1 + value2;
    };
    console.log(addNumbers(2, 4));
    var multiplyNumbers = function (value1, value2) { return value1 + value2; };
    var multiplyNumber = function (value1, value2) {
        return value1 + value2;
    };
    console.log(multiplyNumbers(3, 4));
    var greet = function () {
        console.log("hello");
    };
    greet();
    var greetFriend = function (friend) { return console.log(friend); };
    greetFriend("manu");
    //default paramters 参数
    var paramters = function (start) {
        if (start === void 0) { start = 10; }
        while (start < 0) {
            start--;
        }
        console.log("None", start);
    };
    paramters();
    //Rest & Spread
    function makeArray(name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return args;
    }
    console.log(makeArray("Max", 1, 2, 6));
    var numbers = [1, 22, 88, -3];
    console.log(Math.max(22, 33, 13, 66));
    console.log(Math.max.apply(Math, numbers)); //apply
    // function makeArray(...args:number[]){
    //     return args;
    // }
    // console.log(makeArray(2,3,1));
    //destructuring array
    var myHobbies = ["cooking", "Sport"];
    var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
    console.log(hobby1, hobby2);
    //object
    var userDate = { userName: "sh", age: 22 };
    var myNameS = userDate.userName, myAge = userDate.age;
    console.log(myNameS, myAge);
    //模板文字 template literals 模版字符串
    var userName = "qz";
    var greeting = "this is me;\ni am " + userName + "\nthis is cool!";
    console.log(greeting);
    //es6的类型
    var x;
    x = ["hello", 11];
    console.log(x[0].substr(1, 2));
    console.log(x[3] = "world");
    //枚举  从0开始为元素编号。 你也可以手动的指定成员的数值
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    var c = Color.Green;
    var colorName = Color[2];
    console.log(colorName);
    var we = 4;
    //函数声明 ~~~~~~~~~~~~~~~~~~~~~~~~var let const~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function asCont() {
        var cont = 11;
        return function g() {
            var b = cont + 1;
            return b;
        };
    }
    var g = asCont();
    console.log(g());
    function f() {
        var a = 1;
        a = 2;
        var b = g();
        a = 3;
        return b;
        function g() {
            return a;
        }
    }
    console.log(f()); //2
    function asConts() {
        var conts = "display";
        return conts;
    }
    console.log(asConts());
    console.log('12345678900');
    //var 变量获取怪异之处
    // for (var i = 0; i < 10; i++) {
    //     setTimeout(function() {
    //         console.log(i);
    //     }, 100 * i);
    //}//setTimeout 是在函数执行完之后才执行的。所以输出10次10；
    // for(let i=0;i<10;i++){
    //     setTimeout(function() {
    //         console.log(i);
    //     }, 100 * i);
    //}////用let声明 setTimeout 是在函数执行完之后才执行的。所以输出1-10；
    // for(var i=0;i<10;i++){
    //     (function(i){
    //         setTimeout(function() {
    //             console.log(i);
    //         }, 100 * i);
    //     })(i);
    // }
    function q(input) {
        var z = 100;
        if (input) {
            var b = z + 1;
            return b;
        }
    }
    console.log(q(true));
    //try catch
    try {
        throw "oh no!";
    }
    catch (e) {
        console.log("Oh well.");
    }
})();
//# sourceMappingURL=index.js.map