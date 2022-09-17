import {useState} from "react";
import {Character} from "./Character";

export default function Characters(){

    let [characters,setCharacters]=useState([])

    fetch(`https://rickandmortyapi.com/api/character`)
        .then(value => value.json())
        .then(value => {
            setCharacters(value.results.splice(0,9))
        });
    return(<div>
        {characters.map(character=>(<Character key={character.id} item={character}/>))}
    </div>)

}