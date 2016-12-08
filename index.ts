console.log('test bbb');
//str
let myName : string = 'lixu'; //let myNames = 'lixu';

//number
let num : number = 123; //let num = 123;

//boolean
let hasHobbies : boolean = false; //let hasHobbies = false;

//Array
let hobbies :any[] = ['football','eat',2];
// let hobbies = [1];
console.log(hobbies);

//tuples 元组
let tuples : [string , number] = ['hobbies',11];
console.log(tuples);

//enum 枚举 枚举常量的数据类型是整数。enum 枚举名{ 枚举值表 };
enum weekday {
    sun,
    mon,
    tus,
    wes,
    ths,
    fri,
    sat
}
console.log(weekday);

//any
let car : any = 'bm';
console.log(car);
 car = {
    name:'lixu',
    age:22
};
console.log(car);

//functions
function values():string{
    return myName;
}
console.log(values());

//void //空值：某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是void：
function hello ():void{
    console.log("hello");
}

//argument type
function multiply(value1:number,value2:number):number{
    return value1 * value2;
}
console.log(multiply(2,2));

//function types
let myMultiply:(a:number,b:number) =>number;
myMultiply = multiply;
console.log(myMultiply(1,1));

let valuess:()=>string;
valuess=values;
console.log(valuess());

//objects
let userData : {name:string,age:number} = {
    name : 'qz',
    age : 22
};

//complex object
let complex : {data:number[],output:(all:boolean) => number[]} = {
    data : [1,2,3],
    output: function (all:boolean):number[]{
        return this.data;
    }
};
console.log(complex);

//type alias 类型化名
type Complex = {data:number[],output:(all:boolean) => number[]};
let complex2 : Complex = {
    data : [1,2,3],
    output: function (all:boolean):number[]{
        return this.data;
    }
};
console.log(complex2);

//union types 联合类型
let myRealAge : number | string = 21;
myRealAge = "22";

//check types
let finalValue = "22";
if(typeof finalValue == "string"){
    console.log("happy")
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
function controlMe (isTrue:boolean,somethingElse:boolean){
    let result:number;
    if(isTrue){
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

const maxLevels = 1;
console.log(maxLevels);
//block scope
function reset() {
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

//12.5
//arrow function
console.log("ARROW FUNCTION");
//声明一个函数
const addNumbers = function (value1:number,value2:number):number{
    return value1 + value2;
};
console.log(addNumbers(2,4));

const multiplyNumbers = (value1:number,value2:number) => value1+value2;
const multiplyNumber = (value1:number,value2:number) => {
    return value1+value2;
};
console.log(multiplyNumbers(3,4));

const greet = () =>{
  console.log("hello");
};
greet();

const greetFriend = friend =>console.log(friend);
greetFriend("manu");

//default paramters 参数
const paramters =(start:number =10):void => {
    while (start<0){
        start--;
    }
    console.log("None",start);
};
paramters();

//Rest & Spread
function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log(makeArray("Max", 1, 2, 6));

const numbers = [1,22,88,-3];
console.log(Math.max(22,33,13,66));
console.log(Math.max(...numbers)); //apply

// function makeArray(...args:number[]){
//     return args;
// }
// console.log(makeArray(2,3,1));

//destructuring array
const myHobbies = ["cooking","Sport"];
const [hobby1,hobby2] = myHobbies;
console.log(hobby1,hobby2);

//object
const userDate = {userName:"sh", age: 22};
const {userName:myNameS,age:myAge} = userDate;
console.log(myNameS,myAge);

//模板文字 template literals 模版字符串
const userName = "qz";
const greeting = `this is me;
i am ${userName}
this is cool!`;
console.log(greeting);

//es6的类型
let x:[string , number];
 x = ["hello",11];
console.log(x[0].substr(1,2));
console.log(x[3] = "world");
//枚举  从0开始为元素编号。 你也可以手动的指定成员的数值
enum Color {Red, Green, Blue};
let c: Color = Color.Green;
let colorName : string = Color[2];
console.log(colorName);

let we : any =4;

//函数声明 ~~~~~~~~~~~~~~~~~~~~~~~~var let const~~~~~~~~~~~~~~~~~~~~~~~~~~~

function asCont(){
    var cont = 11;
    return function g(){
        var b = cont +1;
        return b;
    }
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


function asConts(){
    let conts:string = "display";
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

//由于公司搬家，住的地方需要出租，地点在回龙观地铁站，新龙城二期，房屋可住两人，自带阳台，提供免费WiFi！交通方便，价格2500/月！

//订单后台
//护士订单

function q(input:boolean){
    let z = 100;
    if(input){
        let b = z+1;
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

//11.6~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~using classes to create objects~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//一个构造器 (constructor()), 构造器中参数(name) 的作用域是全局变量，Public 成员可以在任何地方访问， private 成员只允许在类中访问。  name：string卸载class person 与写在constructor是一样的，都是全局的；protected:受保护的。
//任何对象都可以作为另一个对象的原型（prototype）；
//定义类：需要专门的类定义符去定义类，在定义类时需要定义特殊的方法，称为构造器（constructor）；来创建类的实例，在构造方法中，可以指定实例的属性的初始值。

//在TypeScript中接口interfaces的责任就是命名这些类型,函数类型的interface去描述我们的数据.

//类static/instance区别:static(静态)部分和instance(实例)部分。
class Person {
    name : string;
    private type : string;
    protected age : number = 22;

    constructor(name : string, public username : string){
        this.name = name;
    }

    printAge(){
        console.log(this.age);
    }

    setType(type : string){
        this.type = type;
        console.log(this.type);
        console.log("~~~~~~~~~~~~~~~~~");
    }
}

const person = new Person("Max","max");//创建一个实例
console.log(person.name,person.username);
person.printAge();
person.setType("ewq");

//Inheritance 继承 和 构造函数
class Max extends Person {
    //name = "Max";

    constructor(username: string){
        super("Max",username);
        this.age = 23;
    }
}
const max = new Max("nax");
console.log(max);

//getters & Setters
class Plant {
    private _species : string = "qw";

    get species(){
        return this._species;
    }

    set species(value: string){
        if(value.length>3){
            this._species = value;
        }else{
            this._species = 'lx';
        }
    }
}
const plant = new Plant();
console.log(plant.species);
plant.species = 'ABced';
console.log(plant.species);

//static properties and method 静态的 性能 和 方法
//周长，圆径
class Helpers {
    static PI : number = 3.14;
    static calcCircumference(diameter: number):number{
        return this.PI * diameter;
    }
}
console.log(2*Helpers.PI);
console.log(Helpers.calcCircumference(8));

//abstract classes 抽象的类

abstract class Project {
    projectName : string = "default";
    budget : number = 1000;

    abstract changeName(name:string):void;

    calcBudget() {
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name:string):void{
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("supper");
console.log(newProject);



















