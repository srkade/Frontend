let n = 5; // height of pattern
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // Internal loop
  for (let j = 1; j <= n; j++) {
    string += j;
  }
  string += "\n";
}
console.log(string);

var nu = 5; // you can take input from prompt or change the value
var tring = "";
// External loop
for (let i = 1; i <= nu; i++) {
  // printing characters
  for (let j = 0; j < i; j++) {
    tring += String.fromCharCode(j + 65);
  }
  tring += "\n";
}
console.log(tring);



