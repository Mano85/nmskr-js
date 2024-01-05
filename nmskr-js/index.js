//Namaskarr js
// anonymus function 
var invoke=function(){
    console.log("Namaskar")
}
invoke();
// firstclass functions
// const a=(a,b)=>{
//     return(a+""+b)
// }
// console.log(a("kaa","kkk"))

// function myfunction(){
//   document.getElementById("root").innerHTML="Sucessfully submitted";
// }
// myfunction();
// <!--------next LINE---------->
//anonymous function
// var a= function(){
//     console.log("anonymous function")
// }
// console.log(a)
//Now we see  different from  paramters and arguments.
// Function definition with two parameters
// In this num1 and num2 are parameters which we are using in the function 
// Parameters are which we are passing in loc 33 .it is basic difference
function multiplyNumbers(num1, num2) {
    var product = num1 * num2;
    console.log("Product: " + product);
  }
  
  
  multiplyNumbers(3, 5);
//   first class functions 
function firstclassfunc(num1, num2, func) {
    return func(num1, num2);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  console.log( firstclassfunc(5, 3, add)); 
  