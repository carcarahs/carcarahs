import React from 'react';
import Navbar from './components/Navbar';
import Cover from './views/Cover';
import Projects from './views/Projects';
import About from './views/About';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Cover />
      <About />
      <Projects />
    </div>
  );
}

export default App;
