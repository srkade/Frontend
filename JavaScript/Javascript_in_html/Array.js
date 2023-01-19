let a=[1,4,35,1,46,1,56,1,87]


//delete from last 
a.pop();


//add in last
a.push(97)
// console.log(a)

//delete from first
a.shift();
// console.log(a)

//add in first
a.unshift(12)
console.log(a)

//Map
// console.log(a.map(a=>1))

// filter 
console.log(a.filter(fun()))

function fun(age){
    return age>=12;
}
