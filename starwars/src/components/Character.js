import React from 'react';
import './StarWars.css';

// Character takes in data from an object passed down from CharacterList. 
// It then renders that data onto the UI.
function Character(props) {
    return (
        <div className="character">
            {props.char.name}
            <li className="character-property">{props.char.gender}</li>
            <li className="character-property">{props.char.eye_color}</li>
        </div>
    );
}

export default Character;