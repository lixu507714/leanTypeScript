function greet(person) {
    console.log("hello" + person.name);
}
function changeName(person) {
    person = person || { name: 'anna' };
    return person.name = "anna";
}
var person = {
    name: "李旭",
    age: 24
};
greet(person);
console.log(changeName(person));
greet(person);
//# sourceMappingURL=interface.js.map