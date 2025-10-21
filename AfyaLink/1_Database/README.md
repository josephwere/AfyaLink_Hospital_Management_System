# 🧱 AfyaLink Database Setup Guide

## 🚀 Local Setup

1. **Start PostgreSQL**
   ```bash
   docker-compose up -d
   ```

2. **Apply migrations**
   ```bash
   npx prisma migrate dev --name init
   ```

3. **Seed admin data**
   ```bash
   npx ts-node prisma/seed.ts
   ```

4. **View data in browser**
   ```bash
   npx prisma studio
   ```

---

### 🔑 Admin credentials
Fill in your `.env` values before seeding:

- Email: `josephogwe8@gmail.com`
- Password: `<your-admin-password>`

---

## ☁️ Cloud Deployment (Hybrid Ready)

Use **Neon.tech**, **Supabase**, or **Render PostgreSQL**.

Replace `.env` → `DATABASE_URL` and run:

```bash
npx prisma migrate deploy
```

---

## 🧠 Advanced AI Tables

Includes:
- `AIInsight` for predictive healthcare insights.
- `EmailLog` for message tracking.
- Scalable `User`, `Appointment`, `Billing`, and `Report` models.

---

✅ **Result after setup:**
You’ll have a **fully structured hybrid database** that:
- Runs locally and in the cloud
- Syncs seamlessly with backend logic
- Includes AI + analytics-ready tables
- Already seeded with your admin account
