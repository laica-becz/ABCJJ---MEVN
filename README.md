# ABCJ Finds · Restaurant Database & Management System

> A modern, responsive restaurant database application powered by **MongoDB**, **Express**, **Vue.js (Vite)**, and **Node.js** (MEVN Stack). Designed to help users discover, search, manage, and keep local dining favorites in Pampanga up to date.

---

## Features

- **Local Discovery & Search:** Search restaurants by name, cuisine, or Pampanga location with instant filter options.
- **Interactive Dashboard:** Live database statistics tracking total records, recent updates (past 7 days), and average user ratings.
- **Full CRUD Operations:** Add new restaurant entries, update existing details, or remove records seamlessly.
- **Feedback & Support Hub:** Direct contact channels and user feedback submission form.
- **Modern UI/UX:** Clean typography, custom styling, and responsive layout built with Vue 3 Composition API and Vue Router.

---

## Tech Stack

- **Frontend:** Vue 3, Vite, Vue Router 4, Vanilla CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via official native MongoDB Driver)

---

## Project Directory Structure

```text
ABCJ-MEVN/
├── backend/
│   ├── .env               # Environment variables (MongoDB URI, Port)
│   └── server.js          # Express API server & MongoDB connection logic
├── images/
│   └── logo.png           # Brand asset
├── node_modules/
├── src/
│   ├── assets/
│   │   └── styles.css     # Global design system & styles
│   ├── router/
│   │   └── index.js       # Vue Router configuration
│   ├── views/
│   │   AboutPage.vue      # Developer credits & platform info
│   │   FormPage.vue       # Feedback & contact form page
│   │   HomePage.vue       # Dashboard stats, top-rated cards, latest updates
│   │   RestaurantPage.vue # Filterable, searchable restaurant grid with CRUD actions
│   ├── App.vue            # Root component layout (Header, Router View, Footer)
│   └── main.js            # Vue application entry point
├── index.html             # Vite HTML root template
├── package.json           # Project dependencies and build scripts
└── vite.config.js         # Vite configuration file
```

---

## Getting Started & Installation

### Prerequisites
- Node.js (v18+ recommended) installed on your system.
- MongoDB running locally (`mongodb://127.0.0.1:27017`) or a connection string to MongoDB Atlas.

### 1. Clone or Open the Project
Navigate to your project root folder:
```bash
cd C:\Users\PC\ABCJ-MEVN
```

### 2. Configure the Backend Environment
Create a `.env` file inside your **backend** folder with the following variables:
```env
MONGODB_URI=mongodb://127.0.0.1:27017/dbRestaurants
DB_NAME=dbRestaurants
PORT=3000
```

### 3. Install Dependencies
Install packages for both frontend and backend directories if required:
```bash
npm install
```

---

## Running the Application

To run the full stack locally, you need two separate terminal windows:

### Terminal 1: Start the Backend API Server
```bash
cd backend
node server.js
```
*Your Express server will connect to MongoDB and run on `http://localhost:3000`.*

### Terminal 2: Start the Frontend Vue Development Server
```bash
npm run dev
```
*Vite will start your local development server at `http://localhost:5173`.*

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
