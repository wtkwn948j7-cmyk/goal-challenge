let target = 1000;
let score = 0;

let currentPlayer = null;

const menu = document.getElementById("menu");
const game = document.getElementById("game");

const targetText = document.getElementById("targetText");
const scoreText = document.getElementById("scoreText");
const progressBar = document.getElementById("progressBar");

const playerName = document.getElementById("playerName");
const playerImage = document.getElementById("playerImage");

const goalButtons = document.querySelectorAll(".goal");
const startBtn = document.getElementById("start");

goalButtons.forEach(btn=>{

btn.onclick=()=>{

goalButtons.forEach(b=>b.classList.remove("selected"));

btn.classList.add("selected");

target=Number(btn.dataset.goal);

}

})

startBtn.onclick=()=>{

menu.style.display="none";

game.style.display="block";

score=0;

updateUI();

nextPlayer();

}

function randomPlayer(){

return players[Math.floor(Math.random()*players.length)];

}

function nextPlayer(){

currentPlayer=randomPlayer();

playerName.innerHTML=currentPlayer.name;

playerImage.src=currentPlayer.image;

}

function updateUI(){

scoreText.innerHTML=score+" / "+target;

targetText.innerHTML="🎯 Goal : "+target;

let percent=(score/target)*100;

if(percent>100) percent=100;

progressBar.style.width=percent+"%";

}

const buttons=document.querySelectorAll(".choices button");

buttons[0].onclick=()=>addGoals(currentPlayer.club);

buttons[1].onclick=()=>addGoals(currentPlayer.country);

buttons[2].onclick=()=>addGoals(currentPlayer.ucl);

buttons[3].onclick=()=>addGoals(currentPlayer.league);

buttons[4].onclick=()=>addGoals(currentPlayer.club*2);

buttons[5].onclick=()=>addGoals(currentPlayer.club*5);

function addGoals(goals){

score+=goals;

updateUI();

if(score>=target){

setTimeout(()=>{

alert("🏆 You Win!");

location.reload();

},300);

return;

}

nextPlayer();

}
