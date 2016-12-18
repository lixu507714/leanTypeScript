(function () {
//一个构造器 (constructor()), 构造器中参数(name) 的作用域是全局变量，Public 成员可以在任何地方访问， private 成员只允许在类中访问。  name：string卸载class person 与写在constructor是一样的，都是全局的；protected:受保护的。
//任何对象都可以作为另一个对象的原型（prototype）；
//定义类：需要专门的类定义符去定义类，在定义类时需要定义特殊的方法，称为构造器（constructor）；来创建类的实例，在构造方法中，可以指定实例的属性的初始值。
//在TypeScript中接口interfaces的责任就是命名这些类型,函数类型的interface去描述我们的数据.
//类static/instance区别:static(静态)部分和instance(实例)部分。


//11.6~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~using classes to create objects~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    class Person {
        name: string;
        private type: string;
        protected age: number = 22;

        constructor(name: string, public username: string) {
            this.name = name;
        }

        printAge() {
            console.log(this.age);
        }

        setType(type: string) {
            this.type = type;
            console.log(this.type);
        }
    }

    const person = new Person("Max", "max");  //创建一个实例
    console.log(person.name, person.username);
    person.printAge();
    person.setType("ewq");

//Inheritance 继承 和 构造函数

    class Max extends Person {
        //name = "Max";
        constructor(username: string) {
            super("Max", username);
            this.age = 23;
        }
    }
    const max = new Max("nax");
    console.log(max);

//getters & Setters

    class Plant {
        private _species: string = "qw";
        // public species:string;
        get species() {
            return this._species;
        }

        set species(value: string) {
            if (value.length > 3) {
                this._species = value;
            } else {
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
        static PI: number = 3.14;

        static calcCircumference(diameter: number): number {
            return this.PI * diameter;
        }
    }
    console.log(2 * Helpers.PI);
    console.log(Helpers.calcCircumference(8));

//abstract classes 抽象的类

    abstract class Project {
        projectName: string = "default";
        budget: number = 1000;

        abstract changeName(name: string): void;

        calcBudget() {
            return this.budget * 2;
        }
    }

    class ITProject extends Project {
        changeName(name: string): void {
            this.projectName = name;
        }
    }

    let newProject = new ITProject();
    console.log(newProject);
    newProject.changeName("supper");
    console.log(newProject);

//private constructors 私有的构造器
    class OnlyOne {
        private static instance: OnlyOne;
        private constructor(public name: string) {}
        static getInstance() {
            if(!OnlyOne.instance){
                OnlyOne.instance = new OnlyOne('The Only One');
            }
            return OnlyOne.instance;
        }
    }
})();