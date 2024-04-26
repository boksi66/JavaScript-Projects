// Globar variable
var X = 10;
function Add_numbers_1() {
}
document.write (20 + X + "<br>");
function Add_numbers_2() {
}
document.write(X + 100);
Add_numbers_1();
Add_numbers_2();

// Local variable
function Add_numbers_1() {
}
var X = 10;
document.write (20+ X + "<br>");
function Add_numbers_2() {
document.write (X + 100);
}
Add_numbers_1(); Add_numbers_2();

// function with an error in it
function Add_numbers_1() { var X = 10;
}
console.log(15 + X);
function Add_numbers_2() {
}
console.log(X + 100);
Add_numbers_1();
Add_numbers_2();

function get_Date() {
    if(new Date().getHours()<18) {
        document.getElementById("Greeting").innerHTML="How are you today?";
    }
}
//Else Assignment
// Height Function implementation
function Height_Function() {
    var height = document.getElementById("Height").value;
    var heightMessage;
  
    if (height >= 180) {
      heightMessage = "You are tall!";
    } else {
      heightMessage = "You are short!";
    }
  
    document.getElementById("Height_Message").innerHTML = heightMessage;
  }
  //Else if assignment
  
function Time_function () {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
    Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time <18) {
    Reply = "It is afternoon.";
    }
    else {
    Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML= Reply;
    }


