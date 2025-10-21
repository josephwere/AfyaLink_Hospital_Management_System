# 🚀 AfyaLink Deployment Guide

AfyaLink supports hybrid deployment (Local + Cloud).

---

## Local Deployment
```bash
docker-compose up -d
npm run dev
```

---

## Cloud Platforms
**Frontend:** Vercel / Netlify  
**Backend:** Render / Railway / Fly.io  
**Database:** Neon.tech / Supabase / AWS RDS

---

### Deploy Steps
Set your `.env` variables:
```
DATABASE_URL=postgresql://...
JWT_SECRET=your_secret_key
SMTP_EMAIL=...
SMTP_PASSWORD=...
```

Then build your project:
```bash
npm run build
```

Deploy backend & frontend separately.

---

## Android Wrapper
Build PWA and wrap using Trusted Web Activity (TWA):
```bash
npm run build:pwa
```

Result → `afyalink-android.apk`
