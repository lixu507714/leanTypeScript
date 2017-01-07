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
var a1 = {
    name: "dad",
    age: 12,
    greet: function (namex) {
    }
};
function greet(person) {
    console.log("hello" + person.name);
}
function changeName(person) {
    person = person || { name: 'anna' };
    return person.name = "anna";
}
var person = {
    name: "李旭",
    age: 24,
    hobbies: ["cooking", "sport"],
    greet: function (lastName) {
        console.log("I am" + this.name + " " + lastName);
    }
};
greet(person); //greet({name: "李旭",age: 24});
console.log(changeName(person));
person.greet("Anything");
//interface and properties 性能
//using interFace with classes
var Persons = (function () {
    function Persons() {
    }
    Persons.prototype.greet = function (lastName) {
        console.log("I am" + this.name + " " + lastName);
    };
    return Persons;
}());
var myPerson = new Persons();
myPerson.name = "aaaaa";
greet(myPerson);
myPerson.greet("Anything");
var myDoubleValueFunc;
myDoubleValueFunc = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleValueFunc(10, 20));
var oldPerson = {
    age: 27,
    name: "mas",
    greet: function (lastName) {
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
//# sourceMappingURL=interface.js.map