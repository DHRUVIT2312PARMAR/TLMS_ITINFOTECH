# IT INFOTECH SkillHub - Testing Guide

## 📋 Testing Overview

This guide covers manual testing, API testing, and automated testing for the IT INFOTECH SkillHub platform.

### Test Environments
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api
- **Database:** MongoDB (local)

---

## 🧪 Manual Testing Guide

### 1. Frontend Testing

#### 1.1 Homepage Testing

**Test Case 1.1.1: Homepage Load**
- [ ] Navigate to http://localhost:3000
- [ ] Expected: Homepage loads with hero section
- [ ] Check: Title "IT INFOTECH SkillHub" visible
- [ ] Check: Tagline "Learn · Practice · Get Certified" visible
- [ ] Check: Features section displays 6 cards
- [ ] Check: Stats section shows numbers
- [ ] Check: CTA buttons are clickable

**Test Case 1.1.2: Language Switching**
- [ ] Click language dropdown (EN/GU/HI)
- [ ] Select "GU" (Gujarati)
- [ ] Expected: All text changes to Gujarati
- [ ] Select "HI" (Hindi)
- [ ] Expected: All text changes to Hindi
- [ ] Select "EN" (English)
- [ ] Expected: Back to English

**Test Case 1.1.3: Navigation**
- [ ] Click "Login" button
- [ ] Expected: Redirect to /login
- [ ] Click "Sign Up" button
- [ ] Expected: Redirect to /signup
- [ ] Click "View Leaderboard"
- [ ] Expected: Redirect to /leaderboard

---

#### 1.2 Authentication Testing

**Test Case 1.2.1: Signup - Valid Data**
- [ ] Navigate to http://localhost:3000/signup
- [ ] Fill Form:
  - Name: "Test User"
  - Email: "testuser@gmail.com"
  - Password: "Test@123"
  - Confirm Password: "Test@123"
- [ ] Click "Sign Up"
- [ ] Expected: Success message appears
- [ ] Expected: Redirect to Dashboard
- [ ] Expected: User name appears in Navbar

**Test Case 1.2.2: Signup - Password Mismatch**
- [ ] Navigate to /signup
- [ ] Fill Form:
  - Name: "Test User 2"
  - Email: "testuser2@gmail.com"
  - Password: "Test@123"
  - Confirm Password: "Test@456" (different)
- [ ] Click "Sign Up"
- [ ] Expected: Error message "Passwords do not match"
- [ ] Expected: Form stays on signup page

**Test Case 1.2.3: Login - Valid Credentials**
- [ ] Navigate to http://localhost:3000/login
- [ ] Fill Form:
  - Email: "testuser@gmail.com"
  - Password: "Test@123"
- [ ] Click "Login"
- [ ] Expected: Success message appears
- [ ] Expected: Redirect to Dashboard
- [ ] Expected: Token stored in localStorage

**Test Case 1.2.4: Login - Invalid Credentials**
- [ ] Navigate to /login
- [ ] Fill Form:
  - Email: "testuser@gmail.com"
  - Password: "WrongPassword"
- [ ] Click "Login"
- [ ] Expected: Error message appears
- [ ] Expected: Stay on login page

**Test Case 1.2.5: Protected Route Access**
- [ ] Logout (clear localStorage token)
- [ ] Try to access http://localhost:3000/dashboard directly
- [ ] Expected: Redirect to /login

---

#### 1.3 Dashboard Testing

**Test Case 1.3.1: Dashboard Load**
- [ ] Login with valid credentials
- [ ] Navigate to Dashboard
- [ ] Expected: "Welcome back, [name]!" message
- [ ] Expected: 4 stat cards visible:
  - WPM (48)
  - Accuracy (97.3%)
  - XP Points (12,450)
  - Streak (23)

**Test Case 1.3.2: Learning Modules Display**
- [ ] Dashboard should show 6 modules:
  - [ ] Computer Fundamentals (🖥️)
  - [ ] Keyboard Mastery (⌨️)
  - [ ] Typing Skills (📝)
  - [ ] Speed Typing (⚡)
  - [ ] Professional Master (👑)
  - [ ] Office Productivity (💼)
- [ ] Each module shows progress bar
- [ ] Progress percentages are correct

**Test Case 1.3.3: Module Button Interaction**
- [ ] Click on a module card
- [ ] Expected: Navigate to typing test page
- [ ] Expected: Module details load

---

#### 1.4 Typing Test Page Testing

**Test Case 1.4.1: Test Interface Load**
- [ ] Navigate to Typing Test page
- [ ] Expected: Display text visible
- [ ] Expected: Input textarea visible
- [ ] Expected: Stats display (Time, WPM, Accuracy, Chars)
- [ ] Expected: Start/Stop buttons visible

**Test Case 1.4.2: Start Test**
- [ ] Click "Start Test"
- [ ] Expected: Timer starts (60 seconds)
- [ ] Expected: Input textarea focused
- [ ] Expected: Stats update as you type
- [ ] Type some text in textarea
- [ ] Expected:
  - Character count updates
  - Accuracy percentage updates
  - WPM calculation updates
  - Correctly typed characters turn green
  - Incorrectly typed characters turn red

**Test Case 1.4.3: Test Completion**
- [ ] Let timer reach 0 or click "Stop Test"
- [ ] Expected: Results section appears
- [ ] Expected: Shows:
  - Final WPM
  - Final Accuracy
  - Total Words
  - Total Characters
- [ ] Expected: "Try Again" button visible

**Test Case 1.4.4: Test Retry**
- [ ] Click "Try Again"
- [ ] Expected: Form resets
- [ ] Expected: Timer resets to 60
- [ ] Expected: Input cleared
- [ ] Expected: Results hidden

---

#### 1.5 Leaderboard Testing

**Test Case 1.5.1: Leaderboard Load**
- [ ] Navigate to http://localhost:3000/leaderboard
- [ ] Expected: Table with rankings visible
- [ ] Expected: Columns: Rank, Name, WPM, Accuracy, XP
- [ ] Expected: 5 sample users listed

**Test Case 1.5.2: Tab Switching**
- [ ] Global tab selected by default
- [ ] Expected: Rankings shown
- [ ] Click "Weekly" tab
- [ ] Expected: Weekly rankings displayed
- [ ] Click "Speed Challenge" tab
- [ ] Expected: Speed rankings displayed

**Test Case 1.5.3: Your Position Section**
- [ ] "Your Position" card visible
- [ ] Shows user's rank (#23)
- [ ] Shows user's stats
- [ ] Data highlighted in blue

---

#### 1.6 Certificates Page Testing

**Test Case 1.6.1: Certificates List**
- [ ] Login and navigate to /certificates
- [ ] Expected: List of earned certificates
- [ ] Each certificate shows:
  - [ ] Title
  - [ ] Certificate ID
  - [ ] Issue date

**Test Case 1.6.2: Certificate Actions**
- [ ] "View" button opens certificate details
- [ ] "Download" button triggers PDF download
- [ ] "Share" button shows share options

---

#### 1.7 Profile Page Testing

**Test Case 1.7.1: Profile Load**
- [ ] Navigate to /profile
- [ ] Expected: User avatar (first letter)
- [ ] Expected: User name
- [ ] Expected: User email
- [ ] Expected: Profile stats visible

**Test Case 1.7.2: Profile Statistics**
- [ ] Best WPM: 48
- [ ] Best Accuracy: 97.3%
- [ ] XP Points: 12,450
- [ ] Days Streak: 23

**Test Case 1.7.3: Profile Actions**
- [ ] "Edit Profile" button visible
- [ ] "Change Password" button visible
- [ ] "Logout" button visible and functional

---

#### 1.8 Responsive Design Testing

**Test Case 1.8.1: Mobile Responsiveness**
- [ ] Open DevTools (F12)
- [ ] Set viewport to iPhone 12 (390x844)
- [ ] Expected: Navigation collapses to hamburger menu
- [ ] Expected: All content readable
- [ ] Expected: No horizontal scrolling

**Test Case 1.8.2: Tablet Responsiveness**
- [ ] Set viewport to iPad (768x1024)
- [ ] Expected: Two-column layout for modules
- [ ] Expected: All elements visible and functional

**Test Case 1.8.3: Desktop Responsiveness**
- [ ] Set viewport to Desktop (1920x1080)
- [ ] Expected: Three-column grid for modules
- [ ] Expected: Full feature display

---

### 2. API Testing

#### 2.1 Health Check

**Test Case 2.1.1: API Health**
```bash
curl -X GET http://localhost:5000/api/health
```
Expected Response:
```json
{
  "status": "OK",
  "message": "IT INFOTECH SkillHub API is running",
  "timestamp": "2026-06-16T10:30:00.000Z"
}
```

---

#### 2.2 Authentication Endpoints

**Test Case 2.2.1: Signup Endpoint**
```bash
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "API Test User",
    "email": "apitest@gmail.com",
    "password": "Test@123"
  }'
```
Expected Response (201):
```json
{
  "user": { "id": "...", "name": "API Test User", "email": "apitest@gmail.com" },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Test Case 2.2.2: Login Endpoint**
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "apitest@gmail.com",
    "password": "Test@123"
  }'
```
Expected Response (200):
```json
{
  "user": { "id": "...", "name": "API Test User", "email": "apitest@gmail.com" },
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Test Case 2.2.3: Get Current User**
```bash
curl -X GET http://localhost:5000/api/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```
Expected Response (200):
```json
{
  "id": "...",
  "name": "API Test User",
  "email": "apitest@gmail.com"
}
```

---

#### 2.3 Modules Endpoints

**Test Case 2.3.1: Get All Modules**
```bash
curl -X GET http://localhost:5000/api/modules
```
Expected Response: Array of modules

**Test Case 2.3.2: Get Specific Module**
```bash
curl -X GET http://localhost:5000/api/modules/1
```
Expected Response: Module details

**Test Case 2.3.3: Submit Test Result**
```bash
curl -X POST http://localhost:5000/api/modules/1/test-result \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "wpm": 45,
    "accuracy": 96.5,
    "errors": 3,
    "duration": 60
  }'
```

---

#### 2.4 Leaderboard Endpoints

**Test Case 2.4.1: Get Global Leaderboard**
```bash
curl -X GET http://localhost:5000/api/leaderboard/global
```

**Test Case 2.4.2: Get Weekly Leaderboard**
```bash
curl -X GET http://localhost:5000/api/leaderboard/weekly
```

**Test Case 2.4.3: Get Speed Leaderboard**
```bash
curl -X GET http://localhost:5000/api/leaderboard/speed
```

---

### 3. Browser Console Testing

**Test Case 3.1: Check for Errors**
- [ ] Open DevTools Console (F12)
- [ ] Navigate through all pages
- [ ] Expected: No red error messages
- [ ] Expected: No broken network requests
- [ ] Check Network tab for failed requests

**Test Case 3.2: Check Local Storage**
- [ ] Open DevTools Storage tab
- [ ] Expected: "token" key present after login
- [ ] Expected: "language" key present
- [ ] Token should be valid JWT

**Test Case 3.3: Check Performance**
- [ ] Open Lighthouse in DevTools
- [ ] Run Performance audit
- [ ] Expected: Score > 80
- [ ] Expected: No critical issues

---

## 🤖 Automated Testing (Ready to Implement)

### Test Files Structure
```
tests/
├── unit/
│   ├── store.test.js (Zustand store)
│   └── api.test.js (API functions)
├── integration/
│   ├── auth.test.js (Auth flow)
│   ├── dashboard.test.js (Dashboard)
│   └── typing.test.js (Typing test)
└── e2e/
    ├── user-flow.test.js (Complete user journey)
    └── api-integration.test.js (API endpoints)
```

### Running Tests
```bash
npm run test
```

---

## ✅ Test Checklist

### Frontend Tests
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Language switching works (EN/GU/HI)
- [ ] Signup with valid data works
- [ ] Signup with invalid data shows errors
- [ ] Login with valid credentials works
- [ ] Login with invalid credentials shows errors
- [ ] Protected routes redirect to login
- [ ] Dashboard displays user info
- [ ] Typing test starts and stops
- [ ] Test results display correctly
- [ ] Leaderboard shows rankings
- [ ] Profile page loads
- [ ] Responsive design works on mobile/tablet/desktop

### API Tests
- [ ] Health endpoint returns 200
- [ ] Signup endpoint creates user
- [ ] Login endpoint returns token
- [ ] Auth me endpoint returns user
- [ ] Protected endpoints require token
- [ ] Invalid token returns 401
- [ ] Module endpoints work
- [ ] Leaderboard endpoints work
- [ ] Error responses are proper

### Browser Tests
- [ ] No console errors
- [ ] Network requests successful
- [ ] LocalStorage working
- [ ] Performance good
- [ ] Mobile responsive

---

## 🐛 Common Issues & Solutions

### Issue 1: CORS Error
**Error:** "Access to XMLHttpRequest blocked by CORS policy"
**Solution:**
- Check CORS config in `server/src/server.js`
- Verify FRONTEND_URL in environment
- Restart server

### Issue 2: Token Invalid
**Error:** "Invalid or expired token"
**Solution:**
- Check JWT_SECRET matches between signup and login
- Clear localStorage and login again
- Check token expiration time

### Issue 3: MongoDB Connection Error
**Error:** "MongoDB connection failed"
**Solution:**
- Ensure MongoDB is running: `mongod`
- Check connection string in .env
- Verify localhost:27017 is accessible

### Issue 4: API 404 Errors
**Error:** "404 Not Found" on API calls
**Solution:**
- Check API endpoint paths are correct
- Verify backend is running on port 5000
- Check request method (GET/POST)

### Issue 5: Frontend Not Loading
**Error:** "Cannot GET /"
**Solution:**
- Check Vite is running: `npm run client`
- Verify frontend port is 3000
- Check VITE_API_URL in .env.local

---

## 📊 Test Results Template

```
Test Run Date: ___________
Tester Name: ___________
Platform: ___________

FRONTEND TESTS
[ ] Homepage: PASS / FAIL
[ ] Auth: PASS / FAIL
[ ] Dashboard: PASS / FAIL
[ ] Typing Test: PASS / FAIL
[ ] Leaderboard: PASS / FAIL
[ ] Profile: PASS / FAIL
[ ] Responsive: PASS / FAIL

API TESTS
[ ] Health: PASS / FAIL
[ ] Auth: PASS / FAIL
[ ] Modules: PASS / FAIL
[ ] Leaderboard: PASS / FAIL

BROWSER TESTS
[ ] Console Errors: PASS / FAIL
[ ] Network: PASS / FAIL
[ ] Performance: PASS / FAIL

Overall Status: PASS / FAIL
Issues Found: ___________
Notes: ___________
```

---

## 📞 Support

For testing issues or questions:
- Email: support@itinfotech.in
- GitHub Issues: [TLMS_ITINFOTECH Issues](https://github.com/DHRUVIT2312PARMAR/TLMS_ITINFOTECH/issues)

---

**Happy Testing! 🧪**
