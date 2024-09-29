import React from "react";
import "./Ampel.css"; // Importiere deine CSS-Datei

interface AmpelProps {
  status: string; // Status-Prop
}

const Ampel: React.FC<AmpelProps> = ({ status }) => {
  let color = "gray"; // Standardfarbe

  if (status === "ja") {
    color = "green";
  } else if (status === "teilweise") {
    color = "yellow";
  } else if (status === "nein") {
    color = "red";
  } else if (status === "Bitte auswählen") {
    color = "gray";
  }

  return (
    <div className="ampel-container">
      <div className="ampel-light" style={{ backgroundColor: color }}></div>
    </div>
  );
};

export default Ampel;
