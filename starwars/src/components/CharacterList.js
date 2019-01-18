import React from 'react';
import Character from './Character';
import './StarWars.css';

function CharacterList(props) {
    return (
        <div>
            {props.chars.map(person => {
               return <Character key={person.created} char={person} />
            })}
        </div>
    );
}

export default CharacterList;