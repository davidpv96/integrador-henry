import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Detail() {
  
    const [character, setCharacter] = useState({});
    const {id}=useParams()
   

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
         <h2>Name:{character.name}</h2>
         <h2>status:{character.status}</h2>
         <h2>species:{character.species}</h2>
         <h2>gender:{character.gender}</h2>
         <h2>origin:{character.origin ? character.origin.name:""}</h2>
         
         
         <img src={character.image} alt='' /> 
        </div>
    );
 }