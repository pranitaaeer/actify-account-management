# Actify Business - Account Management System

A modern, frontend-only Account Management System built for the React Developer Intern assessment. This repository contains both the Web Application (React + Vite) and the Mobile Application (React Native + Expo), sharing a common mock dataset.

## Project Structure

```text
actify-demo/
├── shared/              # Shared mock data (Accounts, Leads, Deals, etc.)
├── web/                 # React + Vite + TypeScript (Web App)
└── native/              # React Native + Expo (Mobile App)
```

## Features

- **Dashboard:** Live stats, recent accounts, and top industries visualization.
- **Account Management:** View all accounts, search/filter, and add new accounts via a smooth modal.
- **Analytics:** Detailed Account Report with status distribution and industry breakdown.
- **CRM Modules:** Contacts, Leads, and Deals with animated lists.
- **User Profile:** Multi-tab profile management (Personal, Education, Experience, Other).
- **Inbox & Feedback:** Interactive inbox with read/unread states and feedback cards.
- **Animations:** Smooth page transitions, staggered list loading, and micro-interactions using `framer-motion` (Web) and `react-native-reanimated` (Native).
- **Responsive Design:** Fully responsive web layout and mobile-first native UI using Tailwind CSS / NativeWind.

## Tech Stack

### Web
- React 19 (Vite)
- TypeScript
- Tailwind CSS
- React Router DOM
- Framer Motion
- Lucide React (Icons)

### Native
- React Native (Expo)
- Expo Router
- TypeScript
- NativeWind (Tailwind CSS for React Native)
- React Native Reanimated
- Lucide React Native

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo Go app (for mobile testing)

### 1. Web Application Setup

```bash
cd web
npm install
npm run dev
```

The web app will run on `http://localhost:5173`.

### 2. Native Application Setup

```bash
cd native
npm install
npx expo start
```

Scan the QR code with the Expo Go app on your phone (Android/iOS) to view the app.

## Build & Deployment

### Web (Vercel)
The web app is ready to be deployed on Vercel.
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- Ensure SPA routing is configured (using `vercel.json`).

### Mobile (APK via EAS)
To generate an installable APK file, use Expo Application Services (EAS).
1. Install EAS CLI globally: `npm install -g eas-cli`
2. Login to your Expo account: `eas login`
3. Configure the build: `eas build:configure`
4. Build the APK (Preview profile): `eas build -p android --profile preview`
5. *(Note: Ensure `eas.json` is configured with `"buildType": "apk"` for the preview profile).*

## Demo Data

No backend is required for this assessment. All data is mocked in the `shared/data.ts` file.
- 100+ Accounts (Active/Inactive)
- 10 Industries
- Mock data for Contacts, Leads, Deals, Inbox, Jobs, and Test Results.

## Author

**Pranita Aeer**
