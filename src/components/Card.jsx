import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from "react";
function Card({character,onClose,addFav,removeFav,favoriteCharacters}) {
   
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
        setIsFav(false);
        removeFav(character.id);
      } else {
        setIsFav(true);
        addFav(character);
      }
    };

   
    useEffect(() => {
      favoriteCharacters.forEach((fav) => {
         if (fav.id === character.id) {
            setIsFav(true);
         }
      });
   }, [favoriteCharacters]);
  
  
  

   return (
      
      <div>
         <button onClick={onClose}>X</button>
         {
             isFav ? (
                <button onClick={handleFavorite}>❤️</button>
                      ) : (
               <button onClick={handleFavorite}>🤍</button>
                     )
         }
         <Link to={`/detail/${character.id}`} >
            <h3 className="card-name">{character.name}</h3>
         </Link>
         <h2>status:{character.status}</h2>
         <h2>species:{character.species}</h2>
         <h2>gender:{character.gender}</h2>
         <h2>origin:{character.origin.name}</h2>
         <img src={character.image} alt='' /> 

      </div>
   );
}

const mapStateToProps = (state) => {
   return {
     favoriteCharacters: state.myFavorites
     // Otros campos de estado si los tienes
   };
 };

const mapDispatchToProps = {
   addFav,
   removeFav,
 };
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);
