import React from "react";
import "./Form.css"; // Importiere die CSS-Datei

interface FormProps {
  onInputChange: (value: string) => void;
}

const Form: React.FC<FormProps> = ({ onInputChange }) => {
  return (
    <div className="form-container">
      <select
        onChange={(e) => onInputChange(e.target.value)}
        className="form-input"
      >
        <option value="">Bitte auswählen</option>
        <option value="ja">Ja</option>
        <option value="teilweise">Teilweise</option>
        <option value="nein">Nein</option>
      </select>
    </div>
  );
};

export default Form;
