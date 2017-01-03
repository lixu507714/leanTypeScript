/**
 * Created by lixu on 17/1/3.
 */
//4、泛型的参数类型可以使用extends语句，例如<T extends superclass>。习惯上称为“有界类型”。泛型还有接口、方法等等，内容很多
//装起来，组件则对迭代器提供一定的封装.这种程序库的优点在于能够提供比传统程序库更灵活的组装方式，而不损失效率.


//为泛型类定义多个类型
//你不必仅仅使用一种数据类型定义每个类，泛型类也提供多个数据类型，你所需要做的是用逗号分开每种数据类型。

//simple Generics 简单的 类
function echo(data: any) {
    return data;
}
console.log(echo("xixi").length);
console.log(echo(27));
console.log(echo({name: "lixu", age: 24}));

//creating/better Generics
function betterEcho<T>(data: T) {
    return data;
}
console.log(betterEcho("xixi").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({name: "lixu", age: 24}));

//bulit-in generics
let testResults: Array<number> = [1, 2, 3];
testResults.push(-1.1);
console.log(testResults);

//array
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element))
}
printAll<string>(["apple", "banana"]);

//generics type
let echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("something"));

//generics class
class SimpleMath<T extends number | string,U extends number | string> {
    baseValue: T;
    multiplyValue: U;

    calculate():number{
        return +this.baseValue * +this.multiplyValue;//????????????????? 类型转化
    }
}
const simpleMath = new SimpleMath<number,string>();
simpleMath.baseValue = 1;
simpleMath.multiplyValue = "2";
console.log(simpleMath.calculate());

//约束 constraints


