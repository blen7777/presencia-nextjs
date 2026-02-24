# Presencia Digital - Quick Start Guide

## Prerequisites

- Node.js 18+
- pnpm (install with `npm install -g pnpm`)
- MySQL database
- Resend account (for email functionality)

### Why pnpm?

This project is deployed on **Vercel**, which uses `pnpm` as the package manager. Vercel runs `pnpm install` with `--frozen-lockfile` during builds, meaning the `pnpm-lock.yaml` must be in sync with `package.json`. Using pnpm locally ensures the lockfile stays up to date, preventing build failures when merging code from `develop` to `master`.

## Getting Started

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Configure Environment

Create a `.env` file in the project root:

```env
DATABASE_URL=mysql://user:password@host:3306/database
RESEND_API_KEY=re_your_key_here
CONTACT_FROM_EMAIL=hello@yourdomain.com
CONTACT_TO_EMAIL=info@presenciadigital.io
```

### 3. Setup Database

```bash
pnpm db:push
```

### 4. Run Development Server

```bash
pnpm dev
```

Open http://localhost:3000

## Common Commands

| Command             | Description                              |
|---------------------|------------------------------------------|
| `pnpm dev`          | Start development server                 |
| `pnpm build`        | Build for production                     |
| `pnpm lint`         | Run ESLint                               |
| `pnpm db:generate`  | Generate Drizzle migrations              |
| `pnpm db:migrate`   | Run database migrations                  |
| `pnpm db:push`      | Push schema directly (dev)               |
| `pnpm db:studio`    | Open Drizzle Studio (localhost:4983)      |

## Adding Dependencies

```bash
pnpm add <package-name>
```

This automatically updates both `package.json` and `pnpm-lock.yaml`, keeping Vercel builds in sync.

## Deployment Workflow

1. Work on the `develop` branch
2. Push changes to `develop`
3. Create a PR from `develop` to `master`
4. Merge the PR — Vercel automatically builds and deploys from `master`

## Troubleshooting

### Build fails on Vercel with lockfile error

If you see `ERR_PNPM_OUTDATED_LOCKFILE`, the lockfile is out of sync. Run locally:

```bash
pnpm install
```

Commit the updated `pnpm-lock.yaml` and push again.

### "pnpm: command not found"

Install pnpm globally:

```bash
npm install -g pnpm
```
