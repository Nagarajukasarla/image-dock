import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Upload from "@/components/Upload";
import CategorySelector from "@/components/CategorySelector";
import NameInput from "@/components/NameInput";
import SubmitButton from "@/components/SubmitButton";
import { validateFields } from "@/utils/validation";
import { fileUpload } from "@/api/fileUpload";
import "@/styles/App.css";

const App: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [category, setCategory] = useState("");
    const [subCategory, setSubCategory] = useState("");
    const [name, setName] = useState("");
    const [productName, setProductName] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const resetForm = () => {
        setFile(null);
        setCategory("");
        setSubCategory("");
        setName("");
        setProductName("");
    };

    const handleSubmit = async () => {
        if (!validateFields(file, category, subCategory, productName, name)) return;
        setSubmitting(true);
        try {
            const formData = new FormData();
            if (file) formData.append("image", file);
            formData.append("category", category);
            formData.append("sub_category", subCategory);
            formData.append("product_name", productName);
            formData.append("name", name);

            await fileUpload(formData);
            resetForm();

            // Show success toast
            toast.success('Image uploaded successfully!', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            // Show error toast
            toast.error('Failed to upload image. Please try again.', {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        } finally {
            setSubmitting(false);
        }
    };

    const allValid = validateFields(file, category, subCategory, productName, name);

    return (
        <div className="app-container" onDragOver={(e) => e.preventDefault()}>
            <h1 className="app-title">Upload Your Masterpiece</h1>
            <div className="form-wrapper" onDragOver={(e) => e.preventDefault()}>
                <Upload onFileChange={setFile} file={file} />
                <div className="form-fields">
                    <CategorySelector
                        category={category}
                        subCategory={subCategory}
                        onCategoryChange={setCategory}
                        onSubCategoryChange={setSubCategory}
                    />
                    <NameInput
                        value={productName}
                        onChange={setProductName}
                        label="Product Name"
                        placeholder="Enter product name..."
                    />
                    <NameInput
                        value={name}
                        onChange={setName}
                        label="Product Name with Brand"
                        placeholder="Enter product name with brand..."
                    />
                    <SubmitButton disabled={!allValid || submitting} onClick={handleSubmit} />
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default App;
