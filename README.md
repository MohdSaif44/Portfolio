# Abdullah Portfolio — Portfolio Template

[🌐 Live Website](https://abdullah-portfolio-nine.vercel.app/)

---

> **A modern, professional portfolio template built with React, Vite, and Tailwind CSS.**
> Showcase your projects, resume, and skills with a customizable, animated, and responsive site.

---

## 📚 Table of Contents

- [✨ Features](#-features)
- [🛠️ Prerequisites](#️-prerequisites)
- [🚀 Getting Started](#-getting-started)
- [🗂️ File Structure](#️-file-structure)
- [🛠️ Where to Edit Content](#️-where-to-edit-content)
  - [🖼️ Profile Photo](#️-profile-photo)
  - [📦 Projects](#-projects)
  - [🧑‍💻 Skills, Experience, Education](#-skills-experience-education)
  - [🔗 Social Links](#-social-links)
  - [🏷️ Categories (Project Filters)](#️-categories-project-filters)
  - [⚙️ Text and Section Layouts (JSX Content)](#️-text-and-section-layouts-jsx-content)
  - [📣 Call to Action (CTA) Sections](#-call-to-action-cta-sections)
  - [🎨 Theme & Colors](#-theme--colors)
- [Summary](#summary)
- [🚢 Deployment](#-deployment)
  - [Vercel](#vercel)
  - [GitHub Pages](#github-pages)


---

## ✨ Features

- Dark blue/black theme with glassmorphism and accent highlights
- Animated sections and modern UI components
- Responsive layout for all devices
- JSON-driven content for projects, skills, and resume
- Easy deployment on Vercel or GitHub Pages

---

## 🛠️ Prerequisites

- **Node.js** (v18 or higher recommended):  
  Download and install from [https://nodejs.org/](https://nodejs.org/)

➡️ **Once prerequisites are installed, continue to [Getting Started](#-getting-started) for setup and usage instructions.**

---

## 🚀 Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/3bdul1ah/Abdullah_Portfolio.git
   cd Abdullah_Portfolio
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Run the Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at [http://localhost:5173](http://localhost:5173).

---

## 🗂️ File Structure

```text
.
├── public/
│   └── assets/ # all your images should be here
├── src/
│   ├── components/
│   ├── data/
│   ├── pages/
│   ├── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
```

---

## 🛠️ Where to Edit Content

### 🖼️ Profile Photo
- **Files:** [`src/pages/About.jsx`](src/pages/About.jsx), [`src/pages/Home.jsx`](src/pages/Home.jsx)
- **How:** Replace the import with your own photo in `public/assets/`.
  ```js
  import profile from '../assets/your-photo.png';
  ```
- **Note:** The image file must be placed in `src/assets/`.

### 📦 Projects
- **File:** [`src/data/projects.json`](src/data/projects.json)
- **How:** Edit, add, or remove project objects in the array.
- **Image:** Place project images in `public/assets/` and reference as `/assets/your-image.png`.
- **Example:**
  ```json
  {
    "id": 1,
    "title": "Firefighter Robot",
    "description": "Teleoperated robot for mapping and gas detection...",
    "technologies": ["ROS2", "React", "Gas Detection"],
    "category": ["robotics", "web-dev"],
    "github": "https://github.com/3bdul1ah/x3cator_ws",
    "demo": "https://github.com/3bdul1ah/x3cator_ws",
    "image": "/assets/Firefighter Robot.png"
  }
  ```
- **To add a new project:** Copy an object, change the fields, and ensure the `image` path is correct.
- **To remove a project:** Delete the object from the array.

### 🧑‍💻 Skills, Experience, Education
- **Files:**
  - Skills: [`src/data/skills.json`](src/data/skills.json)
  - Experience: [`src/data/experience.json`](src/data/experience.json)
  - Education: [`src/data/education.json`](src/data/education.json)
- **How:** Edit the JSON arrays to reflect your own skills, work experience, and education.
- **Example (skills.json):**
  ```json
  [
    { "category": "Embedded Systems & IoT", "skills": ["STM32", "Jetson Nano", "LiDAR"] },
    { "category": "Robotics & Automation", "skills": ["ROS1/ROS2", "SLAM"] }
  ]
  ```

### 🔗 Social Links
- **File:** [`src/data/social.json`](src/data/social.json)
- **How:** Update the URLs and labels for your contact and social media links.
- **Example:**
  ```json
  [
    { "type": "email", "label": "Email", "url": "mailto:your@email.com" },
    { "type": "github", "label": "GitHub", "url": "https://github.com/yourusername" }
  ]
  ```

### 🏷️ Categories (Project Filters)
- **File:** [`src/data/categories.js`](src/data/categories.js)
- **How:** Edit the exported array to add, remove, or rename project categories. These are used for filtering projects on the Projects page.
- **Example:**
  ```js
  export const projectCategories = [
    { id: 'robotics', name: 'Robotics' },
    { id: 'web-dev', name: 'Web Development' },
    { id: 'ai-cv', name: 'AI & Computer Vision' },
    { id: 'iot-embedded', name: 'IoT & Embedded' }
  ];
  ```
- **To add a new category:** Add a new object with a unique `id` and a display `name`.
- **To remove a category:** Remove the object from the array.
- **To rename a category:** Change the `name` field.
- **To assign a project to a category:** Use the `id` in the `category` array of a project in `projects.json`.

### ⚙️ Text and Section Layouts (JSX Content)
Below are the main JSX files and the specific sections you may want to edit for your own content:

#### [`src/pages/Home.jsx`](src/pages/Home.jsx)
- **Animated Roles / Hero Section:**
  - Edit the `roles` array for your own titles:
    ```js
    const roles = [
      "Engineer",
      "Robotics Developer",
      "AI Enthusiast"
    ];
    ```
  - Edit the main heading and subtitle:
    ```jsx
    <h1>Hi, I'm Your Name</h1>
    <p>Engineer | Robotics | AI</p>
    ```
- **Profile Photo:** Change the imported image and alt text.
- **Call to Action (CTA):** Edit the CTA section at the bottom for your own message and links.

#### [`src/pages/About.jsx`](src/pages/About.jsx)
- **About/Bio Section:** Edit the main paragraph(s) to describe yourself.
- **Animated Roles:** If present, update the roles array and animated text.
- **Profile Photo:** Change the imported image and alt text.
- **CTA Section:** Edit the CTA text, button, and link.

#### [`src/pages/Projects.jsx`](src/pages/Projects.jsx)
- **Section Headings:** Edit the main heading and description.
- **Project Filters:** Change filter button labels if you update categories.
- **CTA Section:** Edit the CTA at the bottom for your own message and links.

#### [`src/pages/Resume.jsx`](src/pages/Resume.jsx)
- **Section Headings:** Edit the main heading and description.
- **Timeline/Experience:** Edit or add static text for your professional experience.
- **CTA Section:** Edit the CTA at the bottom for your own message and links.

#### [`src/components/Navbar.jsx`](src/components/Navbar.jsx)
- **Site Title/Logo:** Change the displayed site name or icon.
- **Navigation Links:** Edit or add navigation links.

#### [`src/components/Footer.jsx`](src/components/Footer.jsx)
- **Footer Text:** Edit the copyright or footer message.

#### [`src/components/ProjectCard.jsx`](src/components/ProjectCard.jsx)
- **Project Card Layout:** Change how each project is displayed (title, description, links, etc.).

### 📣 Call to Action (CTA) Sections
- **Files:**
  - Home page CTA: [`src/pages/Home.jsx`](src/pages/Home.jsx)
  - About page CTA: [`src/pages/About.jsx`](src/pages/About.jsx)
  - Projects page CTA: [`src/pages/Projects.jsx`](src/pages/Projects.jsx)
- **How:**
  - Find the CTA section JSX, usually near the bottom of the file. Example from Home page:
    ```jsx
    <section className="...">
      <h2 className="...">Let's Work Together</h2>
      <p className="...">Ready to build something legendary? Reach out and let's connect.</p>
      <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
    </section>
    ```
  - Change the heading, paragraph, or button text to your own message.
  - You can also change the link or add more buttons as needed.
  - For advanced customization, adjust the background, animation, or layout classes.

### 🎨 Theme & Colors
- **File:** [`src/index.css`](src/index.css)
- **How:** Edit the `:root` CSS variables to change the color scheme.
- **Example:**
  ```css
  :root {
    --color-primary: #2196f3;      /* Main accent (blue) */
    --color-secondary: #00cfff;    /* Secondary accent (cyan) */
    --color-dark: #0a0f1a;         /* Main background */
    --color-dark-lighter: #101828; /* Section backgrounds */
    --color-text: #e0e7ef;         /* Main text */
    --color-text-light: #a5b4fc;   /* Secondary text */
  }
  ```
- **To change the theme:** Adjust these variables to your preferred colors.  
  For example, to use a purple accent:
  ```css
  --color-primary: #8b5cf6;
  ```

---

## Summary

| File/Section                        | What to Edit (Personalization)                                 |
|-------------------------------------|---------------------------------------------------------------|
| `src/pages/Home.jsx`                | Animated roles, hero heading/subtitle, profile photo, CTA      |
| `src/pages/About.jsx`               | Bio/about text, animated roles, profile photo, CTA             |
| `src/pages/Projects.jsx`            | Section heading, project filters, CTA                          |
| `src/pages/Resume.jsx`              | Section headings, experience, education, CTA                   |
| `src/components/Navbar.jsx`         | Site title/logo, navigation links                              |
| `src/components/Footer.jsx`         | Footer text                                                   |
| `src/components/ProjectCard.jsx`    | Project card layout, tags, links                               |
| `src/data/projects.json`            | Project data, images, categories                               |
| `src/data/skills.json`              | Skills categories and items                                    |
| `src/data/experience.json`          | Work experience entries                                        |
| `src/data/education.json`           | Education entries                                              |
| `src/data/social.json`              | Social/contact links                                           |
| `src/data/categories.js`            | Project filter categories                                      |
| `src/index.css`                     | Theme colors, global styles                                    |

**Notes:**
- To change animated roles: Edit the `roles` array in `Home.jsx` or `About.jsx`.
- To change CTAs: Edit the CTA section at the bottom of each main page.
- To change theme colors: Edit the `:root` variables in `src/index.css`.
- For detailed code examples, see the comments in each file.
---

## 🚢 Deployment

#### Vercel (Recommend)
1. Push your code to GitHub.
2. Import your repository at [vercel.com](https://vercel.com/).
3. Use build command: `npm run build` and output: `dist` (auto-detected for Vite).
4. Assign a custom domain or use the generated one.

#### GitHub Pages
1. Add `"homepage": "https://yourusername.github.io/your-repo/"` to `package.json`.
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.

---


