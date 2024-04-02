//JavaScript function to perform dictonary
function my_Dictionary() {
    var Vehicle= {
        Type:"Sedan",
        Manufacture:"Audy",
        Model:"R8",
        Color:"Silver",
    };
    delete Type.Model;
    document.getElementById("Dictionary").innerHTML="Type,Model";
    
} 