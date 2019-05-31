var random1=(Math.floor(Math.random()*6))+1;

var imagename="dice"+random1+".png";
var source="images/"+imagename;
var sel=document.querySelectorAll("img")[0];
sel.setAttribute("src", source);


var random2=(Math.floor(Math.random()*6))+1;

var imagename2="dice"+random2+".png";
var source2="images/"+imagename2;
var sel=document.querySelectorAll("img")[1];
sel.setAttribute("src", source2);

if(random1 > random2){
document.querySelector("h1").innerHTML="Player 1 Wins 🎉";
}
else if(random1 < random2){
document.querySelector("h1").innerHTML="Player 2 Wins 🎉";
}

else{
document.querySelector("h1").innerHTML="Tie! Roll Again";
}
