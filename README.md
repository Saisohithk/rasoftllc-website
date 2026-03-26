## 🌐 Live Site

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://rasoftllc.netlify.app/)

🔗 [https://rasoftllc.netlify.app/](https://rasoftllc.netlify.app/)


Rasoft LLC Website Documentation
Overview
This repository contains the source code for the Rasoft LLC website, which is composed of three main parts:

Next.js - the React-based frontend
Node.js Backend - the API server
Angular Frontend - the additional frontend using Angular
Technology Stack
Frontend:
Next.js
Angular
HTML/CSS
JavaScript/TypeScript
Backend:
Node.js
Express.js
MongoDB (or any database you are using)
Deployment:
Vercel (for Next.js)
Heroku/Netlify/AWS (for Node.js and Angular)
Project Structure
rasoftllc-website/
├── backend/              # Node.js backend
├── frontend-next/       # Next.js frontend
└── frontend-angular/     # Angular frontend
Setup Instructions
1. Clone the Repository
git clone https://github.com/Saisohithk/rasoftllc-website.git
cd rasoftllc-website
2. Setting Up the Node.js Backend
Navigate to the backend directory:
cd backend
Install dependencies:
npm install
Start the server:
npm start
3. Setting Up the Next.js Frontend
Navigate to the Next.js frontend directory:
cd frontend-next
Install dependencies:
npm install
Start the development server:
npm run dev
4. Setting Up the Angular Frontend
Navigate to the Angular frontend directory:
cd frontend-angular
Install dependencies:
npm install
Start the development server:
ng serve
Deployment Instructions
Deploying Next.js Application
Deploy on Vercel:
Go to Vercel
Import your GitHub project.
Set necessary environment variables.
Click Deploy.
Deploying Node.js API
Deploy on Heroku:
Install Heroku CLI and log in.
From the backend directory run:
heroku create
git push heroku main
Set environment variables in your Heroku dashboard.
Deploying Angular Application
Deploy on Netlify:
Go to Netlify
Drag and drop your frontend-angular folder.
Set up deployment settings as necessary.
Conclusion
This README provides a comprehensive guide to setting up and deploying the Rasoft LLC website. Make sure to follow each section carefully for a successful implementation.

If you have any questions, feel free to create an issue in this repository!
