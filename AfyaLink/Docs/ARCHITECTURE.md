# 🧱 AfyaLink Architecture Overview

## 🔄 Hybrid Model
AfyaLink operates using a **hybrid architecture** that supports both local and cloud deployment.  
This ensures hospitals in remote areas can function offline while still syncing data securely when online.

---

### Core Components
1. **Frontend:** Next.js hybrid SSR/CSR for speed and SEO.  
2. **Backend:** Node.js + Express REST API with modular design.  
3. **Database:** PostgreSQL + Prisma ORM, hybrid scalable schema.  
4. **AI Layer:** NeuroEdge AI for decision support and chat.  
5. **Security Layer:** JWT + 2FA + Encryption.  
6. **Deployment:** Docker, CI/CD-ready.

---

### System Flow
```
User → Frontend (Next.js)
     → Backend (Express API)
     → Database (PostgreSQL)
     → AI Layer (NeuroEdge AI)
     ↔ Cloud Sync
```

---

### Scalability
- Shardable PostgreSQL database  
- Redis for caching and fast lookups  
- Modular microservice expansion
