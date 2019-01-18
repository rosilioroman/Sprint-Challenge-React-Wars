import React from 'react';
import Character from './Character';
import './StarWars.css';

// CharacterList maps over the starwarsChars array and creates a Character component for every object in that array.
// It passes down the data from each object as a prop for the Character component to use
function CharacterList(props) {
    return (
        <div className="character-list">
            {props.chars.map(person => {
               return <Character key={person.created} char={person} />
            })}
        </div>
    );
}

export default CharacterList;