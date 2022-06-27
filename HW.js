
console.log("---------------Calculate Area-----------\n");
let length = 80;
let width = 40;
let area = length * width ;
console.log("Area of rectangle is: " + area);


console.log("---------------Temperature Converter-----------\n");
var celsius = 50;
var celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
var fahrenheit = 30;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');

console.log("---------------Numbers' Summations-----------\n");
let nums = [23,54,32,87,47]
let total = 0;
nums.forEach(function(num){
    total += num
})
console.log(total)


console.log("----------------Maximum Mumber--------------\n");
let arr =[16,4,2,0,19,6] ;
let max = arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i]
    }
}
console.log(max)

console.log("----------------Reverse Array--------------\n");
let arr1 =  [1,2,3,4,5,6,7,8,9,10].reverse();
console.log(arr1);

console.log("----------------Stars pattern--------------\n");
let n = 5;
let star = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);