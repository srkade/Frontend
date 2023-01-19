const map=new Map([
    ["apples",500],
    ["bananas",100],
    ["Orange",200]
]);
//get() method
// get method is for get the value
console.log(map.get("apples"))

//set() Method
//we can set key and value paire
map.set("Orange",200)
map.set("pineapple",300)
map.set("watermelon",50)

console.log(map.get("watermelon"))

//delete() Method
//we can delete the key and value from map
map.delete("apples");
console.log(map.get("apples"))


//forEach() Method
//forEach Method calls the function for each ket or value paire
//in the map


let data="";
map.forEach(function(v,k){
    data=data+(k+' = '+v+' \n')
})

console.log(data)


//size
//By using size() method we can get size of map
console.log(map.size)



