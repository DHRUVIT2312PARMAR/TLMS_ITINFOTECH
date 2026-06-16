# Project Directory Structure

## Complete File Tree

```
TLMS_ITINFOTECH/
│
├── Information/
│   └── IT_INFOTECH_SkillHub_Platform.md    # Full platform specification
│
├── client/                                  # Frontend (React + Vite)
│   ├── index.html                          # HTML entry point
│   ├── package.json                        # Frontend dependencies
│   ├── vite.config.js                      # Vite configuration
│   ├── tailwind.config.js                  # Tailwind theme
│   ├── postcss.config.js                   # PostCSS config
│   ├── .eslintrc.json                      # ESLint configuration
│   ├── .env.example                        # Environment template
│   │
│   └── src/
│       ├── main.jsx                        # React entry point
│       ├── App.jsx                         # Main app component
│       ├── index.css                       # Global styles
│       │
│       ├── api/
│       │   └── axios.js                    # API client configuration
│       │
│       ├── components/
│       │   ├── Navbar.jsx                  # Navigation bar
│       │   └── Footer.jsx                  # Footer
│       │
│       ├── pages/
│       │   ├── HomePage.jsx                # Landing page
│       │   ├── LoginPage.jsx               # Login
│       │   ├── SignupPage.jsx              # Registration
│       │   ├── DashboardPage.jsx           # Student dashboard
│       │   ├── TypingTestPage.jsx          # Typing test interface
│       │   ├── CertificatesPage.jsx        # Certificate management
│       │   ├── ProfilePage.jsx             # User profile
│       │   ├── LeaderboardPage.jsx         # Rankings
│       │   └── NotFoundPage.jsx            # 404 page
│       │
│       ├── store/
│       │   └── authStore.js                # Zustand auth store
│       │
│       ├── hooks/                          # (Ready for custom hooks)
│       │
│       ├── utils/                          # (Ready for utilities)
│       │
│       └── i18n/
│           ├── index.js                    # i18next config
│           └── locales/
│               ├── en.json                 # English translations
│               ├── gu.json                 # Gujarati translations
│               └── hi.json                 # Hindi translations
│
├── server/                                  # Backend (Node.js + Express)
│   ├── package.json                        # Backend dependencies
│   ├── .env.example                        # Environment template
│   │
│   └── src/
│       ├── server.js                       # Express app entry point
│       │
│       ├── config/
│       │   └── database.js                 # MongoDB connection
│       │
│       ├── middleware/
│       │   ├── authMiddleware.js           # JWT authentication
│       │   └── errorHandler.js             # Error handling
│       │
│       ├── routes/
│       │   ├── authRoutes.js               # Auth endpoints
│       │   ├── userRoutes.js               # User endpoints
│       │   ├── moduleRoutes.js             # Module endpoints
│       │   ├── certificateRoutes.js        # Certificate endpoints
│       │   ├── leaderboardRoutes.js        # Leaderboard endpoints
│       │   └── achievementRoutes.js        # Achievement endpoints
│       │
│       ├── models/                         # (Ready for MongoDB schemas)
│       ├── controllers/                    # (Ready for route handlers)
│       ├── utils/                          # (Ready for utilities)
│       └── services/                       # (Ready for business logic)
│
├── .gitignore                              # Git ignore patterns
├── package.json                            # Root monorepo config
├── vercel.json                             # Vercel deployment config
│
├── README.md                               # Complete documentation
├── QUICKSTART.md                           # 5-minute setup guide
├── DEPLOYMENT.md                           # Production deployment guide
├── PROJECT_SETUP_SUMMARY.md                # This project overview
└── PROJECT_STRUCTURE.md                    # This file
```

## File Count Summary

```
Frontend Files:         25+ files
Backend Files:          20+ files
Configuration Files:    15+ files
Documentation Files:    6 files
Translation Files:      3 files
────────────────────────────────
Total:                  ~70 files
```

## Key Directories

### 📁 `/client`
React frontend with Vite, Tailwind CSS, and multi-language support.
- **Size:** ~10MB (with node_modules)
- **Port:** 3000

### 📁 `/server`
Node.js + Express backend with MongoDB integration.
- **Size:** ~300MB (with node_modules)
- **Port:** 5000

### 📁 `/Information`
Project specification and documentation.
- Contains complete platform requirements
- Feature descriptions
- Module specifications

## Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Root workspace configuration |
| `vercel.json` | Vercel deployment config |
| `client/vite.config.js` | Vite build configuration |
| `client/tailwind.config.js` | Tailwind theme setup |
| `client/.eslintrc.json` | Linting rules |
| `server/.env.example` | Backend env template |
| `client/.env.example` | Frontend env template |

## Environment Variables

### Backend (`.env`)
```
MONGODB_URI
JWT_SECRET
NODE_ENV
PORT
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
RAZORPAY_KEY_ID
RAZORPAY_KEY_SECRET
FRONTEND_URL
JWT_EXPIRE
```

### Frontend (`.env.local`)
```
VITE_API_URL
VITE_ENV
```

## API Routes Structure

```
/api/
├── /auth
│   ├── POST   /login
│   ├── POST   /signup
│   ├── GET    /me
│   └── POST   /logout
│
├── /users
│   ├── GET    /profile
│   ├── PUT    /profile
│   └── GET    /stats
│
├── /modules
│   ├── GET    / (list all)
│   ├── GET    /:moduleId
│   ├── POST   /:moduleId/test-result
│   └── GET    /:moduleId/user-progress
│
├── /certificates
│   ├── GET    / (user certificates)
│   ├── GET    /:certificateId
│   ├── POST   /:certificateId/download
│   └── GET    /verify/:certificateId
│
├── /leaderboard
│   ├── GET    /global
│   ├── GET    /weekly
│   ├── GET    /institute/:instituteId
│   └── GET    /speed
│
└── /achievements
    ├── GET    / (user achievements)
    ├── GET    /badges
    └── GET    /xp

Health Check:
GET /api/health
```

## Database Collections (MongoDB)

```
MongoDB (TLMS_ITINFOTECH)
│
├── users
│   ├── _id
│   ├── email
│   ├── password (hashed)
│   ├── name
│   ├── role (student/instructor/admin)
│   └── timestamps
│
├── modules
│   ├── _id
│   ├── name
│   ├── description
│   ├── order
│   └── content
│
├── test_results
│   ├── _id
│   ├── userId
│   ├── moduleId
│   ├── wpm
│   ├── accuracy
│   └── timestamp
│
├── certificates
│   ├── _id
│   ├── certificateId (ITI-YYYY-CODE-XXXXX)
│   ├── userId
│   ├── moduleId
│   ├── qrCode
│   ├── status
│   └── timestamp
│
├── achievements
│   ├── _id
│   ├── userId
│   ├── badge
│   ├── unlockedAt
│   └── type
│
├── leaderboards
│   ├── _id
│   ├── userId
│   ├── totalXP
│   ├── totalWPM
│   ├── bestAccuracy
│   └── rank
│
└── batches (for institutes)
    ├── _id
    ├── instituteId
    ├── name
    ├── students[]
    └── instructor
```

## Page Routes (Frontend)

```
/                          - HomePage (public)
/login                     - LoginPage (public)
/signup                    - SignupPage (public)
/dashboard                 - DashboardPage (protected)
/typing-test/:moduleId    - TypingTestPage (protected)
/certificates             - CertificatesPage (protected)
/profile                  - ProfilePage (protected)
/leaderboard              - LeaderboardPage (public)
/*                        - NotFoundPage (404)
```

## Component Hierarchy

```
App
├── Navbar
│   ├── Links
│   ├── Language Selector
│   └── Auth Buttons
│
├── Routes
│   ├── HomePage
│   ├── LoginPage
│   ├── SignupPage
│   ├── DashboardPage
│   │   ├── Stats Cards
│   │   ├── Progress Bars
│   │   └── Achievements
│   ├── TypingTestPage
│   │   ├── Test Display
│   │   ├── Input Area
│   │   └── Results
│   ├── CertificatesPage
│   │   └── Certificate List
│   ├── ProfilePage
│   │   ├── Profile Info
│   │   ├── Statistics
│   │   └── Actions
│   ├── LeaderboardPage
│   │   ├── Tabs
│   │   ├── Rankings Table
│   │   └── Your Position
│   └── NotFoundPage
│
└── Footer
    ├── Links
    ├── Social
    └── Copyright
```

## State Management (Zustand Stores)

```
authStore
├── user (current user data)
├── token (JWT token)
├── isLoading (loading state)
├── error (error message)
├── checkAuth() (verify session)
├── login() (authenticate)
├── signup() (register)
├── logout() (clear session)
└── updateProfile() (update user data)

(Ready for more stores:
- moduleStore
- gameStore (XP, badges)
- leaderboardStore
- certificateStore
)
```

## Translation Keys (i18n)

### Common
- appName, tagline, login, signup, logout, profile, settings, dashboard, etc.

### Auth
- welcome, email, password, forgotPassword, rememberMe, etc.

### Modules
- computerFundamentals, keyboardMastery, typingSkills, speedTyping, etc.

### Typing
- startTest, stopTest, wpm, accuracy, errors, time, results, etc.

### Gamification
- xp, level, badge, coins, streak, leaderboard, achievements, etc.

### Certificates
- certificate, certificateId, issuedDate, verify, download, share, view

## Development Workflow

```
Edit Code
    ↓
npm run dev (watches & rebuilds)
    ↓
Browser Hot Reload (Vite)
    ↓
Test Features
    ↓
npm run lint (check code quality)
    ↓
npm run test (run tests)
    ↓
Git Commit
    ↓
Git Push to GitHub
    ↓
Vercel Auto Deploy
```

## Build Output

```
Frontend Build:
client/dist/
├── index.html
├── assets/
│   ├── main.xxxxxxxx.js (bundled JS)
│   └── index.xxxxxxxx.css (bundled CSS)
└── vite.svg

Backend Build:
No build required (Node.js runs directly)
```

---

**Total Project Size:** ~70 files, ~600 MB (with node_modules)

For the latest directory structure, run:
```bash
cd "d:\PROJECT\Typing Learning Managment System IT INFOTECH"
npm run build
```
