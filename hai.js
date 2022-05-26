let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.onload = function() {
let result = JSON.parse(request.responseText);
for(let index=0; index<result.length;index++){
    console.log(result[index].name.common);
    console.log(result[index].region);
    console.log(result[index].subregion); 
    console.log(result[index].population); 
}
};
request.send();

// let request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all");
// request.onload = function() {
// let t = JSON.parse(request.responseText);
// for(let index=0; index<t.length;index++){
//     console.log(t[index].name.common);
//     console.log(t[index].region);
//     console.log(t[index].subregion); 
//     console.log(t[index].population); 
// }
// };
// request.send();
