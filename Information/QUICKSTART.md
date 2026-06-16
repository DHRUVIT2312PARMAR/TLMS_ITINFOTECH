# Quick Start Guide - IT INFOTECH SkillHub

Get the project running locally in 5 minutes!

## 📋 Prerequisites

- Node.js v18+ ([download here](https://nodejs.org))
- Git ([download here](https://git-scm.com))
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) free account)

## 🚀 Quick Setup

### 1. Clone the Repository

```bash
git clone https://github.com/DHRUVIT2312PARMAR/TLMS_ITINFOTECH.git
cd "Typing Learning Managment System IT INFOTECH"
```

### 2. Install Dependencies

```bash
npm install
```

This installs dependencies for both client and server (using workspaces).

### 3. Setup Environment Variables

**Create `server/.env`:**
```bash
cd server
cp .env.example .env
```

Edit `server/.env` with your MongoDB connection string:
```
MONGODB_URI=mongodb://localhost:27017/tlms_itinfotech
JWT_SECRET=your_super_secret_key_change_in_production
NODE_ENV=development
PORT=5000
CLOUDINARY_CLOUD_NAME=test
CLOUDINARY_API_KEY=test
CLOUDINARY_API_SECRET=test
```

**Create `client/.env.local`:**
```bash
cd ../client
cat > .env.local << EOF
VITE_API_URL=http://localhost:5000/api
VITE_ENV=development
EOF
```

### 4. Start Development Servers

**Option A: Run both together**
```bash
npm run dev
```

**Option B: Run separately (recommended for debugging)**

Terminal 1 - Frontend (http://localhost:3000):
```bash
npm run client
```

Terminal 2 - Backend (http://localhost:5000):
```bash
npm run server
```

### 5. Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api
- **Health Check:** http://localhost:5000/api/health

## 🎯 What You Get

Frontend running with:
- ✅ React + Vite (Hot reload)
- ✅ Tailwind CSS styling
- ✅ Multi-language support (EN, GU, HI)
- ✅ Zustand state management
- ✅ React Router navigation

Backend running with:
- ✅ Express.js API
- ✅ MongoDB connection
- ✅ Authentication middleware
- ✅ Error handling

## 📁 Project Structure

```
.
├── client/                 # React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable components
│   │   ├── store/         # Zustand stores
│   │   ├── i18n/          # Translations
│   │   └── api/           # API calls
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── server/                 # Node.js backend
│   ├── src/
│   │   ├── server.js      # Entry point
│   │   ├── config/        # Configuration
│   │   ├── routes/        # API routes
│   │   ├── middleware/    # Express middleware
│   │   └── ...
│   ├── .env.example
│   └── package.json
│
├── Information/            # Documentation
├── package.json           # Root workspace config
└── README.md
```

## 🔨 Common Commands

### Development
```bash
npm run dev              # Start both servers
npm run client           # Frontend only
npm run server           # Backend only
npm run build            # Build for production
npm run lint             # Run linter
npm run test             # Run tests
```

### Database
```bash
# Connect to local MongoDB
mongosh
use tlms_itinfotech
```

## 📱 Test Login

Create a new account:
1. Visit http://localhost:3000
2. Click "Sign Up"
3. Fill in details and submit
4. Auto-logged in to dashboard

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Solution: Make sure MongoDB is running
Windows: mongod in cmd
macOS: brew services start mongodb-community
Linux: sudo systemctl start mongod
```

### Port Already in Use
```bash
# Change port in .env
PORT=5001
```

### Module Not Found Error
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Vite Not Hot Reloading
```bash
# Restart the dev server and clear cache
rm -rf client/.vite
npm run client
```

## 📚 Next Steps

1. **Explore the Platform:**
   - Test typing features
   - Check dashboard
   - View leaderboard

2. **Read Documentation:**
   - See `README.md` for full documentation
   - See `Information/IT_INFOTECH_SkillHub_Platform.md` for platform spec
   - See `DEPLOYMENT.md` for production deployment

3. **Customize:**
   - Update colors in `client/tailwind.config.js`
   - Add your branding
   - Configure API endpoints

4. **Deploy:**
   - Push to GitHub
   - Connect to Vercel
   - Set environment variables
   - Deploy with one click!

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/AmazingFeature`
2. Commit changes: `git commit -m 'Add feature'`
3. Push: `git push origin feature/AmazingFeature`
4. Open Pull Request

## 📞 Support

- 📧 Email: support@itinfotech.in
- 🐛 Issues: GitHub Issues
- 💬 Discussions: GitHub Discussions

## 📄 License

MIT License - See LICENSE file for details

---

**Happy Coding! 🎉**

*Learn · Practice · Get Certified*
