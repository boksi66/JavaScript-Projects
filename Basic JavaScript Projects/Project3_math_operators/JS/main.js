
// JavaScript function to perform addition
function additionFunction() {
    var addition = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition ;
}
// JavaScript function to perform Subtraction
function SubtractionFunction() {
    var subtraction = 5-2;
    document.getElementById("Math_subtraction").innerHTML ="5-2=" + subtraction ;

}
// JavaScript function to perform Multiplication
function multiplication() {
    var simple_Math = 6 * 8;
    document.getElementById("Math_multiplication").innerHTML ="6 x 8 =" + simple_Math ;
}
// JavaScript function to perform Division
function division() {
    var simple_Math = 48/6;
    document.getElementById("Math_division").innerHTML ="48 / 6 =" + simple_Math ;

}
// JavaScrip function to perform multiple operations
function more_Math() {
    var simple_Math =(1+2)*10/2-5;
    document.getElementById("Multiple_operations").innerHTML="1 plus 2,multiplied by 10,divided in half and then subtracted by 5 =" + simple_Math;
}
// JavaScript function to perfprm Modulus Operation
function Modulus_Operation() {
    var simple_Math = 25 % 6;
    document.getElementById("Modulus_Operator").innerHTML ="When you divide 25 by 6 you have areminder of:" + simple_Math;

}
//JavaScript function to perform negation operator
function negation_operator() {
    var x =10;
    document.getElementById("Unary_operator").innerHTML = -x;
}
//JavaScript function to perform increment
function Increaser() {
var X = 5;
X++;
document.getElementById("increaser").innerHTML= + X++;
}

function Decreaser() {
var X = 5.25;
X--;
document.getElementById("decreaser").innerHTML= + X--;
}
// Return random number
window.alert(Math.random() * 100);