# Luís Peres - Personal Portfolio

This is the repository for my personal portfolio website, a single-page application built with modern web technologies. It showcases my projects, skills, and professional background.

**Deployed [here](https://lfvperes.github.io)**

---

### Features

-   **Component-Based Architecture:** Built with React, featuring distinct components for each section (Hero, About, Projects, etc.).
-   **Multi-Language Support:** Content can be toggled between English and Portuguese.
-   **Responsive Design:** Styled with Tailwind CSS for a seamless experience on all devices.
-   **Dynamic Content:** Portfolio data is managed centrally, making it easy to update projects and skills.
-   **Smooth Scrolling:** Includes a "Scroll to Top" button for better navigation.

### Technology Stack

-   **Framework:** [React](https://react.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Linting:** [ESLint](https://eslint.org/)

---

### Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd your-repo-name
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server using Vite:**
    ```bash
    npm run dev # vite
    ```
    The application will be available at `http://localhost:5173`.

5.  **Build for Production**:
    ```bash
    npm run build # tsc -b && vite build
    ```
    or

    ```bash
    npm run predeploy # npm run build
    ```
    This command will generate the production-ready build in the `dist` folder.

6.  **Serve the Production Build (optional):**
    If you want to test the production build locally before deploying, you can use Vite:

    ```bash
    npm run preview # vite preview
    ```

    The production build will be served at `http://localhost:4173/` (or another available port).

### Deployment

This portfolio is automatically deployed to GitHub Pages. Any push to the `main` branch will trigger a new build and deployment.