//* LIBRERIAS
// import { Routes, Route } from 'react-router-dom';

//* MAIN *//
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

//? ESTILOS
import './App.css';

function App() {
    return (
        <div className="App">
            <NavBar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <div>Footer</div>
        </div>
    );
}

export default App;
