# ABCJ Finds - MEVN Restaurant Database

A thoughtfully organized restaurant database application built with Vue 3, Express.js, and MongoDB Atlas, deployed natively using a unified Vercel Serverless architecture.

## Tech Stack

- **Frontend:** Vue 3 (Composition API), Vue Router, Vite
- **Backend:** Node.js, Express.js (Serverless Functions)
- **Database:** MongoDB Atlas (`dbRestaurants`)
- **Hosting & Deployment:** Vercel

---

## Project Directory Structure

```text
ABCJ-MEVN/
├── api/
│   └── index.js             Unified Express & MongoDB Serverless Backend
├── src/
│   ├── assets/              Static assets (images, icons)
│   ├── router/
│   │   └── index.js         Vue Router configuration
│   ├── views/               Vue Page Components
│   │   ├── AboutPage.vue
│   │   ├── FeedbackPage.vue
│   │   ├── FormPage.vue
│   │   ├── HomePage.vue
│   │   └── RestaurantPage.vue
│   ├── App.vue              Root Vue Component
│   └── main.js              Frontend Entry Point
├── index.html               Root HTML template
├── package.json             Consolidated dependencies (Vue + Express + MongoDB)
├── package-lock.json        Dependency lockfile
├── vercel.json              Vercel deployment and API rewrite rules
├── vite.config.js           Vite build configuration
└── README.md                Project documentation
```

---

## Getting Started & Installation

### Prerequisites
- Node.js (v18+ recommended) installed on your system.
- MongoDB running locally (`mongodb://127.0.0.1:27017`) or a connection string to MongoDB Atlas.

## Local Setup and Running Guide

### 1. Clone or Open the Project
Navigate to your project root folder:
```bash
cd C:\Users\PC\ABCJ-MEVN

### 2. Configure the Backend Environment
Create a .env file directly inside your project root folder with the following variables:
```env
MONGODB_URI=mongodb://<username>:<password>@ac-ju136tq-shard-00-00.abv92xg.mongodb.net:27017,ac-ju136tq-shard-00-01.abv92xg.mongodb.net:27017,ac-ju136tq-shard-00-02.abv92xg.mongodb.net:27017/dbRestaurants?ssl=true&replicaSet=atlas-tk4q9n-shard-0&authSource=admin&appName=Cluster0
DB_NAME=dbRestaurants
PORT=3000
```

### 3. Install Dependencies
Install all project dependencies (frontend and backend packages combined) from the root folder:
```bash
npm install
```

## 4. Running the Application Locally

To run the full stack locally, you need two separate terminal windows:

### Terminal: 
```bash
vercel dev
```
---

## The ABCJ Team

ABCJ Finds was designed and developed by:
- **Justine Enriquez** — Database & Website Development
- **Angel Pineda** — Design & Front-End Development
- **Franchesca Sison** — Front-End & Code Structure
- **Bianca Zepeda** — Database & Back-End Facilitator
- **Steven San Diego** — Full-Stack & Integration Support

---

## License
This project is open-source and developed for academic and portfolio purposes.
