# 🧩 AfyaLink API Reference

Base URL: `/api/v1`

---

## Auth
### POST `/api/v1/auth/register`
Registers a new user.

### POST `/api/v1/auth/login`
Authenticates with JWT and returns tokens.

### POST `/api/v1/auth/verify-otp`
Verifies 2FA OTP.

---

## Patients
### GET `/api/v1/patients`
List all patients (Admin/Doctor only).

### POST `/api/v1/patients`
Add a new patient.

---

## Billing
### GET `/api/v1/billing`
Fetch billing records.

### POST `/api/v1/billing`
Create a new billing entry.

---

## Reports
### GET `/api/v1/reports`
Retrieve system reports and analytics.

---

## AI Assistant
### POST `/api/v1/ai/query`
Send a query to NeuroEdge AI and get a contextual response.
