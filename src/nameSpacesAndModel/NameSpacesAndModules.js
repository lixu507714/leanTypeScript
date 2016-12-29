/**
 * Created by lixu on 16/12/28.
 */
//~~~~~~~~~~~~~~~~nameSpaceAngModule~~~~~~~~~~~~~~~~~~~~~~
//命名空间和模板 TS里的namespace是跨文件的，JS里的module是以文件为单位的，一个文件一个module
//TS里的namespace主要是解决命名冲突的问题，会在全局生成一个对象，定义在namespace内部的类都要通过这个对象的属性访问  而JS里的module，主要是解决加载依赖关系的。跟文件绑定在一起，一个文件就是一个module
//namespace:命名空间是用来组织和重用代码的,如果两个人写的库文件中出现同名的变量或函数(不可避免)，使用起来就有问题了。
// 为了解决这个问题，引入了名字空间这个概念，通过使用 namespace xxx；你所使用的库函数或变量就是在该名字空间中定义的，这样一来就不会引起不必要的冲突了。
//namespace MyMath { //可以避免导致全局命名冲突问题。
//const PI = 3.14;   //diameter 直径
// export function calcuateCircumference(diameter: number) {
//     return PI * diameter;
// }
//
// export function calculateRectangle(height: number, width: number) {
//     return height * width;
// }
//}//相当于一个闭包 只能在包里面用，如果想要把包里面的东西在外边调用，要export 出去
// <reference path = "circleMath.ts">
// <reference path = "rectangleMath.ts">;
// import {CircleMath} from "./circleMath";
// import {RectangleMath} from "./rectangleMath";
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~在这遇到了一个坑，没有编译成js导致报错MyMath没有定义~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//tsc --outFile NameSpacesAndModules.js circleMath.ts rectangleMath.ts NameSpacesAndModules.ts
var s = MyMath.Circle;
var PI = 1;
console.log(s.calcuateCircumference(4));
console.log(MyMath.calculateRectangle(3, 4));
console.log(PI);
//nameSpaces and multiple files 命名空间可以分为多重的文件
//例如：
// ~~~~~~~~circleMath.js 文件里~~~~~~~~~
// namespace MyMath {
//     const PI = 3.14;
//     export function calcuateCircumference(diameter: number) {
//         return PI * diameter;
//     }
// }
// ~~~~~~~rectangleMath.js 文件里~~~~~~~~~
// namespace MyMath {
//     const PI = 3.14;
//     export function calculateRectangle(height: number, width: number) {
//         return height * width;
//     }
// }
//nameSpace import
//<reference path = "circleMath.ts" />
//<reference path = "rectangleMath.ts" />
//more on nameSpaces
//limitations of namespaces 限制
//# sourceMappingURL=NameSpacesAndModules.js.map