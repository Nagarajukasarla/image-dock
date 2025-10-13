import React, { useState } from "react";
import Upload from "./components/Upload";
import CategorySelector from "./components/CategorySelector";
import NameInput from "./components/NameInput";
import SubmitButton from "./components/SubmitButton";
import { validateFields } from "./utils/validation";
import { fileUpload } from "./api/fileUpload";
import "./styles/App.css";

const App: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [name, setName] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const resetForm = () => {
        setFile(null);
        setCategory("");
        setSubCategory("");
        setName("");
    };

    const handleSubmit = async () => {
        if (!validateFields(file, category, subCategory, name)) return;
        setSubmitting(true);
        try {
            const formData = new FormData();
            if (file) formData.append("image", file);
            formData.append("category", category);
            formData.append("subCategory", subCategory);
            formData.append("name", name);
            await fileUpload(formData);
            resetForm();
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setSubmitting(false);
        }
    };

    const allValid = validateFields(file, category, subCategory, name);

    return (
        <div className="app-container">
            <h1 className="app-title">Share Your Masterpiece</h1>
            <div className="form-wrapper">
                <Upload onFileChange={setFile} />
                <div className="form-fields">
                    <CategorySelector
                        category={category}
                        subCategory={subCategory}
                        onCategoryChange={setCategory}
                        onSubCategoryChange={setSubCategory}
                    />
                    <NameInput value={name} onChange={setName} />
                    <SubmitButton disabled={!allValid || submitting} onClick={handleSubmit} />
                </div>
            </div>
        </div>
    );
};

export default App;
