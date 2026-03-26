# Rasoft LLC Website Documentation

## Overview
This repository contains the source code for the Rasoft LLC website, which is composed of three main parts: 
1. **Next.js** - the React-based frontend
2. **Node.js Backend** - the API server
3. **Angular Frontend** - the additional frontend using Angular

## Technology Stack
- **Frontend**:  
  - Next.js
  - Angular
  - HTML/CSS
  - JavaScript/TypeScript
- **Backend**:  
  - Node.js
  - Express.js
  - MongoDB (or any database you are using)
- **Deployment**:  
  - Vercel (for Next.js)
  - Heroku/Netlify/AWS (for Node.js and Angular)

## Project Structure
```
rasoftllc-website/
├── backend/              # Node.js backend
├── frontend-next/       # Next.js frontend
└── frontend-angular/     # Angular frontend
```

## Setup Instructions
### 1. Clone the Repository
```bash
git clone https://github.com/Saisohithk/rasoftllc-website.git
cd rasoftllc-website
```

### 2. Setting Up the Node.js Backend
- Navigate to the backend directory:
```bash
cd backend
```
- Install dependencies:
```bash
npm install
```
- Start the server:
```bash
npm start
```

### 3. Setting Up the Next.js Frontend
- Navigate to the Next.js frontend directory:
```bash
cd frontend-next
```
- Install dependencies:
```bash
npm install
```
- Start the development server:
```bash
npm run dev
```

### 4. Setting Up the Angular Frontend
- Navigate to the Angular frontend directory:
```bash
cd frontend-angular
```
- Install dependencies:
```bash
npm install
```
- Start the development server:
```bash
ng serve
```

## Deployment Instructions
### Deploying Next.js Application
- Deploy on Vercel:
  1. Go to [Vercel](https://vercel.com/)
  2. Import your GitHub project.
  3. Set necessary environment variables.
  4. Click Deploy.

### Deploying Node.js API
- Deploy on Heroku:
  1. Install Heroku CLI and log in.
  2. From the backend directory run:
  ```bash
  heroku create
  git push heroku main
  ```
  3. Set environment variables in your Heroku dashboard.

### Deploying Angular Application
- Deploy on Netlify:
  1. Go to [Netlify](https://www.netlify.com/)
  2. Drag and drop your frontend-angular folder.
  3. Set up deployment settings as necessary.

## Conclusion
This README provides a comprehensive guide to setting up and deploying the Rasoft LLC website. Make sure to follow each section carefully for a successful implementation. 

If you have any questions, feel free to create an issue in this repository!  

---  
_Last Updated: 2026-03-26_