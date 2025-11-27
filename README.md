# PulseFit - Your All-in-One Fitness & Wellness Tracker

*A modern, user-friendly fitness and health tracking web application built for the Indian lifestyle.*

---

### Live Demo
[https://fitness-tracker-ashy.vercel.app/](https://fitness-tracker-ashy.vercel.app/) 

---

## Features

PulseFit is a complete health and fitness companion with the following powerful features:

- **Calorie Tracker** – Track calories with a rich database of **Indian foods** (Veg, Non-Veg, Jain)
- **BMI Calculator** – Instant BMI calculation with health condition insights
- **Diet Plans** – Explore popular diet plans (Keto, Paleo, Mediterranean, Vegan, etc.)
- **Workout & Fitness Videos** – Curated YouTube fitness and diet videos
- **Sleep & Water Tracking** (Coming soon in full dashboard)
- **Doctor & Professional Directory** – Find health experts with search functionality
- **Multi-Step User Onboarding** – Detailed profile setup for personalized experience
- **Responsive Dashboard** with Chart.js visualizations
- **Secure Authentication** – Login, Register, Forgot Password with OTP verification
- **Profile Management** – View and edit detailed user profile

---

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Charts**: [Chart.js](https://www.chartjs.org/)
- **Icons**: Font Awesome
- **Backend Ready**: Designed to integrate with Node.js + Express + MongoDB (API routes already used)
- **Authentication**: JWT-based (token stored in localStorage)

---

## Project Structure

```
PulseFit/
├── bmi.html, bmi.js, bmi.css
├── calorie.html, calorie.js, calorie.css
├── diet.html, diet.js, diet.css
├── doctor.html, doctor.js, doctor.css
├── fitness.html, fitness.js
├── yoga.html (similar structure)
├── dashboard.html, dashboard.js, dashboard.css
├── account.html, account.js, account.css     (Registration)
├── editprofile.html, editprofile.js         (Profile Edit)
├── login.html, login.css
├── forgotPassword.html, forgotPassword.js
├── water.html, sleep.html, workouttracker.html
└── assets/ (images, icons, etc.)
```

---

## Key Features in Detail

### Indian Food Calorie Tracker
- 100+ popular Indian dishes (Paneer Tikka, Dal Makhani, Chole Bhature, etc.)
- Categorized into Veg / Non-Veg / Jain
- Save daily intake with date & time
- View history and weekly insights

### Multi-Step Registration
- 11-step detailed onboarding collecting:
  - Personal info, fitness goals, diet habits
  - Sleep patterns, meal timing, activity level
  - Health conditions and wellness rating

### Dashboard with Visualizations
- Weekly calorie, sleep, water intake charts
- Powered by Chart.js
- Real-time data from backend APIs

---

## How to Run Locally

1. **Clone the repository**
  
2. **Open in browser** (No build required for frontend)
   ```bash
   open index.html   # Mac
   start index.html  # Windows
   ```

3. **For full functionality (backend required):**
   - Set up a Node.js + Express + MongoDB backend
   - API endpoints used:
     - `/auth/create-account`, `/auth/login`
     - `/calories/*`, `/api/sleep`, `/api/water-intake`
     - `/api/user/profile`

> Note: This repo contains only the **frontend**. Backend is structured to be easily integrated.

## Made with ❤️ for a Healthier India

**PulseFit** – Track. Improve. Transform.
