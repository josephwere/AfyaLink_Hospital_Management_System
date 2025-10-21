# Backend API (Hybrid PostgreSQL + Email)

## Features
- Express + Prisma (PostgreSQL)
- JWT Authentication
- Email-based Password Reset (Nodemailer)
- Admin role management
- Secure middlewares (Helmet, Rate Limiting)
- Modular Architecture

## Setup
1. Install dependencies
```bash
npm install
```

2. Set environment variables in .env (already included here for testing — remove before public sharing)

3. Generate Prisma client and migrate
```bash
npx prisma generate
# then create migration if you have prisma/migrations configured:
# npx prisma migrate dev --name init
```

4. Run dev server
```bash
npm run dev
```

## Password reset flow
- POST `/api/auth/forgot-password` with `{ "email": "you@example.com" }`
- Email contains a reset link: `http://localhost:5000/api/auth/reset-password/<token>`
- POST `/api/auth/reset-password/:token` with `{ "password": "newpass" }`

## Admin routes
- GET `/api/users` (admin)
- PATCH `/api/users/:id/role` (admin)
- DELETE `/api/users/:id` (admin)

Remember to update .env values before deploying.
