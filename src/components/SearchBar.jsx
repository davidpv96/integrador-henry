import  { useState } from 'react';

export default function SearchBar(props) {
   console.log(props)
   const [Id ,setId] = useState('');

   function handleChange(e){
      e.preventDefault();
      setId(e.target.value);

   }
   return (
      <div>
          <input 
           type='search' 
           value={Id}
           onChange={handleChange}
          
          />
          
         <button onClick={() => props.onSearch(Id)}>Agregar</button> 
      </div>
   );
}
