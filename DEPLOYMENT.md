# Presencia Digital - Deployment Guide

## Deployment Overview

This project is deployed on **Vercel** and uses **pnpm** as the package manager. Code is versioned on GitHub with a `develop` -> `master` workflow.

## Workflow

1. Work on the `develop` branch
2. Push changes to `develop`
3. Create a PR from `develop` to `master`
4. Merge the PR — Vercel automatically builds and deploys from `master`

## Prerequisites

- GitHub repository connected to Vercel
- MySQL database
- Resend account for email notifications

## Environment Variables

Configure these in the Vercel dashboard under Settings > Environment Variables:

```
DATABASE_URL=mysql://user:password@host:3306/database
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
CONTACT_FROM_EMAIL=hello@yourdomain.com
CONTACT_TO_EMAIL=info@presenciadigital.io
```

## Database Setup

After configuring environment variables, run the schema push:

```bash
pnpm db:push
```

## Build Configuration

Vercel auto-detects Next.js and uses pnpm via the `pnpm-lock.yaml` in the repo. No special build configuration is needed.

If you add a new dependency locally, always use:

```bash
pnpm add <package-name>
```

This updates both `package.json` and `pnpm-lock.yaml`, preventing `ERR_PNPM_OUTDATED_LOCKFILE` errors on Vercel.

## Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] Language toggle works (ES / EN)
- [ ] Contact form submission succeeds
- [ ] Email notifications are sent (check Resend dashboard)
- [ ] Mobile responsive design looks correct
- [ ] SSL certificate is active

## Rollback

If a deployment fails:

1. Go to the Vercel dashboard > Deployments
2. Find the previous working deployment
3. Click "Promote to Production"

## Troubleshooting

### Build fails with lockfile error

```
ERR_PNPM_OUTDATED_LOCKFILE
```

Run locally and push the updated lockfile:

```bash
pnpm install
git add pnpm-lock.yaml
git commit -m "Update pnpm-lock.yaml"
git push origin develop
```

### Database connection fails

- Verify `DATABASE_URL` is correct in Vercel environment variables
- Ensure the database allows connections from Vercel's IP range
- Check that SSL settings match your database provider

### Emails not sending

- Verify `RESEND_API_KEY` is active in the Resend dashboard
- Ensure the sender domain in `CONTACT_FROM_EMAIL` is verified in Resend
- Check Resend logs for delivery errors

## Support

- Email: info@presenciadigital.io
- Phone: +503 7740-4092, +503 7647-1451
