import React from "react";
import "./Ampel.css"; // Importiere deine CSS-Datei

interface AmpelProps {
  status: string; // Status-Prop
}

const Ampel: React.FC<AmpelProps> = ({ status }) => {
  let lightclass = "gray-light"; // Standardfarbe

  if (status === "ja") {
    lightclass = "green-light";
  } else if (status === "teilweise") {
    lightclass = "yellow-light";
  } else if (status === "nein") {
    lightclass = "red-light";
  } else if (status === "Bitte auswählen") {
    lightclass = "gray-light";
  }

  return (
    <div className="ampel-container">
      <div className="ampel-light" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default Ampel;
