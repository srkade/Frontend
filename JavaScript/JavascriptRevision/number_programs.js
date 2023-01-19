
for(let j=1;j<=50;j++){
let num=j,count=0;
for(let i=1;i<=num;i++){
    if(num%i==0){
        count++;
    }
}
if(count==2){
    console.log( num+" the given number is prime")
}else{
    console.log(num+" The Given number is not prime")
}
}
