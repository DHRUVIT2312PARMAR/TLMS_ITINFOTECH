# IT INFOTECH SkillHub - Deployment Guide

This guide walks you through deploying the IT INFOTECH SkillHub platform to Vercel and setting up a production-ready environment.

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier available)
- MongoDB Atlas account (free tier available)
- Cloudinary account (free tier available)
- Node.js v18+

## 🔧 Step 1: Prepare Your Repository

### 1.1 Initialize Git

```bash
cd "d:\PROJECT\Typing Learning Managment System IT INFOTECH"
git init
git add .
git commit -m "Initial commit: MERN stack project setup"
```

### 1.2 Add Remote Repository

```bash
git remote add origin https://github.com/DHRUVIT2312PARMAR/TLMS_ITINFOTECH.git
git branch -M main
git push -u origin main
```

## 📦 Step 2: Setup External Services

### 2.1 MongoDB Atlas Setup

1. Go to [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string:
   - Click "Connect"
   - Choose "Drivers"
   - Copy the connection string
   - Format: `mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>`

### 2.2 Cloudinary Setup

1. Go to [cloudinary.com](https://cloudinary.com)
2. Sign up for free account
3. Get your credentials from the dashboard:
   - Cloud Name
   - API Key
   - API Secret

### 2.3 Razorpay Setup (Optional - for payments)

1. Go to [razorpay.com](https://razorpay.com)
2. Create account
3. Get API keys from dashboard
4. Test mode keys for development

## 🚀 Step 3: Deploy Backend to Vercel

### Option A: Deploy as Serverless Function

1. **Create `server/api/index.js`** (Vercel serverless format):

```javascript
// server/api/index.js
import app from '../src/server.js'

export default app
```

2. **Update `vercel.json`**:

```json
{
  "version": 2,
  "buildCommand": "npm run build",
  "outputDirectory": ".",
  "framework": "express",
  "functions": {
    "server/api/index.js": {
      "maxDuration": 60,
      "memory": 1024
    }
  },
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/api/index.js"
    },
    {
      "src": "/(.*)",
      "dest": "/client/dist/$1"
    }
  ],
  "env": {
    "MONGODB_URI": "@mongodb_uri",
    "JWT_SECRET": "@jwt_secret",
    "CLOUDINARY_CLOUD_NAME": "@cloudinary_cloud_name",
    "CLOUDINARY_API_KEY": "@cloudinary_api_key",
    "CLOUDINARY_API_SECRET": "@cloudinary_api_secret",
    "RAZORPAY_KEY_ID": "@razorpay_key_id",
    "RAZORPAY_KEY_SECRET": "@razorpay_key_secret",
    "NODE_ENV": "production"
  }
}
```

### Option B: Deploy Backend Separately (Recommended for production)

Use Railway, Render, or Heroku:

**Railway:**
1. Go to [railway.app](https://railway.app)
2. Create new project
3. Connect GitHub repository
4. Add environment variables
5. Deploy

**Connection string format for Railway:**
- Set `MONGODB_URI` and other env vars in project settings

### Step 4: Deploy Frontend to Vercel

1. **Go to [vercel.com](https://vercel.com)**

2. **Click "New Project"**

3. **Import GitHub repository**
   - Select `TLMS_ITINFOTECH`

4. **Configure Project Settings:**
   - Framework: Vite
   - Root Directory: `client`
   - Build Command: `npm run build --workspace=client`
   - Output Directory: `client/dist`

5. **Add Environment Variables:**
   ```
   VITE_API_URL=https://your-backend-domain.com/api
   VITE_ENV=production
   ```

6. **Click Deploy**

## 🔐 Step 5: Environment Variables Setup

### Vercel Environment Variables

Go to Project Settings → Environment Variables and add:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tlms_prod
JWT_SECRET=your_super_secret_key_min_32_chars_random_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
FRONTEND_URL=https://your-vercel-domain.vercel.app
NODE_ENV=production
JWT_EXPIRE=7d
```

### Local Development

Create `.env` files:

**`server/.env`:**
```bash
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/tlms_itinfotech
JWT_SECRET=your_dev_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
RAZORPAY_KEY_ID=test_key_id
RAZORPAY_KEY_SECRET=test_key_secret
FRONTEND_URL=http://localhost:3000
```

**`client/.env.local`:**
```bash
VITE_API_URL=http://localhost:5000/api
VITE_ENV=development
```

## 📝 Step 6: Database Setup

### MongoDB Collections to Create

```javascript
// Run these in MongoDB Compass or MongoDB Atlas Web UI

// Users Collection
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["email", "password", "name"],
      properties: {
        _id: { bsonType: "objectId" },
        email: { bsonType: "string", pattern: "^.+@.+$" },
        password: { bsonType: "string" },
        name: { bsonType: "string" },
        role: { enum: ["student", "instructor", "admin"] },
        createdAt: { bsonType: "date" },
        updatedAt: { bsonType: "date" }
      }
    }
  }
})

// Modules Collection
db.createCollection("modules")

// Test Results Collection
db.createCollection("testResults")

// Certificates Collection
db.createCollection("certificates")

// Achievements Collection
db.createCollection("achievements")
```

## 🔄 Step 7: CI/CD Setup (Optional)

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Install dependencies
        run: npm install
      
      - name: Run tests
        run: npm test
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

## 🧪 Step 8: Testing Deployment

1. **Test Health Check:**
   ```bash
   curl https://your-domain.vercel.app/api/health
   ```

2. **Test Authentication:**
   ```bash
   curl -X POST https://your-domain.vercel.app/api/auth/signup \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","password":"123456"}'
   ```

3. **Test Frontend:**
   - Open `https://your-domain.vercel.app` in browser
   - Check console for errors
   - Try signing up and logging in

## 📊 Monitoring & Logs

### Vercel Analytics
- Go to Project → Analytics
- Monitor build times, response times, and errors

### MongoDB Monitoring
- Atlas dashboard shows connection stats
- Set up alerts for slow queries

### Error Tracking
Consider adding Sentry:
```bash
npm install @sentry/react @sentry/tracing
```

## 🔒 Security Checklist

- [ ] All secrets stored in environment variables
- [ ] API keys rotated in production
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] CORS properly configured
- [ ] Rate limiting enabled
- [ ] Input validation on all endpoints
- [ ] Database backups configured
- [ ] MongoDB IP whitelist set up
- [ ] JWT tokens have expiration
- [ ] Passwords properly hashed

## 🔄 Continuous Deployment

Every push to `main` branch will:
1. Run tests
2. Build the project
3. Deploy to Vercel automatically

## 📞 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
vercel build --yes --prod
```

### Database Connection Error
- Check MongoDB connection string
- Verify IP whitelist in MongoDB Atlas
- Test connection locally first

### Frontend Not Loading
- Check `VITE_API_URL` environment variable
- Clear browser cache and cookies
- Check browser console for errors

### API Not Responding
- Check Vercel logs: `vercel logs <your-project>`
- Verify all environment variables are set
- Test health endpoint

## 🚀 Scaling Tips

1. **Database:**
   - Enable MongoDB Atlas auto-scaling
   - Set up connection pooling
   - Create indexes on frequently queried fields

2. **Frontend:**
   - Enable Vercel Analytics
   - Use Edge Functions for faster response
   - Implement caching strategies

3. **Backend:**
   - Use Redis for session caching
   - Implement API rate limiting
   - Set up load balancing if needed

## 📖 Additional Resources

- [Vercel Docs](https://vercel.com/docs)
- [MongoDB Atlas Docs](https://www.mongodb.com/docs/atlas/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev)

---

**Happy Deploying! 🎉**

For support, contact: support@itinfotech.in
