import React from 'react';
import './StarWars.css';

// Character takes in data from an object passed down from CharacterList. 
// It then renders that data onto the UI.
function Character(props) {
    return (
        <div className="character">
            <div className="character-name">{props.char.name}</div>
            <div className="char-props-container">
                <li className="character-property">Gender: {props.char.gender.toUpperCase()}</li>
                <li className="character-property">Eye Color: {props.char.eye_color}</li>
            </div>
        </div>
    );
}

export default Character;