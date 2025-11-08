# Rishabh Jain's Personal Portfolio

![Portfolio Screenshot](public/screenshot.png)

This is the source code for my personal portfolio website, built with **Vite, React, TypeScript, and Tailwind CSS**.

The site is designed to be a clean, modern, and responsive showcase of my skills, experience, and projects. It features a dynamic project section that automatically fetches my pinned repositories from GitHub at build time.

**Live Demo:** `https://<your-vercel-domain>.com`

---

## ✨ Key Features

* **Modern Stack:** Built with Vite for a blazing-fast development experience.
* **Beautiful UI:** Styled with Tailwind CSS and shadcn/ui components.
* **Fully Responsive:** Looks great on all devices, from mobile to desktop.
* **Dynamic Projects:** The "My Projects" section is not hardcoded. It's generated at build time by a script that fetches my 6 pinned projects from the GitHub GraphQL API.
* **Centralized Data:** All personal links (Resume, GitHub, LinkedIn) are stored in `src/data/links.json` for easy updates.

---

## 🛠 Tech Stack

* **Framework:** React
* **Build Tool:** Vite
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **UI Components:** shadcn/ui
* **Icons:** lucide-react
* **Data Fetching:** Node.js script (at build time)

---

## ⚙️ Getting Started (Local Development)

To run this project locally, you will need to create a GitHub Personal Access Token to fetch your projects.

### 1. Clone the Repository
```bash
git clone [https://github.com/Rishabhjain2003/artistic-arc-site.git](https://github.com/Rishabhjain2003/artistic-arc-site.git)
cd artistic-arc-site
````

### 2\. Install Dependencies

```bash
npm install
```

### 3\. Set Up Environment Variables

This is the most important step. The project will not build without these.

1.  Create a file in the root of the project named `.env.local`.

2.  Add your GitHub username and your [GitHub Personal Access Token](https://github.com/settings/tokens) (with `public_repo` scope) to this file.

    ```
    # .env.local
    VITE_GITHUB_USERNAME="YourGitHubUsername"
    VITE_GITHUB_TOKEN="ghp_YourSecretTokenHere"
    ```

    **Note:** This file is already in `.gitignore` and should *never* be committed.

### 4\. Run the Project

First, you need to run the fetch script manually to create the `projects.json` file.

```bash
# 1. Run the fetch script one time
node ./scripts/get-projects.mjs

# 2. Start the dev server
npm run dev
```

Your site should now be running on `http://localhost:5173`.

-----

## 🚀 Deployment

This project is set up to deploy perfectly on **Vercel**.

When deploying, you just need to:

1.  Set the **Build Command** to: `npm run build`
2.  Set the **Output Directory** to: `dist`
3.  Add the `VITE_GITHUB_USERNAME` and `VITE_GITHUB_TOKEN` in the **Environment Variables** section of your Vercel project settings.

Vercel will automatically run the `prebuild` script every time it deploys, so your projects will always be up-to-date with your GitHub profile.

```
```