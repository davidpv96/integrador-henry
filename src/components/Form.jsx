import { useState } from "react";
import validate from "../utils/validation";


const Form = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  /*
  - La siguiente función captura del evento onChange de cualquier input, su nombre("name" por eso se debe definir para identificar el input)
    y su valor("value").
  - [property]:value es una notacion de bracket. La usamos porque en nuestro estado se maneja un objeto con la siguiente forma:
      { email:'',
        password:'',
      }*/
  const handleChange = (event) => {
    const property = event.target.name; //email o password
    const value = event.target.value; //lo que se escriba en "email" o lo que se escriba en "password"
    setUserData({
      ...userData,
      [property]: value,
    });  //actualiza userData
    setErrors(validate({
      ...userData,
      [property]: value
    })); //valida errors y actualiza
  };


  
  /* En la siguiente función, la sentencia event.preventDefault() evita que  recargue nuevamente la pagina al presionar submit,
  evitando asi este comportamiento que por default ocurre solo en los formularios*/
  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  }

  return (
    <div className=''>
      <form  action="" onSubmit={handleSubmit}>

        
        <label  htmlFor="">Email:</label>
        <input
          type="email"
          value={userData.email}
          name="email"
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <hr className/>

        <label className htmlFor="">Password:</label>
        <input
          type="password"
          value={userData.password}
          name="password"
          onChange={handleChange}
        />
        <p>{errors.password}</p>



        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
// Propiedad name requerida en los inputs para poder idetificar esos campos a trabajar

export default Form;
