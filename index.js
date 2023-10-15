const mybody = document.getElementById("mybody");
const btn = document.getElementById("btn");
const name = document.getElementById("name");
var colors = ["Blue", "Red", "Green", "Yellow", "Orange", "Purple", "Brown", "Pink", "Grey", "Gold", "Tan","Violet", "Indigo", "Teal", "Turquoise"];
btn.addEventListener("click", function(){
    var random_index = Math.floor(Math.random()*14);
    mybody.style.backgroundColor = colors[random_index];
    document.getElementById("name").innerHTML = colors[random_index];
});