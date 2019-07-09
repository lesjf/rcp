import React, { Component } from 'react';
import PlayerCard from './PlayerCard'


class Game extends Component {
  constructor() {
    super();
    this.signs= ["rock", "scissors", "paper"]
    this.state= {
      playerOne: "rock",
      playerTwo: "scissors"
    }
  }

  playGame = () => {
    // methods here to create functionality
  this.setState({
    playerOne: this.signs[Math.floor(Math.random() * 3)],
    playerTwo: this.signs[Math.floor(Math.random() * 3)],
  })
  }
  decideWinner = () => {
   const playerOne= this.state.playerOne;
   const playerTwo = this.state.playerTwo;
   
   if (playerOne === playerTwo) {
    return "It's a tie"

   }
   else if ((playerOne === "rock" && playerTwo === scissors)||
   )
    
  }
  render() {
    return (
      <div className="style">  
      <div>
      <PlayerCard sign= {this.state.playerOne}  />
      <PlayerCard sign= {this.state.playerTwo} />
      </div>
    <div>
     Put the Playercard components here
    </div>
      <div className="winner">this.decideWinner()</div>
      <button type="button"onClick={this.playGame} >Play the Game</button>
  </div >
      )


    

    if choice1 === "rock" 
        choice 2 ===  "scissors"
return "winner"
if choice2 === "paper"
return "winner"


  

export default Game;


























