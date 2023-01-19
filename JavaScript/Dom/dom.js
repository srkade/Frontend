// Element get by id 
document.getElementById("para").innerHTML="Hello world!";


// Element get by className
let heading=document.getElementsByClassName([1]);
console.log(heading)



// Element get by tag name

let head=document.getElementsByTagName('h1');
console.log(head);

// Query selector

let q=document.querySelector("div>h1");
console.log(q)
q.innerHTML="This is new heading"


//query selector all

let al=document.querySelectorAll(".con1 p");
console.log(al)