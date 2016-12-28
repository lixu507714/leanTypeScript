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
        // console.log("Hello, " + name);
        return name + '1234';
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

// re-write all this code using typescript ang class features. 改写所有的代码使用typescript 和 class的特点
    class Car {
        usersname: string;
        acceleration: number = 0;

        constructor(usersname: string) {
            this.usersname = usersname;
        }

        honk() {
            console.log("Tooooo");
        }

        accelerate(speed: number) {
            this.acceleration = this.acceleration + speed;
        }
    }
    let car = new Car("bmw");
    car.honk();
    console.log(car.acceleration);
    car.accelerate(10);
    console.log(car.acceleration);

    //exercise 2
    class BaseObject {
        width: any = 0;
        height: any = 0;
    }
    //用到继承  rectangle 矩形
    class Rectangle extends BaseObject {
        calcSize() {
            return this.width * this.height;
        }
    }
    let rectangle = new Rectangle();
    rectangle.width = 5;
    rectangle.height = 10;
    console.log(rectangle.calcSize());

    //exercise 3
    class Person {
        private _firstName : string= "";

        get firstName(): string {
            return this._firstName;
        }

        set firstName(value: string) {
            if(value.length>3){
                this._firstName = value;
            }else{
                this._firstName = "";
            }
        }
    }
    let person = new Person();
    console.log(person.firstName);
    person.firstName = "MA";
    console.log(person.firstName);
    person.firstName = "MASERDA";
    console.log(person.firstName);

})();
