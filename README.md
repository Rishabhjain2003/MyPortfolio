# Rishabh Jain's Personal Portfolio

This is the source code for my personal portfolio website, built with **Vite, React, TypeScript, and Tailwind CSS**.

The site is designed to be a clean, modern, and responsive showcase of my skills, experience, projects, and leadership roles.

**Live Demo:** [rishabhjain.vercel.app](https://rishabhjain.vercel.app) *(or your deployed Vercel domain)*

---

## ✨ Key Features

* **Modern Stack:** Built with Vite for a blazing-fast development experience and React 18 for component-driven UI.
* **Beautiful UI:** Styled with Tailwind CSS and premium shadcn/ui components.
* **Fully Responsive:** Fluid layouts designed to look stunning on mobile, tablet, and desktop devices.
* **Projects Showcase:** Displays curated projects loaded dynamically from the centralized [projects.json](file:///Users/rishabhjain/Portfolio/MyPortfolio/src/data/projects.json) file.
* **Centralized Configuration:** Personal links (Resume, GitHub, LinkedIn) and contact details are stored in [links.json](file:///Users/rishabhjain/Portfolio/MyPortfolio/src/data/links.json) for easy updates.
* **Automated Redeploys:** Includes a serverless function endpoint ([api/cron.ts](file:///Users/rishabhjain/Portfolio/MyPortfolio/api/cron.ts)) that triggers site redeployment via Vercel Deploy Hooks, ensuring your resume and projects are always up to date.

---

## 🛠 Tech Stack

* **Framework:** React 18
* **Build Tool:** Vite
* **Language:** TypeScript
* **Styling:** Tailwind CSS & Tailwind CSS Animate
* **UI Components:** shadcn/ui (Radix UI primitives)
* **Icons:** Lucide React
* **State/Data Management:** TanStack React Query

---

## ⚙️ Getting Started (Local Development)

### 1. Clone the Repository
```bash
git clone https://github.com/Rishabhjain2003/MyPortfolio.git
cd MyPortfolio
```

### 2. Install Dependencies

You can use `npm` or `bun` to install dependencies:

```bash
npm install
# or
bun install
```

### 3. Run the Development Server

Start the local server:

```bash
npm run dev
# or
bun run dev
```

Your site will be running on `http://localhost:5173`.

---

## 🚀 Deployment & Automation

This project is set up to deploy on **Vercel**.

### Vercel Deployment Settings
1. Set the **Build Command** to: `npm run build`
2. Set the **Output Directory** to: `dist`

### Automated Rebuilds (Vercel Cron Job)
The site includes a serverless endpoint at `api/cron.ts` to trigger a redeploy when external data updates. To set this up:

1. Create a **Deploy Hook** in your Vercel Project Settings (Git -> Deploy Hooks) and copy the URL.
2. In your Vercel Project Settings, add the following **Environment Variables**:
   * `DEPLOY_HOOK_URL`: The Deploy Hook URL you just created.
   * `CRON_SECRET`: A secure random string used to authorize requests.
3. Configure a cron trigger in your Vercel project configuration (`vercel.json`) or call the `api/cron.ts` endpoint with the authorization header:
   ```http
   Authorization: Bearer <your-cron-secret>
   ```

### 📄 Automated Resume Updates (CI/CD)
The resume PDF (`public/resume.pdf`) is automatically kept up to date using a CI/CD pipeline:
1. The LaTeX source code of the resume is hosted in a separate **private repository**.
2. When changes are pushed to the LaTeX source, a **GitHub Actions workflow** compiles the LaTeX document into `resume.pdf`.
3. The workflow automatically commits and pushes the compiled PDF into this portfolio repository.
4. The push triggers Vercel to automatically rebuild and redeploy the site, serving the latest resume immediately.