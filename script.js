var randomNumber1 = Math.floor(Math.random()*6 + 1);

// It will select the dice1.png to dice2.png 

var randomDiceImage = "dice"+randomNumber1+".png";

// Source of random images

var randomImageSource = "images/"+randomDiceImage;
// Target left image

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

// For Second Dicee

var randomNumber2 = Math.floor(Math.random()*6 + 1);

var randomImageSource2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// check for the winning condition

if(randomNumber1 > randomNumber2)
    document.querySelector(".result").innerHTML = "🚩 Player 1 Wins!";
else if(randomNumber1 < randomNumber2)    
    document.querySelector(".result").innerHTML = " Player2 Wins! 🚩";
else
document.querySelector(".result").innerHTML ="Draw !!";    