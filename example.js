let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")

request.onload =function(){
  console.log(request.responseText);
  let result = JSON.parse(request.response);
  for(let key in result){
    console.log(result[key].flag);
  }
}
request.onerror =function(){  
  console.log("something went wrong");
}
request.send();

