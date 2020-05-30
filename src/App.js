import React from "react";
import Section from "./components/Section";

function App() {
  return (
    <div className="App">
      <Section>
        <h1>Olá Mundo Carcará Hackspace</h1>
      </Section>

      <Section style={{ backgroundColor: "#f2f2f2" }}>
        <h1>Aqui vem o sobre</h1>
      </Section>
    </div>
  );
}

export default App;
