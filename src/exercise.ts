(function () {
//type 定义一个类型
    type bankAccount = {money: number,deposit: (value: number) => void};
    let bankAccount: bankAccount = {
        money: 2000,
        deposit(value: number): void{
            this.money += value;
        }
    };
    let myself: {name: string,bankAccount: bankAccount,hobbies: string[]} = {
        name: "qz",
        bankAccount: bankAccount,
        hobbies: ["Sports", "Cooking"]
    };
    myself.bankAccount.deposit(3000);

    console.log(myself);

//es6的特点
    const double = (value: number): number => value * 2;
    console.log(double(10));

    const greet = (name = "Max") => {
        // if (name === undefined) { name = "Max"; }
        console.log("Hello, " + name);
    };
    greet();
    greet("Anna");

    const numbers = [-3, 33, 38, 5];
    console.log(Math.max(...numbers));

    const newArray = [55, 20];
    newArray.push(...numbers);
    console.log(newArray);

    const testResults = [3.89, 2.99, 1.38];
    const [result1,result2,result3] = testResults;
    console.log(result1, result2, result3);

    const scientist = {firstName: "Will", experience: 12};
    const {firstName, experience} = scientist;
    console.log(firstName, experience);
})();