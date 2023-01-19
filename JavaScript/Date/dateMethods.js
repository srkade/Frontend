var d=new Date(2011,11,21,12,54,1,2000);

//If you want only year then use getFullYear() Method
console.log(d.getFullYear());

//If you want only Month then use getMonth() Method
console.log(d.getMonth());

//If you want only day then use getDate() Method
console.log(d.getDate());

//If you want only weekday then use getDay() Method
console.log(d.getDay());

//If you want only Hour then use getHour() Method
console.log(d.getHours());

console.log(d.getMinutes());

console.log(d.getSeconds());

console.log(d.getMilliseconds());

//if we want time then use getTime() Method
console.log(d.getTime())

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

let month=months[d.getMonth()];
console.log(month)
