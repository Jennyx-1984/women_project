<h1 align="center">🌸 She Manifests</h1>

<div align="center">
  <img src="./src/assets/images/LogoSHe.png" alt="She Manifests Logo" width="200"/>
  
  **Guarda, gestiona y visualiza tus frases de empoderamiento favoritas**
</div>

---

## 📖 About the Project

**She Manifests** is a web application designed for women to create, manage, and save their favorite empowerment quotes in a personal and motivating space.

Developed as a **Single Page Application (SPA)** with React 19, it allows loading inspirational images from Cloudinary and navigating through your quotes using an interactive carousel.

This project was built collaboratively using **React, Vite, JSON Server, and Cloudinary**, following Agile methodologies and Atomic Design principles.

### 🎯 Project Objectives

- Build a full CRUD application with React
- Integrate Cloudinary for image management
- Implement persistent data storage with JSON Server
- Design a responsive and accessible interface
- Apply Agile methodologies (Scrum) with Jira
- Work as a team following GitFlow best practices

---

## ✨ Key Features

- 📝 **Full CRUD**: Create, read, update, and delete quotes
- 🖼️ **Image Management**:
  - Upload your own images to Cloudinary
  - Choose from 28 pre-defined gallery images
  - Preview before saving
- 🎠 **Interactive Carousel**: Navigate between your quotes with < and > buttons
- 💾 **Data Persistence**: JSON Server as mock backend
- 🎨 **Responsive Design**: Interface adapts to different devices
- 🔍 **Form Validation**: Required fields and character limits
- 🎯 **Optional Attribution**: Attribute quotes to specific authors or leave as "Anonymous"
- ❤️ **Favorites**: Dedicated section to mark favorite quotes *(under construction)*

---

## 🛠️ Technologies Used

| Category           | Technology                    | Purpose                        |
| ------------------ | ----------------------------- | ------------------------------ |
| **Frontend**       | React 19.2.0                  | UI library                     |
|                    | React Router DOM 7.10.1       | SPA navigation                 |
|                    | Vite 7.2.4                    | Build tool & dev server        |
|                    | Axios 1.13.2                  | HTTP client                    |
|                    | React Icons 5.5.0             | Iconography                    |
| **Backend (Mock)** | JSON Server 1.0.0-beta.3      | Mock REST API                  |
|                    | db.json                       | Local database                 |
| **Services**       | Cloudinary SDK                | Image storage & management     |
|                    | @cloudinary/react 1.14.3      | React integration              |
|                    | @cloudinary/url-gen 1.22.0    | URL generation                 |
| **Tools**          | ESLint                        | Code linting                   |
|                    | Git/GitHub                    | Version control                |
|                    | Figma                         | UI/UX design                   |
|                    | Jira                          | Project management             |

---

## 📁 Project Structure
```
women_project/
│
├── src/
│   ├── components/
│   │   ├── atomic/              → Reusable components
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── CardActionButton.jsx
│   │   │   ├── ButtonNav.jsx
│   │   │   └── NoData.jsx
│   │   │
│   │   ├── pages/               → Main pages
│   │   │   ├── Home.jsx
│   │   │   └── Favorites.jsx
│   │   │
│   │   ├── parts/               → Composite components
│   │   │   ├── CrudTable.jsx
│   │   │   └── crud/
│   │   │       └── CrudForm.jsx
│   │   │
│   │   ├── hooks/               → Custom hooks
│   │   │   └── useCrud.jsx
│   │   │
│   │   └── helpers/             → Helper functions
│   │       └── helpCrud.jsx
│   │
│   ├── css/                     → Global & modular styles
│   ├── assets/                  → Images & static resources
│   ├── App.jsx                  → Root component
│   └── main.jsx                 → Entry point
│
├── db.json                      → JSON Server database
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Installation & Usage

### Requirements

- Node.js 18.x or higher
- npm or yarn
- Git

### Installation Steps

1. **Clone the repository**
```bash
git clone https://github.com/Jennyx-1984/women_project.git
cd women_project
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the project**

You need **2 terminals open**:

**Terminal 1 - Backend (JSON Server):**
```bash
npx json-server db.json
```
Server will start at `http://localhost:3000`

**Terminal 2 - Frontend (React):**
```bash
npm run dev
```
Application will open at `http://localhost:5173`

4. **🎉 Ready!**

Open your browser at `http://localhost:5173` and start creating your empowerment quotes.

---

## 🎯 How to Use

### Create a new quote

1. Click the "+" button in the header
2. Write your quote (max 100 characters)
3. Add the author's name (optional, defaults to "Anonymous")
4. Select an image:
   - **Upload image**: Load from your device
   - **Gallery**: Choose from 28 pre-defined images
5. Click "Save"

### Edit a quote

1. Navigate to the quote you want to edit
2. Click the edit icon (pencil)
3. Modify the necessary fields
4. Save changes

### Delete a quote

1. Navigate to the quote you want to delete
2. Click the delete icon (trash bin)
3. The quote will be removed from your collection

### Navigate between quotes

Use the carousel buttons (< >) to browse through your collection.

---

## 🔧 Cloudinary Configuration

The project uses Cloudinary for image storage. Current configuration is hardcoded:

- **Cloud Name:** `dhwkjld3e`
- **Upload Preset:** `women-project`

### To use your own Cloudinary account:

1. Create an account at https://cloudinary.com/
2. Create an unsigned upload preset
3. Update the values in `src/App.jsx` (corresponding lines)

---

## 👥 Development Team

This project was developed by students f  rom the Factoria F5 - FemCoders bootcamp:

| Name                     | Role            | GitHub |
| ------------------------ | --------------- | ------ |
| **Graciela García Quintero** | Project Manager | [GitHub](https://github.com/gracielagq07) |
| **Cristina Viejó**           | Scrum Master    | [GitHub](https://github.com/gracielagq07) |
| **Jennifer Cros Bañuelos**   | Developer       | [GitHub](https://github.com/Jennyx-1984) |
| **Marie-Charlotte Doulcet**  | Developer       | [GitHub](https://github.com/Charlottedoulcet) |

> 💜 Project developed during the **FemCoders P8 Barcelona Bootcamp 2025**

---

## 📊 Project Status

🚧 **In active development - Sprint 2**

- ✅ **Sprint 1:** Full CRUD with Cloudinary integration
- 🔄 **Sprint 2:** UX improvements, favorites functionality (in progress)

---

## 🌱 Future Improvements

- 📱 Enhanced mobile responsiveness
- 🔐 User authentication system
- ☁️ Cloud storage integration
- 🎨 Theme customization (dark/light mode)
- 🔍 Search and filter functionality
- 📊 Statistics dashboard (most viewed, created dates)
- 🌍 Multilanguage support
- 💬 Share quotes on social media
- 🎯 Categories and tags system

---

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Cloudinary React Integration](https://cloudinary.com/documentation/react_integration)
- [JSON Server](https://github.com/typicode/json-server)

---

<div align="center">
  
  **Developed with 💜 by the FemCoders team**
  
  #she-manifests
  
</div>