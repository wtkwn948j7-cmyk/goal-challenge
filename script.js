// script.js – Enhanced with modes, 500+ players, new difficulty logic
let target = 1000;
let score = 0;
let difficulty = "easy";
let lives = 15;
let x2Left = 1;
let x5Left = 1;
let currentPlayer = null;
let usedPlayers = [];
let gameMode = "classic";    // classic, survival, timeattack
let timerInterval = null;
let timeLeft = 60;
let combo = 0;
let streak = 0;
let maxStreak = 0;
let totalAttempts = 0;
let correctAttempts = 0;
let gameActive = true;

const menu = document.getElementById("menu");
const game = document.getElementById("game");
const playerName = document.getElementById("playerName");
const playerImage = document.getElementById("playerImage");
const targetText = document.getElementById("targetText");
const scoreText = document.getElementById("scoreText");
const livesText = document.getElementById("livesText");
const boostText = document.getElementById("boostText");
const progressBar = document.getElementById("progressBar");
const modeDisplay = document.getElementById("modeDisplay");
const goalButtons = document.querySelectorAll(".goal");
const diffButtons = document.querySelectorAll(".difficulty");
const modeButtons = document.querySelectorAll(".mode");
const startBtn = document.getElementById("start");
const clubBtn = document.getElementById("clubBtn");
const countryBtn = document.getElementById("countryBtn");
const uclBtn = document.getElementById("uclBtn");
const leagueBtn = document.getElementById("leagueBtn");
const x2Btn = document.getElementById("x2Btn");
const x5Btn = document.getElementById("x5Btn");

// --- Mode selection ---
modeButtons.forEach(btn => {
  btn.onclick = () => {
    modeButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    gameMode = btn.dataset.mode;
    // Update lives based on mode
    const map = { easy: 15, medium: 12, hard: 10, impossible: 8 };
    lives = map[difficulty] || 15;
    if (gameMode === "survival") lives += 5;
    if (gameMode === "timeattack") lives = 5;
  };
});

// --- Goal selection ---
goalButtons.forEach(btn => {
  btn.onclick = () => {
    goalButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    target = Number(btn.dataset.goal);
  };
});

// --- Difficulty selection ---
diffButtons.forEach(btn => {
  btn.onclick = () => {
    diffButtons.forEach(b => b.classList.remove("selected"));
    btn.classList.add("selected");
    difficulty = btn.dataset.difficulty;
    const map = { easy: 15, medium: 12, hard: 10, impossible: 8 };
    lives = map[difficulty] || 15;
    if (gameMode === "survival") lives += 5;
    if (gameMode === "timeattack") lives = 5;
  };
});

// --- Start game ---
startBtn.onclick = () => {
  menu.style.display = "none";
  game.style.display = "block";
  score = 0;
  usedPlayers = [];
  x2Left = 1;
  x5Left = 1;
  combo = 0;
  streak = 0;
  maxStreak = 0;
  totalAttempts = 0;
  correctAttempts = 0;
  gameActive = true;
  
  const map = { easy: 15, medium: 12, hard: 10, impossible: 8 };
  lives = map[difficulty] || 15;
  if (gameMode === "survival") lives += 5;
  if (gameMode === "timeattack") { lives = 5; timeLeft = 45; }

  modeDisplay.textContent = `📌 ${gameMode.toUpperCase()}  |  ${difficulty.toUpperCase()}`;
  updateUI();
  nextPlayer();

  if (gameMode === "timeattack") {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      timeLeft--;
      document.getElementById("livesText").textContent = `⏱️ ${timeLeft}s  |  ❤️ ${lives}`;
      if (timeLeft <= 0) { endGame("⏰ TIME'S UP!"); }
    }, 1000);
  }
};

// --- Next player ---
function nextPlayer() {
  if (!gameActive) return;
  if (usedPlayers.length >= players.length) {
    endGame("🎉 YOU COMPLETED ALL PLAYERS!", true);
    return;
  }
  let random;
  let attempts = 0;
  do {
    random = Math.floor(Math.random() * players.length);
    attempts++;
    if (attempts > 1000) break;
  } while (usedPlayers.includes(random));
  usedPlayers.push(random);
  currentPlayer = players[random];
  playerName.innerHTML = currentPlayer.name;
  playerImage.src = currentPlayer.image;
}

// --- Update UI ---
function updateUI() {
  targetText.innerHTML = `🎯 Target: ${target}`;
  scoreText.innerHTML = `⚽ ${score} / ${target}`;
  if (gameMode === "timeattack") {
    livesText.innerHTML = `⏱️ ${timeLeft}s  |  ❤️ ${lives}`;
  } else {
    livesText.innerHTML = `❤️ Lives: ${lives}`;
  }
  boostText.innerHTML = `🔥 x2: ${x2Left}  |  ⚡ x5: ${x5Left}  |  🔥 Streak: ${streak}`;
  let percent = Math.min((score / target) * 100, 100);
  progressBar.style.width = percent + "%";
}

// --- Add goals with combo & streak ---
function addGoals(goals) {
  if (!gameActive || !currentPlayer) return;
  totalAttempts++;
  if (goals > 0) {
    combo++;
    streak++;
    if (streak > maxStreak) maxStreak = streak;
    correctAttempts++;
    let bonus = 1;
    if (streak >= 5) bonus = 1.5;
    if (streak >= 10) bonus = 2;
    const finalGoals = Math.floor(goals * bonus);
    score += finalGoals;
    // survival: heal on correct
    if (gameMode === "survival" && lives < 20) lives = Math.min(lives + 1, 20);
  } else {
    combo = 0;
    streak = 0;
  }

  lives--;
  if (gameMode === "timeattack") {
    // time attack: correct gives extra time
    if (goals > 0) timeLeft = Math.min(timeLeft + 3, 60);
    else timeLeft = Math.max(timeLeft - 5, 5);
  }

  updateUI();

  if (score >= target) { endGame("🏆 YOU WIN!", true); return; }
  if (lives <= 0) { endGame("💀 GAME OVER"); return; }
  if (gameMode === "timeattack" && timeLeft <= 0) { endGame("⏰ TIME'S UP!"); return; }

  nextPlayer();
}

// --- End game ---
function endGame(msg, win = false) {
  if (!gameActive) return;
  gameActive = false;
  if (timerInterval) clearInterval(timerInterval);
  const acc = totalAttempts > 0 ? Math.round((correctAttempts / totalAttempts) * 100) : 0;
  alert(`${msg}\n\n📊 Stats:\nScore: ${score}\nStreak: ${maxStreak}\nAccuracy: ${acc}%\nPlayers seen: ${usedPlayers.length}`);
  location.reload();
}

// --- Button handlers ---
clubBtn.onclick = () => { if (gameActive) addGoals(currentPlayer.club); };
countryBtn.onclick = () => { if (gameActive) addGoals(currentPlayer.country); };
uclBtn.onclick = () => { if (gameActive) addGoals(currentPlayer.ucl); };
leagueBtn.onclick = () => { if (gameActive) addGoals(currentPlayer.league); };

x2Btn.onclick = () => {
  if (x2Left <= 0 || !gameActive) return;
  x2Left--;
  addGoals(currentPlayer.club * 2);
};

x5Btn.onclick = () => {
  if (x5Left <= 0 || !gameActive) return;
  x5Left--;
  addGoals(currentPlayer.club * 5);
};
