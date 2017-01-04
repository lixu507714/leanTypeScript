/**
 * Created by lixu on 17/1/3.
 */
//creating  a class decorator 装饰
//Decorator模式　　动态地给一个对象添加一些额外的职责。就增加功能来说，Decorator模式相比生成子类更为灵活。——包装器Wrapper。
//　　有时我们希望给某个对象而不是整个类添加一些功能。
//使用继承机制是添加功能的一种有效途径，从其他类继承过来的边框特性可以被多个子类的实例所使用。

//http://www.cnblogs.com/bastard/archive/2012/02/02/2336150.html

//experimentalDecorators 避免警告   http://blog.csdn.net/wmzy1067111110/article/details/49819331


function logged(constructorFn: Function) {
    console.log(constructorFn);
}
@logged
class children {
    constructor() {
        console.log("hi");
    }
}

//装饰工厂 factory

function logging(value: boolean) {
    return value ? logged : null;
}
@logging(true)
class Car{

}
//advanced 先进的
function printable(constructorFn:Function){
    constructorFn.prototype.print = function (){
        console.log(this);
    }
}
@logging(true)
@printable
class Plant {
    name = 'lixu'
}
let plant = new Plant();
(<any>plant).print();

// method decorator    propertyDedcriptor :需查找
function editable (value:boolean){
    return function(target:any,propName:string,descriptor:propertyDescriptor){
        descriptor.writable = value;
    }
}

function overwrite(value:boolean){
    return function(target:any,propName:string):any{
        let newDescriptor:PropertyDescriptor = {
            writable : value
        };
        return newDescriptor;
    }
}

class Project {
    @overwrite(false)
    proiectName:string;
    constructor (name:string){
        this.proiectName = name;
    }
    @editable(false)
    calcBudget(){
        console.log(1000);
    }
}

const project = new Project("gaoqz");
project.calcBudget();
project.calcBudget = function (){
    console.log(2000);
};
project.calcBudget();

//parameter 参数 decorator 装饰
function printInfo(target:any,methodName:string,paramIndex:number){
    console.log("target:",target);
    console.log("methodName",methodName);
    console.log("paramIndex",paramIndex);
}
class Course {
    name:string;
    constructor(name:string){
        this.name = name;
    }
    printStudentNumbers(mode:string,@printInfo printAll:boolean){
        if(printAll){
            console.log(10000)
        }else{
            console.log(20000)
        }
    }
}
let course = new Course("lsh");
course.printStudentNumbers("anything",true);
course.printStudentNumbers("anything",false);

