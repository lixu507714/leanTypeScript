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
interface NamePerson {
    name: string;
    age?: number;
}
function greet(person: NamePerson) {
    console.log("hello" + person.name);
}

function changeName(person: NamePerson) {
    person = person || {name: 'anna'};
    return person.name = "anna";
}
const person = {
    name: "李旭",
    age: 24
};
greet(person);
console.log(changeName(person));
greet(person);
