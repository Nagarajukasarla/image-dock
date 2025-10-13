export async function fileUpload(data: FormData) {
    try {
        const response = await fetch("http://localhost:8081/upload", {
            method: "POST",
            body: data,
        });
        if (!response.ok) {
            throw new Error("Failed to upload file");
        }
        const result = await response.json();
        console.log("File uploaded successfully:", result);
    } catch (e) {
        console.error("An error occurred while uploading the file:", e);
    }
}
