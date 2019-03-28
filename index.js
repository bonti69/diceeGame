function randomNumber(){
  var random = Math.random() * 6;
  random = Math.floor(random) + 1;
  return random;
}

function numToImg(rand){
  var title= "images/dice" + rand + ".png";
  return title;
}

function changeImg (n,nameImg){
    img = ".img" + n;
    document.querySelector(img).setAttribute("src",nameImg);
}

// the output of the function is a numerical value. 1= pplayer 1; 2= player 2; 3= draw.
function decreteWinner(a,b){
  if(a>b){
    return 1;
  }else if(a<b){
    return 2;
  }else{
    return 3;
  }
}

function refreshWinner(result){
  if (result===1){
    document.querySelector("h1").innerHTML = "🚩 Player 1 won!";
  }else if(result===2){
    document.querySelector("h1").innerHTML = "Player 2 won! 🚩";
  }else{
    document.querySelector("h1").innerHTML = "Draw!";
  }
}



value1 = randomNumber();
value2 = randomNumber();
title1 = numToImg(value1);
title2 = numToImg(value2);
changeImg(1,title1);
changeImg(2,title2);
var winner = decreteWinner(value1,value2);
refreshWinner(winner);
