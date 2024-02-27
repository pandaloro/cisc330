// Question 1
let x = 15
let y = (x >= 15) ? "Greater or equal to 15" : "less than 15";
console.log(y);



// Question 2
let peter = {
  name: "Andaloro",
  age: 19,
  city: "Boston"
}
for (let key in peter) {
    if (peter.hasOwnProperty(key)) {
        console.log(key + ": " + peter[key]);
    }
}



// Question 3
let array = [1, 3, 5, 7, 9];

let arraySquared = array.map(value1 => value1 * value1);
console.log(arraySquared);
