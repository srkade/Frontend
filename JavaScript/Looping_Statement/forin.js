let arr = [234, 333, 54, 65, 56];
      for (j in arr) {
        console.log(j);
      }


let obj={
    name:"dharam",
    age:"23",
    loc:"amravati"
}
for(j in obj){
    console.log(j)
}

let cars=["benz","brezza","swift","lambo","nexon"]
for(i of cars){
  console.log(i);
  
}

// for(i of obj){
//     console.log(i);
// }


//for each
let a=["benz","brezza","swift","lambo","nexon"]

function fun(ele,index){
    console.log(`the array items is ${ele} the position of item is ${index}`)
}
a.forEach(fun);//call back fun