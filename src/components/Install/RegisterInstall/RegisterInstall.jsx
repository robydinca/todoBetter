import React, { useState } from 'react';
import axios from 'axios';

function Frontend() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    login: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/php/api/config/register.php', formData);
      if (response.data.success) {
        console.log('Usuario creado correctamente');
        // Realizar acciones después de registrar exitosamente
      } else {
        console.error('Error al crear usuario:', response.data.message);
        // Manejar errores
      }
    } catch (error) {
      console.error('Error:', error);
      // Manejar errores de la solicitud
    }
  };

  return (
    <div>
      <h1>Regístrate</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nombre" placeholder="Nombre" onChange={handleChange} required />
        <input type="text" name="apellidos" placeholder="Apellidos" onChange={handleChange} required />
        <input type="text" name="login" placeholder="Usuario" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Contraseña" onChange={handleChange} required />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Frontend;
