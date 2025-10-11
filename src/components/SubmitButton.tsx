import React from "react";
import "../styles/App.css";

interface SubmitButtonProps {
  disabled: boolean;
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ disabled, onClick }) => (
  <button
    type="button"
    className={`submit-btn${disabled ? " disabled" : ""}`}
    onClick={onClick}
    disabled={disabled}
  >
    Submit
  </button>
);

export default SubmitButton;