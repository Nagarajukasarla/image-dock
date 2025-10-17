import React, { useRef, useState, useEffect } from "react";
import "../styles/App.css";

interface UploadProps {
    onFileChange: (file: File | null) => void;
    file: File | null;
}

const Upload: React.FC<UploadProps> = ({ onFileChange, file }) => {
    const [dragActive, setDragActive] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Reset the file input when the file prop changes to null
    useEffect(() => {
        if (!file && inputRef.current) {
            inputRef.current.value = '';
            setPreviewUrl(null);
        }
    }, [file]);

    // Clean up object URLs to avoid memory leaks
    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

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
            handleFileSelect(file);
        }
    };

    const handleFileSelect = (file: File) => {
        // Revoke previous URL if it exists
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        const newPreviewUrl = URL.createObjectURL(file);
        setPreviewUrl(newPreviewUrl);
        onFileChange(file);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFileSelect(e.target.files[0]);
        }
    };

    const handleButtonClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (inputRef.current) {
            inputRef.current.value = ''; // Reset input to allow selecting same file again
            inputRef.current.click();
        }
    };

    return (
        <div
            className={`upload-box${dragActive ? " drag-active" : ""}`}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
            data-testid="upload-dropzone"
        >
            <div className="preview-container">
                {previewUrl ? (
                    <div className="preview-image">
                        <button
                            type="button"
                            className="change-button"
                            onClick={handleButtonClick}
                            aria-label="Change image"
                        >
                            <svg fill="#204070" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#204070" width="24" height="24">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M64,256H34A222,222,0,0,1,430,118.15V85h30V190H355V160h67.27A192.21,192.21,0,0,0,256,64C150.13,64,64,150.13,64,256Zm384,0c0,105.87-86.13,192-192,192A192.21,192.21,0,0,1,89.73,352H157V322H52V427H82V393.85A222,222,0,0,0,478,256Z"></path>
                                </g>
                            </svg>
                        </button>
                        <div className="upload-preview" onClick={handleButtonClick}>
                            <img src={previewUrl} alt="Preview" className="upload-preview-img" />
                        </div>
                    </div>
                ) : (
                    <div className="upload-icon-area" onClick={handleButtonClick}>
                        <span role="img" aria-label="upload" className="upload-icon">
                            <svg width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M7 19L5.78311 18.9954C3.12231 18.8818 1 16.6888 1 14C1 11.3501 3.06139 9.18169 5.66806 9.01084C6.78942 6.64027 9.20316 5 12 5C15.5268 5 18.4445 7.60822 18.9293 11.001L19 11C21.2091 11 23 12.7909 23 15C23 17.1422 21.316 18.8911 19.1996 18.9951L17 19M12 20V12M12 12L15 15M12 12L9 15" stroke="#0c2e51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                        </span>
                        <div className="upload-text">
                            Drag & Drop or <button type="button" className="browse-text-button" onClick={(e) => { e.stopPropagation(); handleButtonClick(e); }}>Browse Files</button>
                        </div>
                    </div>
                )}
            </div>
            <input
                ref={inputRef}
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default Upload;