import React, { useState } from "react";
import Form from "./components/Form"; // Importiere dein Formular
import Ampel from "./components/Ampel"; // Importiere deine Ampel
import "./styles.css"; // Behalte deine Styles bei

export default function App() {
  const [status, setStatus] = useState<string>(""); // Status für die Ampel

  // Funktion zum Aktualisieren des Status
  const handleInputChange = (value: string) => {
    setStatus(value);
  };

  return (
    <div className="App">
      <h1>Hello Auditor</h1>
      <h2>Start editing to audit the IT systems!</h2>
      <Form onInputChange={handleInputChange} />{" "}
      {/* Übergabe der Funktion an das Formular */}
      <Ampel status={status} /> {/* Ampel basierend auf dem Status */}
    </div>
  );
}
