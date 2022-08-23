

const colorArray = ["red", "green", "teal", "orange"];
const button = document.getElementById("submit");
const color = document.getElementById("color");

button.addEventListener("click", function(){
    const number = getRandomNumber();
    console.log(number)
    document.body.style.backgroundColor= colorArray[number];
});

function getRandomNumber(){
return Math.floor(Math.random()*colorArray.length);

}