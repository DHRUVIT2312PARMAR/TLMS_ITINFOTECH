# IT INFOTECH SkillHub

> **Learn · Practice · Get Certified**

A complete Digital Computer Skills Learning & Certification Platform built with MERN stack. A comprehensive typing & computer skills learning management system (TLMS) designed for students, educational institutions, and training centers.

## 📋 Features

### Core Features
- ✅ 6 Progressive Learning Modules
- ✅ Interactive Typing Tests & Exercises
- ✅ Real-time WPM & Accuracy Tracking
- ✅ Gamification System (XP, Badges, Streaks)
- ✅ Smart Certificate System with QR Verification
- ✅ Skill Passport (Public Profile)
- ✅ Leaderboards (Global, Weekly, Institute)
- ✅ Multi-Language Support (English, Gujarati, Hindi)

### Learning Modules
1. **Computer Fundamentals** 🖥️ - Basic computer knowledge
2. **Keyboard Mastery** ⌨️ - Keyboard layout and shortcuts
3. **Typing Skills** 📝 - Character, word, sentence, and paragraph typing
4. **Speed Typing** ⚡ - Timed tests and performance metrics
5. **Professional Typing Master** 👑 - Advanced proctored assessment
6. **Office Productivity** 💼 - MS Office and productivity tools

### Gamification
- Experience Points (XP) and Leveling System
- 15+ Achievement Badges
- Daily Streak Counter
- Multiple Leaderboards
- Weekly & Monthly Challenges

### Certificates
- Unique Certificate IDs (ITI-YYYY-CODE-XXXXX)
- QR Code Verification
- Digital & PDF Download
- Shareable on LinkedIn/Resume

## 🏗️ Technology Stack

### Frontend
- **React.js 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Zustand** - State management
- **React Router v6** - Navigation
- **Recharts** - Data visualization
- **i18next** - Multi-language support
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **Multer** - File uploads
- **Cloudinary** - Image storage

### Deployment
- **Vercel** - Frontend & API deployment
- **MongoDB Atlas** - Cloud database
- **Cloudinary** - Media storage

## 📦 Project Structure

```
TLMS_ITINFOTECH/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Zustand stores
│   │   ├── api/           # API calls
│   │   ├── i18n/          # Translations
│   │   ├── hooks/         # Custom hooks
│   │   └── App.jsx        # Main app
│   ├── vite.config.js
│   └── package.json
│
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── config/        # Configuration
│   │   ├── models/        # MongoDB schemas
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Route handlers
│   │   ├── middleware/    # Express middleware
│   │   ├── utils/         # Utility functions
│   │   └── server.js      # Entry point
│   ├── .env.example
│   └── package.json
│
├── Information/
│   └── IT_INFOTECH_SkillHub_Platform.md  # Full documentation
│
├── vercel.json
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn
- MongoDB (local or Atlas)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/DHRUVIT2312PARMAR/TLMS_ITINFOTECH.git
cd TLMS_ITINFOTECH
```

2. **Install dependencies**
```bash
npm install
```

Or separately:
```bash
npm install --workspace=client
npm install --workspace=server
```

3. **Setup environment variables**

Server `.env`:
```bash
cd server
cp .env.example .env
# Edit .env with your values
```

Client `.env.local`:
```bash
cd client
cat > .env.local << EOF
VITE_API_URL=http://localhost:5000/api
EOF
```

4. **Run development servers**

Both simultaneously:
```bash
npm run dev
```

Or separately:
```bash
npm run client     # Terminal 1 - http://localhost:3000
npm run server     # Terminal 2 - http://localhost:5000
```

5. **Access the application**
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000/api

## 🔑 API Endpoints

### Authentication
```
POST   /api/auth/signup
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/me
```

### Users
```
GET    /api/users/profile
PUT    /api/users/profile
GET    /api/users/stats
```

### Modules
```
GET    /api/modules
GET    /api/modules/:moduleId
POST   /api/modules/:moduleId/test-result
GET    /api/modules/:moduleId/user-progress
```

### Certificates
```
GET    /api/certificates
GET    /api/certificates/:certificateId
POST   /api/certificates/:certificateId/download
GET    /api/certificates/verify/:certificateId
```

### Leaderboards
```
GET    /api/leaderboard/global
GET    /api/leaderboard/weekly
GET    /api/leaderboard/institute/:instituteId
GET    /api/leaderboard/speed
```

### Achievements
```
GET    /api/achievements
GET    /api/achievements/badges
GET    /api/achievements/xp
```

## 📝 Database Models

### Core Models
- **User** - Student, instructor, admin profiles
- **Module** - Learning modules and content
- **TestResult** - Typing test performances
- **Certificate** - Issued certificates
- **Badge** - Achievements & badges
- **Streak** - Daily practice streaks
- **Leaderboard** - Performance rankings

## 🌐 Deployment

### Deploy to Vercel

1. **Connect GitHub repository**
```bash
git remote add origin https://github.com/DHRUVIT2312PARMAR/TLMS_ITINFOTECH.git
```

2. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

3. **Import on Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select GitHub repository
- Set environment variables
- Click "Deploy"

### Environment Variables for Vercel
```
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
FRONTEND_URL=your_vercel_domain
```

## 📚 Documentation

Full platform documentation available in:
- `Information/IT_INFOTECH_SkillHub_Platform.md`

This includes:
- Complete feature specifications
- Module details
- Gamification rules
- Business model
- Technical architecture

## 👥 User Roles

- **Student** - Practice typing, earn certificates
- **Instructor** - Manage batches, create assessments
- **Admin** - Full platform management, reports, settings

## 🎯 Roadmap

### Phase 1 (MVP)
- Core typing engine
- Modules 1-3
- Basic dashboard
- Certificate system

### Phase 2 (Q2 2026)
- Full gamification
- Skill Passport
- Admin dashboard
- Batch management

### Phase 3 (Q3 2026)
- AI Typing Coach
- Interview prep
- Mobile app
- Advanced analytics

### Phase 4 (Q4 2026)
- Multi-language support
- Job board integration
- White-label version

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email: support@itinfotech.in

## 👨‍💻 Author

**IT INFOTECH**
- GitHub: [@DHRUVIT2312PARMAR](https://github.com/DHRUVIT2312PARMAR)
- Platform: [IT INFOTECH SkillHub](https://itinfotech.in)

---

**Made with ❤️ for Digital Education**

*Learn · Practice · Get Certified*
