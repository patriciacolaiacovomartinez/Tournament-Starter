//select Elements
var teams = document.querySelectorAll(".team")
var spot1 = document.querySelector(".opp1")
var spot2 = document.querySelector(".opp2")
var play = document.querySelector(".play")
var playing = document.querySelectorAll(".playing")
var vs = document.querySelector(".vs")
var win = document.querySelector(".winner")

//game states
var round = 1
var match = 0
var place = "player1"
var currentPlayers = []
var x = 0;
var winner

var rounds = {
  round1: [
    {player1: teams[0], player2: teams[1], spot: "spot9"},
    {player1: teams[2], player2: teams[3], spot: "spot10"},
    {player1: teams[4], player2: teams[5], spot: "spot11"},
    {player1: teams[6], player2: teams[7], spot: "spot12"}
  ],
  round2:[
    {player1: "", player2: "", spot: "spot13"},
    {player1: "", player2: "", spot: "spot14"}
  ],
  round3:[
    {player1: "", player2: "", spot: "spot15"}
  ],
  round4:[
    {player1: ""}
  ]
}

//function definitions
function returnToOriginal(){
  setTimeout(function(){
    win.classList.toggle("hide")
    vs.classList.toggle("hide")
    spot1.textContent = ""
    spot2.textContent = ""
    teams.forEach(function(team, i){
      team.classList = `team spot${i+1}`
    })
    round = 1
    match = 0
    place = "player1"
    currentPlayers = []
    x = 0;
    setPlayers()
    playing.forEach(function(p){
      p.classList.toggle("hide")
    })
  }, 3000)
}
function gameOver(){
  playing.forEach(function(p){
    p.classList.toggle("hide")
  })
  vs.classList.toggle("hide")
  win.classList.toggle("hide")
  returnToOriginal()
}
function setPlayers(){
  currentPlayers = [rounds[`round${round}`][match].player1, rounds[`round${round}`][match].player2 ]
  playing.forEach(function(p, i){
    p.textContent = currentPlayers[i].dataset.name
  })
}
function changePlayer(){
  if(place === "player1"){
    place = "player2"
  } else {
    place = "player1"
    x++
  }
  setPlayers()
}

function nextMatch(){
  round++
  match = 0
  changePlayer()
  return 
}

function changeMatch(){
  console.log(match, x)
  if(round == 3){
    gameOver()
    return 
  }
  if(match >= rounds[`round${round}`].length-1){
    nextMatch()
    x = 0
    return
  }
  match++
  changePlayer()
  return
}

function playGame(round, match, place){
  var score1 = Math.random()
  var score2 = Math.random()
  
  if(score1 > score2){
    spot1.textContent = Math.ceil(score1*7)
    spot2.textContent = Math.ceil(score2*7)-1
    rounds[`round${round+1}`][x][place] = currentPlayers[0]
  }
  if(score1 < score2){
    spot2.textContent = Math.ceil(score2*7)
    spot1.textContent = Math.ceil(score1*7)-1
    rounds[`round${round+1}`][x][place] = currentPlayers[1]
  }

  return rounds[`round${round+1}`][x][place]
}

function moveTeam(winner, spot){
  var oldSpot = winner.classList[1]
  winner.classList.toggle(oldSpot)
  winner.classList.toggle(spot)
}

//Event Listeners
play.addEventListener("click", function(e){
  winner = playGame(round, match, place)
  moveTeam(winner, rounds[`round${round}`][match]["spot"])
  changeMatch()
})

setPlayers()