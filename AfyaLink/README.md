![AfyaLink Banner](assets/banner.png)

# 💠 AfyaLink — Smart Health System  
**Powered by [GoldEdge Labs](https://www.goldedgelabs.africa)**  

[![GitHub Stars](https://img.shields.io/github/stars/GoldEdgeLabs/AfyaLink?style=flat&color=gold)](https://github.com/GoldEdgeLabs/AfyaLink/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/GoldEdgeLabs/AfyaLink?style=flat&color=blue)](https://github.com/GoldEdgeLabs/AfyaLink/network/members)
![License](https://img.shields.io/badge/license-All%20Rights%20Reserved-red)
![Build](https://img.shields.io/github/actions/workflow/status/GoldEdgeLabs/AfyaLink/ci.yml?label=build&style=flat-square)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

---

AfyaLink is a next-generation **AI-powered hospital and clinic management system** designed to digitize Africa’s healthcare infrastructure.  
It offers secure, fast, and intelligent healthcare record management with offline capability, multilingual support, and real-time analytics.

---

## 🌍 Vision
To unify and modernize healthcare across Africa by using smart, secure, and connected technology that empowers hospitals, doctors, and patients alike.

---

## 🚀 Core Features
✅ Role-based Dashboards (Admin, Doctor, Nurse, Patient)  
✅ AI Health Assistant (NeuroEdge AI)  
✅ Offline-Ready PWA (Progressive Web App)  
✅ Smart Billing, Lab & Pharmacy Management  
✅ Multi-language (English, Swahili, French)  
✅ JWT + 2FA Security  
✅ Hybrid Cloud Database (PostgreSQL + Prisma)  
✅ Analytics & Reporting Dashboard  

---

## 🧠 System Architecture

AfyaLink follows a **modular hybrid architecture** built for performance, scalability, and offline operation.

```plaintext
┌───────────────────────────────┐
│ Frontend (Next.js)            │
│ - PWA + Multi-language UI      │
│ - Dashboard + AI Assistant     │
└──────────────┬────────────────┘
               │ REST API
               ▼
┌───────────────────────────────┐
│ Backend (Node.js)             │
│ - Express + Prisma ORM         │
│ - Auth + Billing + Reports     │
└──────────────┬────────────────┘
               │
               ▼
┌───────────────────────────────┐
│ Database (PostgreSQL)         │
│ - Hybrid Local + Cloud Sync    │
└───────────────────────────────┘
```

---

## ⚙️ Tech Stack
| Layer | Technology |
|--------|-------------|
| **Frontend** | Next.js + Tailwind + TypeScript |
| **Backend** | Node.js + Express + Prisma |
| **Database** | PostgreSQL |
| **AI Engine** | NeuroEdge AI |
| **Security** | JWT + 2FA + Encryption |
| **Deployment** | Docker + Vercel + Render |

---

## 🧩 Quick Installation

### 1️⃣ Clone Repository
```bash
git clone https://github.com/GoldEdgeLabs/AfyaLink.git
cd AfyaLink
```

### 2️⃣ Install Frontend
```bash
cd frontend
npm install
npm run dev
```

### 3️⃣ Install Backend
```bash
cd ../backend
npm install
npx prisma migrate dev --name init
npm run dev
```

### 4️⃣ Start Database
```bash
docker-compose up -d
```

### 5️⃣ Access App
👉 Open [http://localhost:3000](http://localhost:3000)

---

## 🔐 Default Admin Login (Demo)
| Field | Value |
|--------|--------|
| Email | josephogwe8@gmail.com |
| Password | Josboy@254 |

---

## 📦 Deployment

AfyaLink supports both local and cloud deployment.  

| Layer | Platforms |
|--------|------------|
| **Frontend** | Vercel / Netlify |
| **Backend** | Render / Railway / Fly.io |
| **Database** | Supabase / Neon.tech / AWS RDS |

📘 See [`Docs/DEPLOYMENT.md`](./Docs/DEPLOYMENT.md) for detailed instructions.

---

## 🧠 AI Assistant (NeuroEdge)

The AI engine helps with:
- Patient triage and quick diagnostics  
- Doctor queries and smart recommendations  
- Contextual chat and record summaries  

---

## 🔐 Security & Privacy

AfyaLink complies with **GDPR**, **HIPAA**, and **Kenya Data Protection Act**.

- JWT + 2FA authentication  
- Encrypted patient data  
- Secure offline mode with auto-sync  

📘 See [`Docs/SECURITY_AND_PRIVACY.md`](./Docs/SECURITY_AND_PRIVACY.md) for details.

---

## 🧭 Roadmap
- [x] Frontend UI (Next.js + Tailwind)  
- [x] Backend API (Node.js + Express)  
- [x] PostgreSQL Database  
- [x] Offline PWA + AI Chat  
- [ ] Mobile Wrapper (Android TWA)  
- [ ] NGO & Donor Portal Integration  
- [ ] Blockchain Anchored Medical Audit Trail  

---

## 🏢 About GoldEdge Labs

**GoldEdge Labs** is a future-oriented software company creating smart digital ecosystems to transform real-world sectors across Africa.  

Other flagship projects include:
- 🌍 **World Digital Coin (WDC)** – Africa’s global digital currency  
- 🏥 **AfyaLink** – Intelligent health network system  
- 🧬 **IDVerse** – Universal digital identity system  
- 🌾 **AgriNova** – Smart agriculture management  
- 🏠 **RentaLink** – Real estate and rental ecosystem  

Visit 👉 [www.goldedgelabs.africa](https://www.goldedgelabs.africa)

---

## 📩 Contact
📧 **support@goldedgelabs.com**  
🌐 [GoldEdge Labs](https://www.goldedgelabs.africa)  
🏢 Nairobi, Kenya  

---

### 🛡️ License
**© 2025 GoldEdge Labs — All Rights Reserved**

---

> Made with ❤️ by **GoldEdge Labs**
