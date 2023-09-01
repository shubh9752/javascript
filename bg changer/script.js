const colors = ["green", "red", "blue", "yellow", "orange","purple"];
var color = document.querySelector('.color');
var button = document.querySelector('.change')

button.addEventListener("click",function (){
    var finalColor=colors[randomColor()];
    document.body.style.background=finalColor;
    color.textContent=finalColor;
    function randomColor() {
        return Math.floor(Math.random() * colors.length);
        }
})