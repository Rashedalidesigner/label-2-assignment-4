# 🏠 Rental Property Management System API

A secure and scalable RESTful API for a Rental Property Management System built with **Node.js**, **Express.js**, **TypeScript**, **Prisma ORM**, **PostgreSQL**, and **Stripe**.

The system supports three user roles:

- 👑 Admin
- 🏡 Landlord
- 🏠 Tenant

---

# 🚀 Features

- JWT Authentication
- Role-based Authorization
- User Registration & Login
- Property Management
- Rental Request Management
- Property Categories
- Property Reviews
- Stripe Payment Integration
- Refresh Token Authentication
- Prisma ORM
- PostgreSQL Database

---

# 🛠 Tech Stack

## Backend

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL

## Authentication

- JWT
- Bcrypt
- Cookie Parser

## Payment

- Stripe

## Others

- dotenv
- cors
- http-status

---

# 📁 Folder Structure

```
src
│
├── controllers
├── middleware
├── routes
├── services
├── prisma
├── config
├── utils
├── interfaces
├── app.ts
└── server.ts
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/rental-property-management-api.git
```

```bash
cd rental-property-management-api
```

---

## Install Packages

```bash
npm install
```

---

## Create Environment Variables

```env
PORT=8000

DATABASE_URL=

ACCESS_TOKEN_SECRET=

REFRESH_TOKEN_SECRET=

ACCESS_TOKEN_EXPIRE=1d

REFRESH_TOKEN_EXPIRE=7d

STRIPE_SECRET_KEY=

CLIENT_URL=http://localhost:5173
```

---

## Generate Prisma Client

```bash
npx prisma generate
```

---

## Run Migration

```bash
npx prisma migrate dev
```

---

## Start Development Server

```bash
npm run dev
```

---

# 📜 Scripts

| Command | Description |
|----------|-------------|
| npm run dev | Development Server |
| npm run build | Build Project |
| npm start | Production Server |

---

# 🔐 Authentication

## Register

| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/user/register` | Public |

---

## Login

| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/auth/login` | Public |

---

## Refresh Token

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/auth/refresh-token` | Authenticated |

---

# 👤 User API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/user` | Admin |

---

# 🏡 Property API

## Create Property

| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/landlord/properties` | Admin, Landlord |

---

## Update Property

| Method | Endpoint | Access |
|--------|----------|--------|
| PUT | `/api/landlord/properties/:id` | Admin, Landlord |

---

## Delete Property

| Method | Endpoint | Access |
|--------|----------|--------|
| DELETE | `/api/landlord/properties/:id` | Admin, Landlord |

---

## Get All Properties

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/properties` | Public |

---

## Property Details

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/properties/:id` | Public |

---

# 📂 Category API

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/categories` | Admin |
| POST | `/api/categories` | Admin |
| PUT | `/api/categories/:id` | Admin |
| DELETE | `/api/categories/:id` | Admin |

---

# 📨 Rental Request API

## Submit Rental Request

| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/rentals` | Tenant |

---

## Get Tenant Rental Requests

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/rentals` | Tenant |

---

## Rental Request Details

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/rentals/:id` | Tenant |

---

## Landlord Rental Requests

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/landlord/requests` | Landlord |

---

## Update Rental Request

| Method | Endpoint | Access |
|--------|----------|--------|
| PUT | `/api/landlord/requests/:id` | Landlord |

---

# ⭐ Review API

| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/reviews` | Tenant |

---

# 💳 Payment API

## Create Payment Intent

| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/payments/create` | Tenant |

---

## Confirm Payment

| Method | Endpoint | Access |
|--------|----------|--------|
| POST | `/api/payments/confirm` | Tenant, Landlord |

---

## Get User Payments

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/payments` | Tenant |

---

## Payment Details

| Method | Endpoint | Access |
|--------|----------|--------|
| GET | `/api/payments/:id` | Admin, Landlord, Tenant |

---

# 👥 User Roles

| Role | Permissions |
|------|-------------|
| Admin | Full system access |
| Landlord | Manage own properties, rental requests, confirm payments |
| Tenant | Browse properties, submit rental requests, make payments, write reviews |

---

# 🔑 Security

- JWT Authentication
- Refresh Token
- HTTP Only Cookies
- Password Hashing with Bcrypt
- Role-Based Authorization
- Environment Variables

---

# 🗄 Database

Database: PostgreSQL

ORM: Prisma

Useful Commands

```bash
npx prisma generate
```

```bash
npx prisma migrate dev
```

```bash
npx prisma studio
```

---

# 🚀 Deployment

Build

```bash
npm run build
```

Production

```bash
npm start
```

---

# 📦 Main Dependencies

- Express
- TypeScript
- Prisma
- PostgreSQL
- JWT
- Bcrypt
- Stripe
- Cookie Parser
- dotenv
- CORS

---

# 📈 Future Improvements

- Google Authentication
- Email Verification
- Password Reset
- Image Upload (Cloudinary)
- Wishlist
- Property Search & Filtering
- Notifications
- Dashboard Analytics
- Chat Between Tenant & Landlord

---

# 👨‍💻 Author

**Md. Rashed Ali**

GitHub: https://github.com/Rashedalidesigner

Email: rashedalidesigner@gmail.com

---

# 📄 License

This project is licensed under the MIT License.
