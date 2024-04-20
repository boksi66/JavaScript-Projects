
function Ride_Function() {
    var Height, Can_Ride;
    Height= document.getElementById("Height").value;
    Can_Ride=(Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride  + " to ride."; 

}

function Vehicle (Make, Model, Year, Color) {
    this. Vehicle_Make
    Make;
    this. Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
    }
    var Jack = new Vehicle ("Dodge", "Viper", 2020, "Red");
    var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black"); 
    var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");
    function myFunction () {
    
    document.getElementById("New_and_This").innerHTML =
    "Erik drives a " + Erik. Vehicle_Color + "-colored " + Erik. Vehicle_Model + 
    "manufactured in " + Erik. Vehicle_Year;
}
// Outer function
function count_Function() {
    // Call the inner function and set the innerHTML of "Counting" element to the returned value
    document.getElementById("Counting").innerHTML = Count();
  }
  
  // Inner function
  function Count() {
    // Starting point variable
    var Starting_point = 9;
  
    // Inner nested function to increment Starting_point
    function Plus_one() {
      Starting_point += 1;
    }
  
    // Call Plus_one function to increment Starting_point
    Plus_one();
  
    // Return the incremented value of Starting_point
    return Starting_point;
  }