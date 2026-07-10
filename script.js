let target = 1000;
let score = 0;

let difficulty = "easy";
let lives = 15;

let x2Left = 1;
let x5Left = 1;

let currentPlayer = null;
let usedPlayers = [];

const menu = document.getElementById("menu");
const game = document.getElementById("game");

const playerName = document.getElementById("playerName");
const playerImage = document.getElementById("playerImage");

const targetText = document.getElementById("targetText");
const scoreText = document.getElementById("scoreText");
const livesText = document.getElementById("livesText");
const boostText = document.getElementById("boostText");
const progressBar = document.getElementById("progressBar");

const goalButtons = document.querySelectorAll(".goal");
const diffButtons = document.querySelectorAll(".difficulty");

const startBtn = document.getElementById("start");

const clubBtn = document.getElementById("clubBtn");
const countryBtn = document.getElementById("countryBtn");
const uclBtn = document.getElementById("uclBtn");
const leagueBtn = document.getElementById("leagueBtn");
const x2Btn = document.getElementById("x2Btn");
const x5Btn = document.getElementById("x5Btn");

goalButtons.forEach(btn => {

    btn.onclick = () => {

        goalButtons.forEach(b => b.classList.remove("selected"));

        btn.classList.add("selected");

        target = Number(btn.dataset.goal);

    }

});

diffButtons.forEach(btn => {

    btn.onclick = () => {

        diffButtons.forEach(b => b.classList.remove("selected"));

        btn.classList.add("selected");

        difficulty = btn.dataset.difficulty;

        switch(difficulty){

            case "easy":
                lives = 15;
                break;

            case "medium":
                lives = 12;
                break;

            case "hard":
                lives = 10;
                break;

            case "impossible":
                lives = 8;
                break;

        }

    }

});

startBtn.onclick = () => {

    menu.style.display = "none";

    game.style.display = "block";

    score = 0;

    usedPlayers = [];

    x2Left = 1;

    x5Left = 1;

    updateUI();

    nextPlayer();

};

function nextPlayer(){

    if(usedPlayers.length >= players.length){

        alert("🎉 خلصت كل اللاعبين!");

        location.reload();

        return;

    }

    let random;

    do{

        random = Math.floor(Math.random()*players.length);

    }while(usedPlayers.includes(random));

    usedPlayers.push(random);

    currentPlayer = players[random];

    playerName.innerHTML = currentPlayer.name;

    playerImage.src = currentPlayer.image;

}

function updateUI(){

    targetText.innerHTML = "🎯 Target : " + target;

    scoreText.innerHTML = "⚽ " + score + " / " + target;

    livesText.innerHTML = "❤️ Lives : " + lives;

    boostText.innerHTML = "🔥 x2: " + x2Left + " | ⚡ x5: " + x5Left;

    let percent = (score/target)*100;

    if(percent>100) percent=100;

    progressBar.style.width = percent + "%";

}

function addGoals(goals){

    score += goals;

    lives--;

    updateUI();

    if(score>=target){

        alert("🏆 YOU WIN!");

        location.reload();

        return;

    }

    if(lives<=0){

        alert("💀 GAME OVER");

        location.reload();

        return;

    }

    nextPlayer();

}

clubBtn.onclick = ()=>addGoals(currentPlayer.club);

countryBtn.onclick = ()=>addGoals(currentPlayer.country);

uclBtn.onclick = ()=>addGoals(currentPlayer.ucl);

leagueBtn.onclick = ()=>addGoals(currentPlayer.league);

x2Btn.onclick = ()=>{

    if(x2Left<=0) return;

    x2Left--;

    addGoals(currentPlayer.club*2);

}

x5Btn.onclick = ()=>{

    if(x5Left<=0) return;

    x5Left--;

    addGoals(currentPlayer.club*5);

}
