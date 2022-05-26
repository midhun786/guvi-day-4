//How to compare two JSON have the same properties without order?
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

JSON.stringify(obj1) === JSON.stringify(obj2);
 if (obj1=obj2){
     console.log(true);
 }else{
     console.log(false);
 }



