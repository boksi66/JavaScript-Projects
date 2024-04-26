
function full_Sentence () {

var part_1 = "I have ";
var part_2 = "made this ";
var part_3 = "into a complete ";
var part_4 = "sentence.";
var whole_sentence = part_1.concat (part_2, part_3, part_4); 
document.getElementById("Concatenate").innerHTML = whole_sentence;
}
// Slice Method
function slice_Method () {
var Sentence = "All work and no play makes Johnny a dull boy."; 
var Section = Sentence.slice (27,33);
document.getElementById("Slice").innerHTML = Section;
}
//Utilise UpperCase() method
function myFunction() {
    let text = document.getElementById("demo").innerHTML;
    document.getElementById("demo").innerHTML =
    text.toLowerCase();
  }
// search() Method
let text = "Please locate where 'locate' occurs!";
let index = text.search("locate");
document.getElementById("evry").innerHTML = index;
// number method to string()
let x = 123;
document.getElementById("demo_numbers").innerHTML =
  x.toString() + "<br>" +
   (123).toString() + "<br>" +
   (100 + 23).toString();

//toPrecision() Method
let b = 9.656;
document.getElementById("exact_number").innerHTML = 
  b.toPrecision() + "<br>" +
  b.toPrecision(2) + "<br>" +
  b.toPrecision(4) + "<br>" +
  b.toPrecision(6);
// The toFixed() Method
  let c = 9.656;
document.getElementById("fix").innerHTML =
  c.toFixed(0) + "<br>" +
  c.toFixed(2) + "<br>" +
  c.toFixed(4) + "<br>" +
  c.toFixed(6); 
//The valueOf() Method
  let d = 123;
  document.getElementById("val").innerHTML = 
  d.valueOf() + "<br>" +
  (123).valueOf() + "<br>" +
  (100 + 23).valueOf();