//* LIBRERIAS
import React, { useState, useEffect, useRef } from 'react';
// import { Routes, Route } from 'react-router-dom';

//* MAIN *//
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import ArrowUp from './assets/icons/up-chevron-large.png';

// ? ESTILOS
import './App.css';

function App() {
  //! -----------------------------------

  /* //! Para cerrar la NavBar cuando se da click fuera de ella */
  /* //* Estado de la barra */
  const [active, setActive] = useState(false);

  /* //* Función que llama a la configuración */
  useEffect(() => {
    const handleClick = (event) => {
      if (!navbarRef.current.contains(event.target)) {
        setActive(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [active]);

  const navbarRef = useRef(null);
  //! -----------------------------------

  const changeDarkMode = () => {
    document.documentElement.classList.toogle('dark');
  };

  return (
    <div className="App">
      <NavBar
        changeDarkMode={changeDarkMode}
        active={active}
        setActive={setActive}
        navbarRef={navbarRef}
      />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      {/* //* Flecha para subir al home */}
      <a href="#home">
        <img
          alt="arrowUp"
          className="fixed bottom-3 right-3 w-8 opacity-40 hover:opacity-80"
          src={ArrowUp}
        />
      </a>
    </div>
  );
}

export default App;
