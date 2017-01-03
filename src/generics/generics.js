/**
 * Created by lixu on 17/1/3.
 */
//4、泛型的参数类型可以使用extends语句，例如<T extends superclass>。习惯上称为“有界类型”。泛型还有接口、方法等等，内容很多
//装起来，组件则对迭代器提供一定的封装.这种程序库的优点在于能够提供比传统程序库更灵活的组装方式，而不损失效率.
//为泛型类定义多个类型
//你不必仅仅使用一种数据类型定义每个类，泛型类也提供多个数据类型，你所需要做的是用逗号分开每种数据类型。
//simple Generics 简单的 类
function echo(data) {
    return data;
}
console.log(echo("xixi").length);
console.log(echo(27));
console.log(echo({ name: "lixu", age: 24 }));
//creating/better Generics
function betterEcho(data) {
    return data;
}
console.log(betterEcho("xixi").length);
console.log(betterEcho(27));
console.log(betterEcho({ name: "lixu", age: 24 }));
//bulit-in generics
var testResults = [1, 2, 3];
testResults.push(-1.1);
console.log(testResults);
//array
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["apple", "banana"]);
//generics type
var echo2 = betterEcho;
console.log(echo2("something"));
//generics class
var SimpleMath = (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue; //????????????????? 类型转化
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 1;
simpleMath.multiplyValue = "2";
console.log(simpleMath.calculate());
//约束 constraints
//# sourceMappingURL=generics.js.map