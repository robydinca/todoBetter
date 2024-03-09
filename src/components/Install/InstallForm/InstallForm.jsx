import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde React Router

function InstallForm() {
  const [formData, setFormData] = useState({
    host: '',
    usuario: '',
    password: '',
    nombreBaseDatos: '',
    puerto: '',
  });

  const navigate = useNavigate(); // Obtiene la función navigate de React Router

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/php/api/config/install.php', formData);
      console.log(response.data);
      // Manejar la respuesta de la API según lo que se necesite hacer

      // Redirigir a RegisterInstall.jsx después de que se complete la instalación
      navigate('/register-install'); // Cambia '/register-install' por la ruta que necesites
    } catch (error) {
      console.error('Error:', error);
      // Manejar errores de la solicitud
    }
  };

  return (
    <div>
      <h1>Instalación para el primer usuario Administrador</h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields con onChange */}
        <input type="text" name="host" placeholder="Host" onChange={handleChange} required />
        <input type="text" name="usuario" placeholder="Usuario" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <input type="text" name="nombreBaseDatos" placeholder="Nombre Base de Datos" onChange={handleChange} required />
        <input type="text" name="puerto" placeholder="Puerto" onChange={handleChange} required />
        <input type="submit" value="Aceptar" />
      </form>
    </div>
  );
}

export default InstallForm;
