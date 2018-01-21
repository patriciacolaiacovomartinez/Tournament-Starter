//select Elements from here, I kept the teams array because that can be confusing
var teams = setTeams(getTeamsArray())
var play = document.querySelector(".play")
var playing = document.querySelectorAll(".playing")

//game states
var round = 1
var match = 0
var place = "player1"
var currentPlayers = []
var x = 0;
var winner
var rounds = createRounds(teams)

//function definitions
function toggle(elem, tog){
  elem.classList.toggle(tog)
}

//This function puts the teams in the container div innerHTML 
function setTeams(teamsArray){
  //Reset the containers InnerHTML so that all the teams are gone
  //Create a temp array so that it holds the removed elements from the holder array
  var length = teamsArray.length-1
  for(var i=length; i>(length-8); i--){
    var random = Math.floor(Math.random()*(i+1))
    //Add the element to the teamContainer using InnerHTML and select the element by using the random number to grab from the teamsArray. Once you are done push the selected element into the temp array and remove the element from the teamsArray by using the function splice
  }
  return document.querySelectorAll('.team')
}
//This simply returns an object of arrays to hold the places of the teams as the go through each round
function createRounds(teams){
  return {
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
}
//This function should append the classes that will set each team in its appropriate spots
function setSpots(teams){
  //Use a forEach loop to loop over the teams array and pass in a function that calls the toggle function. The first parameter should be teams[index] and the second parameter should say `spot${index+1}`.
  play.disabled = false
}

/*Function you need to create to finish this app:
  changePlayer()
  nextMatch()
  gameOver()
  returnToOriginal()

*/

//This function set the players who will be currently playing
function setPlayers(){
  currentPlayers = [rounds[`round${round}`][match].player1, rounds[`round${round}`][match].player2 ]
  playing.forEach(function(p, i){
    //Uncomment below when the teams are set on the screen
    //p.textContent = currentPlayers[i].dataset.name
  })
}

function changeMatch(){
  // If round equal 3 call gameOver function then return. 
  // If the last match of the round is played call the nextMatch(), set x back to 0, then return
  // At the bottom of the function, Increment match then call the changePlayer() function
}

//changes the position of the winner
function moveTeam(winner, spot){
  var oldSpot = winner.classList[1]
  //Change the winner from its "oldSpot" to its new spot.
}

//sets the scores 
function playGame(round, match, place){
  var score1 = Math.random()
  var score2 = Math.random()
  
  if(score1 > score2){
    //Set the scores to their appropriate places and then move the winner(team1) into the next round
  }
  if(score1 < score2){
    //Set the scores to their appropriate places and then move the winner(team2) into the next round
  }

  //return the winner
}

//Event Listeners
play.addEventListener("click", function(e){
  winner = playGame(round, match, place)
  moveTeam(/* Set parameters here */)
  changeMatch()
})

setSpots(teams)
setPlayers()