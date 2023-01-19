//1st way of declaring array
var a=[1,true,"Shivaji","data"];
//2nd way of declaring array
var b=[];
b[0]="name";
b[1]=false;
b[2]="benz";
b[6]="Audi"

// we can check data type by using "typeof" method
console.log(typeof(b[0]));
//WE can print array in console by this way

console.log(a);
console.log(a[3]);
console.log(a[2]);
console.log(b)

var c=new Array("ramesh","suresh","naresh");

//Accesing Array items

//new is use to initialize contructor
//Array Is Constructor

console.log(c)

//nested Array 
var nestedArray=[["baleno",'Honda city',"swift","benz"],["RE","Spelendor","classic350","FZ","Pulser"]];
console.log(nestedArray)


//Methods in arrays
var meth=[1,2,3,4,5,5,6,7,7,8];
//push method is use add the item from last index
meth.push(9);
//pop method is use delete the item from last index
meth.pop();

//unshift
//if we want to add item at start index we can unshift method
meth.unshift(12);

//shift
//if we want to delete item from start index we can shift method
meth.shift()
console.log(meth);

//join 
//if we want to join the array items seperated by the string specifyed 
// then use join method
let cars=["honda","tata","mersadies"]
console.log(cars.join('@'));

//concat
//if we want to join two array then use cancat
let carComp=["honda","tata","mersadies"];
let bikeCompany=["bajaj","hero","honda","yamaha","tvs"]
let company=carComp.concat(bikeCompany)
console.log(company);

//slice 
//if we want to print slice of array the use slice method
//syntax array_name.slice(start,end+1);
let itCompa=["tcs","wipro","cognizent","infosys","ibm"]
console.log(itCompa.slice(1,4));

// splice 
// This method can be use to insert or delete the array items 
//in an array 
//this method will modify the orignal array

//syntax array_name.splice(start,no of deletion item ,new item to insert)

var num=[1,2,45,56,7,5,3,,56,90]
console.log(num)
console.log(num.splice(1,2,10))
console.log(num)

//length
//if we want to print the length of array then use length

console.log(num.length);

//Commenting in javascript 
//Single lin comment 
/*
 Multiple line 

*/


//Array Sorting Method
//This method can be use to sort the array item in alphabetical
//order if they are string else if they are number they are sorted 
//in ascensing or descending order

//Ascending 
var vehicle=["Benz","Audi","Thar","Honda city"];
console.log(vehicle.sort())

//Descnding Order
console.log(vehicle.reverse())


let numbers=[9873,2,3,4,5,6,,7,7,8,4,34,45,87];
console.log(numbers.sort())
console.log(numbers.reverse())


