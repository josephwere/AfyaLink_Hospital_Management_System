# ⚙️ AfyaLink Installation Guide

## Prerequisites
- Node.js v18+  
- PostgreSQL 16+  
- Docker & Docker Compose  
- Git CLI  
- Optional: Redis

---

### Step 1 — Clone
```bash
git clone https://github.com/GoldEdgeLabs/AfyaLink.git
```

### Step 2 — Frontend
```bash
cd frontend
npm install
npm run dev
```

### Step 3 — Backend
```bash
cd backend
npm install
npx prisma migrate dev --name init
npm run dev
```

### Step 4 — Database
```bash
docker-compose up -d
```

### Step 5 — Seed Admin Account
Email: josephogwe8@gmail.com  
Password: <your-admin-password>

Then open [http://localhost:3000](http://localhost:3000) to access the system.
