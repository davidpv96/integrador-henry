import { connect } from 'react-redux';
import Card from './Card';
export function Favorites({favoriteCharacters}) {
  

    console.log(favoriteCharacters)

    return(
        
        <div>
        
      </div>
    )
}
const mapStateToProps = (state) => {
    return {
      favoriteCharacters: state.myFavorites
      // Otros campos de estado si los tienes
    };
  };
export default connect(mapStateToProps)(Favorites);

