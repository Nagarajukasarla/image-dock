import React, { useRef, useState } from "react";
import "../styles/App.css";

interface UploadProps {
    onFileChange: (file: File | null) => void;
}

const Upload: React.FC<UploadProps> = ({ onFileChange }) => {
    const [dragActive, setDragActive] = useState(false);
    const [fileName, setFileName] = useState("");
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(e.type === "dragover");
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            setFileName(file.name);
            setPreviewUrl(URL.createObjectURL(file));
            onFileChange(file);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFileName(file.name);
            setPreviewUrl(URL.createObjectURL(file));
            onFileChange(file);
        }
    };

    const handleClick = () => {
        inputRef.current?.click();
    };

    return (
        <div
            className={`upload-box${dragActive ? " drag-active" : ""}`}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            data-testid="upload-dropzone"
        >
            {previewUrl ? (
                <div className="preview-image">
                    <div className="upload-preview">
                        <img src={previewUrl} alt="Preview" className="upload-preview-img" />
                    </div>
                    <button type="button" className="upload-browse" onClick={handleClick} >
                        Change
                    </button>
                </div>
            ) : (
                <div className="upload-icon-area" onClick={handleClick}>
                    <span role="img" aria-label="upload" className="upload-icon">
                        <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0" />
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path d="M7 19L5.78311 18.9954C3.12231 18.8818 1 16.6888 1 14C1 11.3501 3.06139 9.18169 5.66806 9.01084C6.78942 6.64027 9.20316 5 12 5C15.5268 5 18.4445 7.60822 18.9293 11.001L19 11C21.2091 11 23 12.7909 23 15C23 17.1422 21.316 18.8911 19.1996 18.9951L17 19M12 20V12M12 12L15 15M12 12L9 15" stroke="#0c2e51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                        </svg>
                    </span>
                    <div className="upload-text">
                        Drag & Drop or
                    </div>
                    <button type="button" className="upload-browse" onClick={handleClick}>
                        Browse Files
                    </button>
                    {fileName && <div className="upload-filename">{fileName}</div>}
                    <input
                        ref={inputRef}
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleChange}
                    />
                </div>
            )}
        </div>

    );
};

export default Upload;