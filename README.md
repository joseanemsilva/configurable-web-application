<h1 align='center'>
  💻 🦷 Configurable Business Web Application (Dental Clinic)
</h1>

> A digital storefront designed to tackle the technical and financial barriers small businesses face when establishing an online presence. This project utilizes a decoupled architecture to separate the UI from content management.

<p align="center">
  <img src="/dental-clinic/docs/website.png" width=780>
</p>

> Visit the [Dental Clinic website](https://configurable-web-application.vercel.app/en)

## Key features
- **Mobile-First Responsive UI:** Optimized for performance and accessibility across all screen sizes using Tailwind CSS.
- **Dynamic Content Management (CRUD):** Empowering non-technical staff to manage the website content via a secure dashboard.
- **Native Multi-language Support:** Integrated English and Portuguese (EN/PT) content toggling using the Strapi i18n engine.
- **Automated Synchronization:** CMS updates can trigger automated deployments via Webhooks to keep the live site current.

## Technical stack
<p align="center">
  <img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
  <img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white">
  <img src="https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white">
  <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white">
  <img src="https://img.shields.io/badge/-playwright-%232EAD33?style=for-the-badge&logo=playwright&logoColor=white">
</p><br/>

- **Front-end:** Next.js (React), TypeScript, Tailwind CSS.
- **Back-end:** Strapi Headless CMS (REST API).
- **Testing:** Jest (Unit) and Playwright (End-to-End).
- **Infrastructure:** Vercel (Frontend Hosting) and Strapi Cloud (Backend Hosting).

## System architecture
The application follows a separation of concerns through a Headless CMS architecture:

1. **Management Layer:** A secure Strapi dashboard for administrative CRUD operations.
2. **API Layer:** Content exposed via RESTful endpoints.
3. **Presentation Layer:** A Next.js frontend utilizing Static Site Generation (SSG) for SEO and speed.

<p align="center">
  <img src="/dental-clinic/docs/architecture_layered.png" width=780>
</p>

## Local setup and installation
Follow the steps to run the application on your local machine.

  ### Prerequisites
  - **Node.js** (v18 or higher)
  - **pnpm** for the front-end (Next.js)
  - **npm** for the back-end (Strapi)

### 1. Clone repository
  ```
  git clone https://github.com/joseanemsilva/configurable-web-application.git
  ```

### 2. Install dependencies
- #### Front-end setup (Next.js)
  ```
  cd dental-clinic
  pnpm install
  ```
  **Create .env file and configure the Strapi API token**
  ```
  STRAPI_URL=http://localhost:1337
  NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
  NEXT_PUBLIC_SITE_URL=http://localhost:3000

  STRAPI_API_TOKEN=
  NEXT_PUBLIC_API_GOOGLE=
  ```

> [!IMPORTANT]
> Refer to this [Strapi tutorial for the API token.](https://docs.strapi.io/cms/features/api-tokens)<br>
> Watch this tutorial if you want to create [Google Maps API token.](https://www.youtube.com/watch?v=hsNlz7-abd0)

- ####  Back-end setup (Strapi)
  ```
  cd strapi
  npm install
  ```

### 3. Start the development servers
- **Launch the Next.js front-end**
  ```
  pnpm dev
  ```
- **Launch the Strapi back-end**
  ```
  npm run develop
  ```

> [!NOTE]
> Access the admin panel at http://localhost:1337/admin to create your first administrator account.<br>
> Discover and browser the dental clinic website at http://localhost:3000.

### 4. Unit and integration testing
- **Run tests**
  ```
  # Run Unit Tests (Jest)
  npm run test

  # Run E2E tests (Playwright)
  npx playwright test
  ```
<div align="center">
  <hr>
  <b> 👩‍💻 Author: Joseane Silva</b><br>
  <i>Developed as final project of COMP 2154 - System Development Project</i>
</div>




