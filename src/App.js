import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido a mi portafolio</h1>
        <p>
          Soy [Tu nombre], un [tu profesión o descripción].
        </p>
        <p>
          Aquí encontrarás información sobre mis proyectos y habilidades.
        </p>
        <a
          className="App-link"
          href="#proyectos"
        >
          Ver mis proyectos
        </a>
        <a
          className="App-link"
          href="#contacto"
        >
          Contáctame
        </a>
      </header>
      <section id="proyectos" className="App-section">
        <h2>Mis Proyectos</h2>
        {/* Aquí puedes agregar una lista de tus proyectos */}
      </section>
      <section id="contacto" className="App-section">
        <h2>Contacto</h2>
        {/* Aquí puedes agregar un formulario de contacto o información de contacto */}
      </section>
      <footer className="App-footer">
        &copy; {new Date().getFullYear()} [Tu nombre o nombre de la empresa]
      </footer>
    </div>
  );
}

export default App;
