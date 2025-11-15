# 🌟 Portfolio - Static Website

Modern and responsive portfolio website built with React. **100% Static** - No database or backend required!

## 🚀 Live Demo

- **Website:** [https://your-domain.vercel.app/](https://your-domain.vercel.app/)

## ✨ Features

- 🎨 Modern and responsive design
- 🌓 Dark/Light mode toggle
- 📱 Mobile-first approach
- 📊 Portfolio, certificates, education, and experience sections
- 🎭 Smooth animations with AOS and Framer Motion
- 🚀 Fast loading with Vite
- 📧 Contact form integration
- 💾 **Static data files** - Easy to edit without database
- 🔥 **No backend required** - Deploy anywhere for free!

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **AOS** - Animate On Scroll library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **SweetAlert2** - Beautiful alert dialogs
- **Axios** - HTTP client

### Data Management
- **Static JavaScript files** - No database needed
- **Easy to edit** - Just edit files in `src/data/`
- **Version control friendly** - Track changes with Git

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** or **yarn** package manager

**That's it!** No PHP, MySQL, or backend server needed!

## 🏃‍♂️ Getting Started

Follow these steps to run the project locally:

### 1\. Clone the Repository

```bash
git clone https://github.com/elelcahyani/Personal-porotfolio.git
cd Personal-porotfolio
```

### 2\. Install Dependencies

```bash
npm install
```

If you encounter peer dependency issues, use:

```bash
npm install --legacy-peer-deps
```

### 3\. Run the Development Server

```bash
npm run dev
```

### 4\. Open in Browser

Access the application through the link displayed in your terminal (usually `http://localhost:5173`).

## 🏗️ Building for Production

### Build Frontend

```bash
npm run build
```

Output will be in `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Managing Content

All website content is stored in **static JavaScript files** in `src/data/`:

### Quick Edit Guide

1. **Projects:** Edit `src/data/projects.js`
2. **Certificates:** Edit `src/data/certificates.js`
3. **Education:** Edit `src/data/education.js`
4. **Experience:** Edit `src/data/experience.js`

### Adding Images

1. Save images to `public/uploads/`
2. Use path: `/uploads/your-image.jpg`

### Example: Add New Project

```javascript
// src/data/projects.js
export const projects = [
  // ... existing projects
  {
    id: 4,
    title: "My New Project",
    description: "Short description",
    img: "/uploads/new-project.jpg",
    link: "https://demo.com",
    techStack: ["React", "Tailwind"],
    // ... other fields
  }
];
```

**📚 Detailed Guide:** See `QUICK_START.md` or `PANDUAN_WEBSITE_STATIS.md`

## 🚀 Deployment

Since this is a **static website**, you can deploy it anywhere for **FREE**!

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

1. Build: `npm run build`
2. Drag & drop `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages

```bash
npm run build
# Push dist/ folder to gh-pages branch
```

### Other Options

- Cloudflare Pages
- Firebase Hosting
- Surge.sh
- Any static hosting service

**No backend setup needed!** Just upload the `dist/` folder.

## 📁 Project Structure

```
Portofolio_V5/
├── public/                # Static assets
│   └── uploads/          # Images (projects, certificates, etc.)
├── src/
│   ├── components/        # React components
│   ├── context/           # Context providers (Theme)
│   ├── data/             # 📝 EDIT DATA HERE!
│   │   ├── projects.js   # Project data
│   │   ├── certificates.js # Certificate data
│   │   ├── education.js  # Education data
│   │   ├── experience.js # Experience data
│   │   └── README.md     # Data editing guide
│   ├── Pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Portofolio.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   └── utils/             # Utility functions
├── QUICK_START.md         # Quick start guide
├── PANDUAN_WEBSITE_STATIS.md # Complete guide (Indonesian)
└── package.json
```

## 📝 Content Management

**No admin panel needed!** Just edit files directly:

1. Open `src/data/` folder
2. Edit the JavaScript files
3. Save and refresh browser
4. Done!

**Benefits:**
- ✅ No login required
- ✅ Version control with Git
- ✅ Easy backup (just copy files)
- ✅ No security vulnerabilities
- ✅ Works offline

## 🚨 Troubleshooting

### Frontend Issues

**Port already in use:**
```bash
# Kill process on port 5173
npx kill-port 5173
npm run dev
```

**Dependencies error:**
```bash
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Data Issues

**Images not showing:**
- Check file exists in `public/uploads/`
- Verify path is `/uploads/filename.jpg`

**Data not updating:**
- Save the file
- Hard refresh: `Ctrl + F5`
- Check browser console for errors

**Build errors:**
- Check JavaScript syntax in data files
- Run `npm run lint` to find errors

## 📝 License & Credits

This project is open source and available for personal and educational use.

**If you use this project:**
- ⭐ Give it a star on GitHub
- 📝 Provide proper attribution
- 🔗 Link back to this repository

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

**Elfa Dwi Cahyani**

- 🌐 Website: [https://your-domain.vercel.app/](https://your-domain.vercel.app/)
- 💼 LinkedIn: [elfadwicahyani](https://www.linkedin.com/in/elfadwicahyani/)
- 📧 GitHub: [elelcahyani](https://github.com/elelcahyani)
- 📷 Instagram: [@elfadwcyn](https://www.instagram.com/elfadwcyn)

## 🙏 Acknowledgments

- React Team for the amazing framework
- Tailwind CSS for the utility-first CSS
- Vercel for free hosting
- InfinityFree for free PHP hosting
- All open-source contributors

---


⭐ If this project helped you, please give it a star on GitHub!
