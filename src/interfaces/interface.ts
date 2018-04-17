/**
 * Created by lixu on 16/12/30.
 */
// interface NamePerson {
//     name:string;
// }
// function greet(person: NamePerson) {
//     console.log("hello" + person.name);
// }
//
// function changeName(person: NamePerson) {
//     person.name = "anna";
// }
// const person = {
//     name: "李旭",
//     age: 24
// };
// greet(person);
// changeName(person);
// greet(person);// ????????打印出来的值相同
const a1:NamePerson = {
    name:"dad",
    age:12,
    greet(namex:string){

    }
};

interface NamePerson {
    name: string;
    age?: number; // 可以选择
    [propName:string]:any;
    greet(lastName:string):void;
}
function greet(person: NamePerson) {
    console.log("hello" + person.name);
}

function changeName(person: NamePerson) {
    person = person || {name: 'anna'};
    return person.name = "anna";
}
const person: NamePerson = {
    name: "李旭",
    age: 24,
    hobbies:["cooking","sport"],
    greet(lastName:string){
        console.log("I am"+ this.name+" "+lastName);
    }
};
greet(person);//greet({name: "李旭",age: 24});
console.log(changeName(person));
person.greet("Anything");

//interface and properties 性能

//using interFace with classes

class Persons implements NamePerson{
    name:string;
    greet(lastName:string){
        console.log("I am"+ this.name+" "+lastName);
    }
}
let myPerson = new Persons();
myPerson.name  = "aaaaa";
greet(myPerson);
myPerson.greet("Anything");
//http://www.cnblogs.com/hljarmy/archive/2013/10/30/3396606.html

//interface and function type
interface DoubleValueFunc {
    (number:number,number2:number):number;
}

let myDoubleValueFunc:DoubleValueFunc;

myDoubleValueFunc = function (value1:number,value2:number){
    return (value1+value2)*2;
};
console.log(myDoubleValueFunc(10,20));

//继承
interface AgedPerson extends NamePerson{
    age:number;
}
let oldPerson :AgedPerson = {
    age:27,
    name:"mas",
    greet(lastName:string){
       console.log("hello");
    }
};

//--------------interface yu  class de qubie--------------------
// let name1 :NamePerson = {
//     age:13,
//     name:"asa",
//     greet(hello :string){
//         console.log(hello);
//     }
// };
// console.log(oldPerson);
//
// let name2 = new Persons();
// const  name3 = new Persons();


//interface get comliled 编译