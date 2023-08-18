import { useState } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import Detail from './components/Detail.jsx';
import About from './components/About.jsx';
import Form from './components/Form.jsx'
import Favorites from './components/Favorites';



function App() {

   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false);
   const navigate = useNavigate();


   const EMAIL = 'davidpv96@hotmail.com'
   const PASSWORD = '123456'
   
   const login = (userData) => {
     if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
     }else{
       alert('Email o contraseña incorrecta')
     }
   }
 
  

   function onClose(id){
      const updatedCharacters = characters.filter(character => character.id !== id);
      setCharacters(updatedCharacters);

   }
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   function Navigation() {
      const location = useLocation();
  
      // Verifica si la ubicación actual es diferente de la vista del formulario (/)
      const isNotFormPage = location.pathname !== '/';
  
      // Renderiza el componente de navegación si no estás en la vista del formulario
      return (
          isNotFormPage && (
              <Nav onSearch={onSearch} />
          )
      );
  }
   

   
   return (
     
      <div className='App'>

         <Navigation />
         <Routes>
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />          
          <Route path='/' element={<Form login={login} />} />
          
        </Routes>

        
      </div>
      
   );
}

export default App;
