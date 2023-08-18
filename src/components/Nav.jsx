import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
export default function Nav({onSearch}) {


    return(
        
        <div>
            <div>
                <ul>
                    <li>
                         <Link to="/home">Home</Link>
                    </li>
                    <li>
                         <Link to="/about">About</Link>
                    </li>
                    <li>
                         <Link to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </div>
        
            <SearchBar onSearch={onSearch} />
        </div>
    )
}