// alert("Hello Master!");
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSrc = "./" + randomDiceImage;
document.querySelector(".img1").setAttribute("src", randomImageSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSrc = "./" + randomDiceImage;
document.querySelector(".img2").setAttribute("src", randomImageSrc);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎉Player1 wins🎉";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "🎉Player2 wins🎉";
} else {
  document.querySelector("h1").innerHTML = "Its a Draw!";
  document.querySelector("body").style.backgroundColor = "tomato";
}
