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
