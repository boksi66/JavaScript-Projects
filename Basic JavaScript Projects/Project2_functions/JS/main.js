// Define a  first function
function greet() {
    // Assign a variable
    var message = "Hello, world!";
    
    // Get the element with id "output"
    var outputElement = document.getElementById("output");
    
    // Update the content of the element
    outputElement.textContent = message;
}
// Define a secund function
function myFunction() {
    var sentance ="I am learning";
    sentance +=" a lot from this book!";
    document.getElementById("concatenate").innerHTML = sentance;
}

// Call the function
greet();
