# Presencia Digital — Software Agency Landing + Contact Leads

> Production-ready landing page for **PD Solutions (Presencia Digital)** built with **Next.js 14**, **MySQL**, and **Drizzle ORM**.  
> Includes a modern, flat premium UI and a database-backed **Contact Form** for lead capture.

![Presencia Digital](./public/pd_logo_white.png)

---

## 🎯 Overview

**Presencia Digital** is a software development agency website designed to convert visitors into leads.  
This repository contains the landing page application that:

- Showcases services, value props, case studies, testimonials, and more
- Captures contact requests (name, email, company, budget, message, etc.)
- Stores leads in a **MySQL** database via **Drizzle ORM**
- Includes a bilingual-ready architecture (EN/ES) with a language toggle
- Uses a clean, premium, flat UI with Tailwind CSS

---

## ✨ Features

### Landing Page
- ✅ **Next.js 14 App Router**
- ✅ **Modern Agency Layout** (Header / Body / Footer)
- ✅ **Services + Why Choose Us + Case Studies + Testimonials**
- ✅ **Responsive Design** (Mobile-first)

### Lead Capture (Contact Form)
- ✅ **Contact Form (DB-backed)**
- ✅ **Zod Validation**
- ✅ **Spam Protection Ready** (honeypot / rate limit hooks if needed)
- ✅ **Structured database schema** for leads

### UI & DX
- ✅ Tailwind CSS
- ✅ TypeScript
- ✅ Component-based sections for easy scaling
- ✅ Clean structure for future marketing pages

---

## 🛠️ Tech Stack

| Layer | Technology |
|------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Database | MySQL |
| ORM | Drizzle ORM |
| Validation | Zod |
| Styling | Tailwind CSS |
| Images | next/image |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- MySQL 8+ (Local, PlanetScale, DigitalOcean, etc.)
- pnpm / npm / yarn

### Installation

1) **Clone**
```bash
git clone <repository-url>
cd presencia-digital
