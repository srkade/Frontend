// let num=5,sum=1;
// for(let i=num;i>0;i--){
//     sum*=i;

//     //sum=sum*i
//     //5*4=20*3=60*2=120*1=120
// }
// Constructor function for Person objects
function P(f,l,a){
    this.fn=f
    this.ln=l
    this.age=a
}

const My=new P("Naresh","Sharma",56)

console.log(My.age)
