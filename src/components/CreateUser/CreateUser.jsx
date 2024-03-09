import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const CreateUser = () => {

  const [inputs, setIntputs] = useState({})

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setIntputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:8080/php/api/', inputs).then(function (response) {
      console.log(response.data);
      Navigate ("/");
    });


    console.log(inputs);
  }

  return (
    <div>
      <h2>Create User</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name: </label>
          <input type="text" name="name" onChange={handleInputChange} />
          <label htmlFor="">Surname: </label>
          <input type="text" name="surname" onChange={handleInputChange} />
          <label htmlFor="">Username: </label>
          <input type="text" name="username" onChange={handleInputChange} />
          <label htmlFor="">Email: </label>
          <input type="text" name="email" onChange={handleInputChange} />
          <label htmlFor="">Password:</label>
          <input type="password" name="password" onChange={handleInputChange} />
          <label htmlFor="">Role: </label>
          <select name="role" onChange={handleInputChange}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          <button>Save</button>
        </form>
    </div>
  )
}

export default CreateUser