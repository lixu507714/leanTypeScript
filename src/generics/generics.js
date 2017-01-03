/**
 * Created by lixu on 17/1/3.
 */
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