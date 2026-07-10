// players.js – 500+ players with real + generated data
const players = [
  // Real players with working images
  { name: "Lionel Messi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Lionel_Messi_2018.jpg/220px-Lionel_Messi_2018.jpg", club: 752, country: 112, ucl: 129, league: 496 },
  { name: "Cristiano Ronaldo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/220px-Cristiano_Ronaldo_2018.jpg", club: 791, country: 138, ucl: 140, league: 539 },
  { name: "Mohamed Salah", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Mohamed_Salah_2018.jpg/220px-Mohamed_Salah_2018.jpg", club: 289, country: 58, ucl: 51, league: 186 },
  { name: "Erling Haaland", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Erling_Haaland_2023.jpg/220px-Erling_Haaland_2023.jpg", club: 321, country: 42, ucl: 49, league: 180 },
  { name: "Robert Lewandowski", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Robert_Lewandowski_2022.jpg/220px-Robert_Lewandowski_2022.jpg", club: 694, country: 85, ucl: 105, league: 383 },
  { name: "Kylian Mbappé", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Kylian_Mbappe_2018.jpg/220px-Kylian_Mbappe_2018.jpg", club: 352, country: 52, ucl: 55, league: 221 },
  { name: "Neymar Jr", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Neymar_2018.jpg/220px-Neymar_2018.jpg", club: 218, country: 77, ucl: 43, league: 142 },
  { name: "Kevin De Bruyne", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Kevin_De_Bruyne_2018.jpg/220px-Kevin_De_Bruyne_2018.jpg", club: 148, country: 28, ucl: 32, league: 98 },
  { name: "Harry Kane", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Harry_Kane_2018.jpg/220px-Harry_Kane_2018.jpg", club: 380, country: 68, ucl: 55, league: 236 },
  { name: "Sadio Mané", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sadio_Mane_2018.jpg/220px-Sadio_Mane_2018.jpg", club: 180, country: 42, ucl: 33, league: 121 },
  { name: "Virgil van Dijk", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Virgil_van_Dijk_2018.jpg/220px-Virgil_van_Dijk_2018.jpg", club: 40, country: 9, ucl: 8, league: 28 },
  { name: "Thiago Alcântara", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Thiago_Alcantara_2019.jpg/220px-Thiago_Alcantara_2019.jpg", club: 35, country: 5, ucl: 12, league: 22 },
  { name: "Joshua Kimmich", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Joshua_Kimmich_2018.jpg/220px-Joshua_Kimmich_2018.jpg", club: 55, country: 12, ucl: 16, league: 38 },
  { name: "Son Heung-min", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Son_Heung-min_2018.jpg/220px-Son_Heung-min_2018.jpg", club: 185, country: 41, ucl: 24, league: 130 },
  { name: "Diogo Jota", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Diogo_Jota_2020.jpg/220px-Diogo_Jota_2020.jpg", club: 110, country: 18, ucl: 24, league: 68 },
  { name: "Phil Foden", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Phil_Foden_2021.jpg/220px-Phil_Foden_2021.jpg", club: 92, country: 13, ucl: 20, league: 62 },
  { name: "Jude Bellingham", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Jude_Bellingham_2022.jpg/220px-Jude_Bellingham_2022.jpg", club: 78, country: 12, ucl: 14, league: 48 },
  { name: "Florian Wirtz", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Florian_Wirtz_2022.jpg/220px-Florian_Wirtz_2022.jpg", club: 45, country: 8, ucl: 7, league: 29 },
  { name: "Jamal Musiala", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Jamal_Musiala_2022.jpg/220px-Jamal_Musiala_2022.jpg", club: 58, country: 6, ucl: 11, league: 40 },
  { name: "Gavi", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Gavi_2021.jpg/220px-Gavi_2021.jpg", club: 28, country: 5, ucl: 8, league: 17 },
  { name: "Pedri", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Pedri_2021.jpg/220px-Pedri_2021.jpg", club: 30, country: 4, ucl: 9, league: 18 },
  { name: "Vinicius Jr", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Vinicius_Junior_2022.jpg/220px-Vinicius_Junior_2022.jpg", club: 220, country: 32, ucl: 48, league: 156 },
  { name: "Rodrygo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Rodrygo_2022.jpg/220px-Rodrygo_2022.jpg", club: 110, country: 15, ucl: 28, league: 72 },
  { name: "Eduardo Camavinga", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Eduardo_Camavinga_2022.jpg/220px-Eduardo_Camavinga_2022.jpg", club: 22, country: 4, ucl: 8, league: 13 },
  { name: "Aurelien Tchouameni", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Aurelien_Tchouameni_2022.jpg/220px-Aurelien_Tchouameni_2022.jpg", club: 18, country: 3, ucl: 6, league: 11 },
  { name: "Rafael Leão", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Rafael_Leao_2022.jpg/220px-Rafael_Leao_2022.jpg", club: 110, country: 18, ucl: 22, league: 72 },
  { name: "Victor Osimhen", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Victor_Osimhen_2023.jpg/220px-Victor_Osimhen_2023.jpg", club: 135, country: 25, ucl: 18, league: 90 },
  { name: "Khvicha Kvaratskhelia", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Khvicha_Kvaratskhelia_2022.jpg/220px-Khvicha_Kvaratskhelia_2022.jpg", club: 70, country: 14, ucl: 12, league: 44 },
  { name: "Lautaro Martínez", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Lautaro_Martinez_2022.jpg/220px-Lautaro_Martinez_2022.jpg", club: 215, country: 28, ucl: 35, league: 145 },
  { name: "Romelu Lukaku", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Romelu_Lukaku_2018.jpg/220px-Romelu_Lukaku_2018.jpg", club: 365, country: 80, ucl: 42, league: 238 },
  { name: "Marcus Rashford", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Marcus_Rashford_2018.jpg/220px-Marcus_Rashford_2018.jpg", club: 160, country: 22, ucl: 28, league: 112 },
  { name: "Bruno Fernandes", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Bruno_Fernandes_2019.jpg/220px-Bruno_Fernandes_2019.jpg", club: 118, country: 22, ucl: 26, league: 78 },
  { name: "Casemiro", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Casemiro_2018.jpg/220px-Casemiro_2018.jpg", club: 48, country: 8, ucl: 18, league: 30 },
  { name: "Raphaël Varane", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Raphael_Varane_2018.jpg/220px-Raphael_Varane_2018.jpg", club: 18, country: 5, ucl: 8, league: 10 },
  { name: "Alisson Becker", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Alisson_Becker_2018.jpg/220px-Alisson_Becker_2018.jpg", club: 6, country: 2, ucl: 3, league: 4 },
  { name: "Ederson", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Ederson_2018.jpg/220px-Ederson_2018.jpg", club: 5, country: 1, ucl: 2, league: 3 },
  { name: "Thibaut Courtois", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Thibaut_Courtois_2018.jpg/220px-Thibaut_Courtois_2018.jpg", club: 4, country: 1, ucl: 2, league: 3 },
  { name: "Manuel Neuer", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Manuel_Neuer_2018.jpg/220px-Manuel_Neuer_2018.jpg", club: 3, country: 1, ucl: 1, league: 2 },
  { name: "Gianluigi Donnarumma", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Gianluigi_Donnarumma_2019.jpg/220px-Gianluigi_Donnarumma_2019.jpg", club: 2, country: 1, ucl: 1, league: 1 },
  { name: "Mike Maignan", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Mike_Maignan_2019.jpg/220px-Mike_Maignan_2019.jpg", club: 2, country: 1, ucl: 1, league: 1 },
];

// Generate 500+ players with realistic names and stats
const firstNames = ["Marco", "Luis", "André", "Paulo", "Sergio", "Antonio", "David", "James", "Daniel", "Carlos", "Diego", "Ángel", "Mauro", "Federico", "Gonzalo", "Alejandro", "Javier", "Fernando", "Rafael", "Ivan", "Hugo", "Pablo", "Alvaro", "Manuel", "Francisco", "Jose", "Miguel", "Jorge", "Ricardo", "Eduardo", "Roberto", "Mario", "Enzo", "Thiago", "Matias", "Nicolas", "Sebastian", "Felipe", "Cristian", "Andres"];
const lastNames = ["Silva", "Santos", "Rodriguez", "Martinez", "Garcia", "Lopez", "Fernandez", "Gonzalez", "Perez", "Sanchez", "Ramirez", "Torres", "Rivera", "Morales", "Ortiz", "Cruz", "Reyes", "Gutierrez", "Mendoza", "Herrera", "Flores", "Romero", "Alvarez", "Castillo", "Rojas", "Moreno", "Figueroa", "Navarro", "Vargas", "Campos", "Pena", "Suarez", "Diaz", "Gomez", "Jimenez", "Molina", "Ortega", "Ramos", "Delgado", "Ibanez"];
const countries = ["ARG", "BRA", "ESP", "FRA", "ITA", "ENG", "POR", "NED", "GER", "BEL", "CRO", "SEN", "EGY", "NGA", "COL", "URU", "CHI", "MEX", "USA", "CAN", "AUS", "JPN", "KOR", "IRN", "KSA", "MAR", "TUN", "CMR", "GHA", "CIV"];

// Generate random player images using a placeholder service
function getPlayerImage(name) {
  const first = name.split(' ')[0];
  const last = name.split(' ')[1] || '';
  return `https://ui-avatars.com/api/?name=${first}+${last}&size=250&background=2a7de1&color=fff&bold=true`;
}

for (let i = players.length; i < 520; i++) {
  const fn = firstNames[Math.floor(Math.random() * firstNames.length)];
  const ln = lastNames[Math.floor(Math.random() * lastNames.length)];
  const name = `${fn} ${ln}`;
  const country = countries[Math.floor(Math.random() * countries.length)];
  const image = getPlayerImage(name);
  const club = Math.floor(Math.random() * 200) + 20;
  const countryGoals = Math.floor(Math.random() * 40) + 5;
  const ucl = Math.floor(Math.random() * 30) + 2;
  const league = Math.floor(Math.random() * 120) + 10;
  players.push({ name, image, club, country: countryGoals, ucl, league });
}

// shuffle to mix real and generated
for (let i = players.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [players[i], players[j]] = [players[j], players[i]];
}

console.log(`✅ Loaded ${players.length} players!`);
