# Image Dock

<div align="center">
  <img src="src/assets/screenshots/image-dock-demo.png" alt="Image Dock Screenshot" width="800">
</div>

<br/>

<div align="center">

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-purple.svg?style=for-the-badge&logo=vite)](https://vitejs.dev/)

</div>

## 🖼️ About The Project

**Image Dock** is a lightweight, modern image uploader web app. It allows users to easily upload images, categorize them, assign sub-categories, provide a creative name, and preview their upload before submission. The app is fully responsive, works beautifully on both desktop and mobile, and is built with clean, maintainable React and TypeScript code.

## 📸 Screenshots

<div align="center">
  <img src="src/assets/screenshots/image-dock-desktop.png" alt="Desktop View" width="400" style="margin-right: 10px;">
  <img src="src/assets/screenshots/image-dock-mobile.png" alt="Mobile View" width="250">
</div>

## 🚀 Features

- **Drag & Drop or Browse**: Upload images by dragging them into the box or browsing your files.
- **Live Image Preview**: Instantly preview the selected image before uploading.
- **Category & Sub-category Selection**: Choose from predefined grocery categories and sub-categories.
- **Creative Naming**: Give your upload a unique name.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Form Validation**: Submit button is enabled only when all fields are filled out.
- **Clean, Decoupled Components**: Senior-level architecture with reusable, maintainable code.

## 🛠️ Built With

- [React](https://reactjs.org/) — Frontend library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Vite](https://vitejs.dev/) — Build tool and development server
- **CSS** — Responsive, custom styles (no frameworks)

## 🚀 Getting Started

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/image-dock.git
    cd image-dock
    ```

2. **Install dependencies:**

    ```bash
    npm install
    # or
    bun install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    # or
    bun dev
    ```

4. **Open** [http://localhost:5173](http://localhost:5173) **in your browser.**

## 🧩 Project Structure

```
image-dock/
├── src/
│   ├── api/
│   │   └── fileUpload.ts
│   ├── components/
│   │   ├── Upload.tsx
│   │   ├── CategorySelector.tsx
│   │   ├── NameInput.tsx
│   │   └── SubmitButton.tsx
│   ├── constants/
│   │   └── groceryCategories.ts
│   ├── styles/
│   │   └── App.css
│   ├── utils/
│   │   └── validation.ts
│   ├── App.tsx
│   └── main.tsx
└── ...
```

## ✨ Customization

- **Categories & Sub-categories:**
  - Edit `src/constants/groceryCategories.ts` to customize the dropdown options.
- **API Integration:**
  - Implement your backend logic in `src/api/fileUpload.ts` inside the provided try-catch block.

## 📦 Deployment

This project can be easily deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.). Build the project using:

```bash
npm run build
# or
bun run build
```
The output will be in the `dist/` directory.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.