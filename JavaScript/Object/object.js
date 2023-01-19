//Object :
// Object are also acollection of different data in the 
// form of key and value paire 
// in Object we are using name indexes

//we are not declaire keys dublicate but values are dublicate

// syntax :- 
// let ob_name={
//     key:value1;
//     key:value2;
//     key :value3;

// }

let obj={
    Fname:"abdul",
    Lname:"Kalam",
    Position:"President"
}
console.log(obj.Position);

//Creating function inside the object

let person={
    fname:"virat",
    lname:"kohali",
    age:"31",
    designation:"Kricket Player",
    location:"delhi",
    fullname:function(){
        console.log("The Persan Full Name is "+this.fname+" "+this.lname +" And  age of person is "+this.age);
    }
}
//Calling Function
person.fullname();

//Note This keyword is referse to a current object inside 
// the creating object
//this keyword is refering to window object in variable inside a function
//  this key is refering to a window object
//It is a ES 6 Concept




