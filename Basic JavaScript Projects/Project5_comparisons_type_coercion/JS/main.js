// Define a variable
var myVariable = 42;

// Display the data type of the variable using document.write()
document.write("The data type of myVariable is: " + typeof myVariable + "<br><br>") ;


// Write a large enough number to an HTML element with id "largeNumberDisplay"
document.getElementById("largeNumberDisplay").innerHTML = 1e309; 
      
// Write a negative number to an HTML element with id "negativeNumberDisplay"
document.getElementById("negativeNumberDisplay").innerHTML = -1e309; 

//Use boolean logic to compare two numbers
document.getElementById("logicBoolean").innerHTML = 22<22 + "<br>";

// Use console.log() Method to show resoult on console
console.log(22+21  + "<br>");

// Evaluate an expression that results in false
var isFalse = (3 > 5);

// Log the result to the console
console.log(isFalse + "<br>");

// Perform comperation with false resoult
document.write(289==277 );
document.write("<br><br>");
document.write(12==12);
document.write("<br><br>");

// Return true by ensuring to match the data type and value
document.write(18/2/1888===18/2/1888);
document.write("<br><br>");

// Return false by writing a different data type and different value.
document.write("2024"===2025);
document.write("<br><br>");

//Return false by writing a different data type but the same value for both.
document.write("2024"===2024);
document.write("<br><br>");

// Return false by writing the same data type but a different value for both.
document.write(1254===5498789);
document.write("<br><br>");

//  utilize the AND operator to display true and false
document.write(7>6 && 4<8);
document.write("<br><br>");
document.write(8>7&&7>8);
document.write("<br><br>");

// Utilize the OR operator to display true and false
document.write(12>11||12>15);
document.write("<br><br>");
document.write(9>66||88<65);

// utilize the NOT operator to display true and false
function not_Function() {
    document.getElementById("Not").innerHTML=!(20>10);
}





