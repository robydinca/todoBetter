import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InstallForm from './components/Install/InstallForm/InstallForm';
import NavMenu from './components/NavMenu/NavMenu';
import RegisterInstall from './components/Install/RegisterInstall/RegisterInstall';

function App() {
  const [configExists, setConfigExists] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dataSent, setDataSent] = useState(false);

  useEffect(() => {
    const checkConfigFile = async () => {
      try {
        const response = await axios.head('http://localhost:8080/php/api/config/config.php');
        setConfigExists(response.status === 200);
      } catch (error) {
        setConfigExists(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkConfigFile();
  }, []);

  if (isLoading) {
    // Muestra un mensaje de carga mientras se verifica la existencia del archivo config.php
    return <div>Cargando...</div>;
  }

  const handleDataSent = () => {
    setDataSent(true);
  };

  return (
    <Router>
      <div className="App">
        <h1>TodoBetter</h1>
        <Routes>
          <Route path="/" element={configExists ? <NavMenu /> : <InstallForm />} />
          <Route
            path="/register"
            element={dataSent ? <RegisterInstall /> : <InstallForm onSubmit={handleDataSent} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
