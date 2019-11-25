import React from 'react';

const CharacterDetail = (props) => {
    if(!props.character) return null
    return(
        <div>
            <h3>
                Character Name: {props.character.name}
            </h3>
            {props.character.house &&
            <h3>
                Character House: {props.character.house}
            </h3>
            }
            {props.character.patronus &&
            <h3>
                Character Patronus: {props.character.patronus}
            </h3>
            }
            <img src={props.character.image} alt={props.character.name}/>
        </div>
    )
}
export default CharacterDetail;