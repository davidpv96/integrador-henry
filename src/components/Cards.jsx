import Card from './Card';

export default function Cards({characters, onClose}) {
   
   
   return (
   
      
      <div>
         {characters.map((character,key)=>
            <Card key={key} character={character} onClose={()=>onClose(character.id)} />
         )}

      </div>
   
   )
}
