let target = 1000;
let score = 0;

const goalButtons = document.querySelectorAll(".goal");
const startBtn = document.getElementById("start");

const menu = document.getElementById("menu");
const game = document.getElementById("game");

const targetText = document.getElementById("targetText");
const scoreText = document.getElementById("scoreText");
const progressBar = document.getElementById("progressBar");

goalButtons.forEach(button=>{

button.onclick=()=>{

goalButtons.forEach(b=>b.classList.remove("selected"));

button.classList.add("selected");

target=Number(button.dataset.goal);

}

})

startBtn.onclick=()=>{

menu.style.display="none";

game.style.display="block";

targetText.innerHTML="🎯 Goal : "+target;

updateProgress();

}

function updateProgress(){

scoreText.innerHTML=score+" / "+target;

let percent=(score/target)*100;

progressBar.style.width=percent+"%";

}
