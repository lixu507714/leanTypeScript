/**
 * Created by lixu on 17/1/3.
 */
//generics
class MyMap <T> {
    private map :{[key:string]:T} = {};
    setItem(key:string,item:T){
        this.map[key] = item;
    }
    getItem(key:string){
        return this.map[key];
    }
    clear(){
        this.map = {};
    }
    printMap(){
        for(let key in this.map){
            console.log(key,this.map[key]);
        }
    }
}
const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem("apples"));
numberMap.printMap();
numberMap.clear();