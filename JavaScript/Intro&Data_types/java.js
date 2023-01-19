let a="Hello World!"
        console.log(a)
document.getElementById("demo").style.color="red";
let submit=document.querySelector("button")
submit.addEventListener("click" ,showing);
 
function showing(){
        let yourname=prompt("enter your name");
        alert("hello student "+yourname)
}