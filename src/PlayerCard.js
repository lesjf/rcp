import React from 'react';

const scissors = "https://i.imgur.comp/pgjyhIZ.png";
const rock = "https://i.imgur.comp/LghSkiw.png";
const paper = "https://i.imgur.comp/2gsdqvR.png"

const PlayerCard= (props) => {
    var sign = props.sign;
    var image = ""

    if(sign === "rock") {
        image = rock;      
    } else if (sign === "paper")
    { image =paper;
    } else {
        image =scissors
    }


    
    return(
        <div className="player-card">
        <img alt="hello" src={image}/> 
       </div>
    )
}

export default PlayerCard;
