import React from "react";
import "@/styles/App.css";

interface NameInputProps {
    value: string;
    onChange: (val: string) => void;
    label?: string;
    placeholder?: string;
}

const NameInput: React.FC<NameInputProps> = ({
    value,
    onChange,
    label = "Name",
    placeholder = "Enter a name..."
}) => (
    <div className="name-input-wrapper">
        <label className="name-label">
            {label}
            <input
                type="text"
                placeholder={placeholder}
                value={value}
                className="name-input"
                onChange={(e) => onChange(e.target.value)}
            />
        </label>
    </div>
);

export default NameInput;