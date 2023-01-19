//Looping Statement
//
//  !) for loop
//  2) while loop
//  3) do while


//For loop:- 
//this loop uses parameter such as intiolization ,Condition, Increment
//or Decrement 

//Syntax : for(Initilization,condition ,increment Or decrement){
//            Statements;
// }

// let num=5;
// for(let i=0;i<=num;i++){
//     console.log(i);
// }
// //pain
// //
// for( let j=5;j>=0;j--){
//     console.log(j);
// }//5 4 3 2 1 0  
// //-1

let str="";
let temp=1;

        
        for(let i=1; i<=5; i++){
            for(let j=1; j<=temp;j++){
                str+=j;

            }
            str+="\n";
            temp++;
            
        }
        console.log(str)

//1
//12
//123
//1234
//12345


