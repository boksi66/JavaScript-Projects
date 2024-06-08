
var Instruments =["Guitar","Drums","Piano","Bass","Violon","Trumpet","Flute"];
var Content="";
var Y;
function for_Loop () {
    for(Y= 0; Y < Instruments.length; Y++) {Content += Instruments[Y] +"<br>";}
document.getElementById("List_of_instruments").innerHTML= Content;
}

function array_Function() {
    // Define the array
    var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    
    // Get the element by its ID
    var arrayElement = document.getElementById("Array");
    
    // Join the array elements into a string separated by commas
    var arrayContent = instruments.join(", ");
    
    // Display the array content in the HTML element
    arrayElement.innerHTML = arrayContent;
}

function constant_function() {
    const Sports_cars = {type:"saloon",brand:"ford",color:"black"

    }
    Sports_cars.type = "sub";
    Sports_cars.color = "red";
    document.getElementById("Constant").innerHTML = "The type of the car is " +
    Sports_cars.type + " and color for same car is " + Sports_cars.color ;
}
//Let Keyword Assignment
var X = 82;
document.write(X);
{
    let X = 33;
    document.write("<br>" + X);
   
}
document.write("<br>" + X);

// Object Assignment
let car = {
    make: "Dodge",
    model: "Viper",
    year:"2022",
    color:"Blue",
    description: function() {
        return "The car is a " + this.year +" " + this.color + " " +  this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

