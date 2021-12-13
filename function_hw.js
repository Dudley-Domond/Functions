//QUESTION 1: Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.


function maxOfThree(param1, param2, param3) {
    console.log(Math.max(param1, param2, param3))
}
maxOfThree(10, 50, 100);


//QUESTON 2a. Create a function called celsiusToFahrenheit:

//- Take a Celsius temperature from the user and convert it to Fahrenheit

//- Return string as output: "SOMETHING degrees Celsius is Something degrees Fahrenheit"


function celsiusToFahrenheit(param1){
        return param1;
}

let prompt = require('prompt-sync')()

let celsius = prompt("Enter a celsius value ");

let fahrenheit = (celsius * 1.8) + 32

console.log(`${celsius} degree celsius is equal to ${fahrenheit} degree fahrenheit.`);


//2b. Create a function called fahrenheitToCelsius:

//- Now take a Fahrenheit temperature from the user and convert it to Celsius

//- Return string as output: "SOMETHING degrees Fahrenheit is SOMETHING degrees Celsius"


function fahrenheitToCelsius(param1){
    return param1;
}

let prompt = require('prompt-sync')()

let fahrenheit = prompt("Enter fahrenheit value ");

let celsius = (fahrenheit - 32) * 5 / 9

console.log(`${fahrenheit} degree fahrenheit is equal to ${celsius} degree celsius.`);


//3. Create an array of at least five Student objects with the following properties: name, activity, gender

//- Filter all those students who are into swimming

//- Filter all those students who are in the activity entered by the user. For example, if the user enters "Basketball" display only students with basketball as their activity 


let prompt = require('prompt-sync')()

let user = prompt("Enter activity value ");

const arr  = [
    {name: "John", activity: "Swimming", gender: "Male"},
    {name: "Tariq", activity: "Basketball", gender: "Male"},
    {name: "Brianna", activity: "Painting", gender: "Female"},
    {name: "Sasha", activity: "Singing", gender: "Female"},
    {name: "Prince", activity: "Football", gender: "Male"},
    {name: "Jeff", activity: "Bowling", gender: "Male"},
    {name: "Diana", activity: "Tennis", gender: "Female"},

];

let x =  arr.filter(function(arr) {
    return arr.activity == "Swimming";
  });

console.log(x);


//QUESTION 4: Traverse through an array (either number or string array) and display each value with their index position using Array.map method


const arr = ["Sincere", "Maurice", "Michelle", "Aaliyah", "Brittany",];

arr.map((arr, index) => console.log(`The ${index} is ${arr}`));
