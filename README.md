# Manoj K. Portfolio

A modern, responsive personal portfolio website built with Next.js 16 and Tailwind CSS v4. This project showcases my work in AI, Web Development, and IoT as a Data Science Undergraduate at IIT Madras.

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## 🚀 Graphic Overview

Designed with a focus on aesthetics and user experience, featuring:
- **Clean & Modern UI**: Dark mode interface with vibrant accents.
- **Responsive Layout**: Seamlessly adapts to mobile, tablet, and desktop screens.
- **Interactive Elements**: Smooth animations using Framer Motion.
- **Project Showcase**: specific sections to highlight featured projects with details cards.
- **Modal Integrations**: Custom modals for Contact and Resume viewing.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Fonts**: Geist & Geist Mono (via `next/font`)
- **State Management**: React Context API

## 📂 Project Structure

```bash
portfolio-live/
├── app/                  # Next.js App Router pages and layouts
│   ├── about/            # About page
│   ├── layout.tsx        # Root layout with providers and navbar
│   └── page.tsx          # Home page (Hero, Stats, Featured Projects)
├── components/           # Reusable UI components
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   ├── StatsGrid.tsx
│   └── ...
├── context/              # React Context providers
│   ├── ContactContext.tsx
│   └── ResumeContext.tsx
├── public/               # Static assets (images, fonts)
└── ...
```

## ⚡ Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js**: v18.17.0 or later
- **npm**: v9.0.0 or later

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/portfolio-live.git
    cd portfolio-live
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```bash
npm run build
```

To run the production build:

```bash
npm start
```

## 🎨 Key Features

-   **Hero Section**: engaging introduction with professional details.
-   **Stats Grid**: Quick highlights of metrics or achievements.
-   **Featured Projects**: Card-based layout displaying top projects with tags and links.
-   **Contact & Resume Modals**: Accessible via global context to allow users to connect or view credentials from anywhere in the app.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
