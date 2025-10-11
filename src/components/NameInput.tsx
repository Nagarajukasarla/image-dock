import React from "react";
import "../styles/App.css";

interface NameInputProps {
  value: string;
  onChange: (val: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ value, onChange }) => (
  <div className="name-input-wrapper">
    <label className="name-label">
      Name
      <input
        type="text"
        placeholder="Enter a creative name..."
        value={value}
        className="name-input"
        onChange={(e) => onChange(e.target.value)}
        maxLength={50}
      />
    </label>
  </div>
);

export default NameInput;