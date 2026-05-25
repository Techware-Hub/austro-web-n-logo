# Austro Web & Logo

Next.js website rebuild for Austro Web & Logo, focused on the Australian SME, startup and tradie market.

## Stack

- Next.js App Router
- React
- TypeScript
- Embla Carousel
- Simple Icons
- Custom CSS theme and motion system

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run build
npm start
```

## Skills To Add

These local Codex skills were used during development and are recommended when continuing this project:

- `impeccable`: frontend design, theme direction, layout critique, polish and UX refinement.
- `playwright`: browser screenshots, visual QA, console checks and route verification.
- `imagegen` optional: custom bitmap assets, textures, hero visuals and campaign imagery.

The `.agents/` folder is intentionally ignored, so install or add those skills locally instead of committing them to the repository.

## Discount Popup Email Setup

The discount popup posts to `app/api/discount-lead/route.ts`, which uses Nodemailer over SMTP to deliver leads to `info@austrowebnlogo.com`. The route reads SMTP credentials from these environment variables:

| Variable | Purpose | Example |
| --- | --- | --- |
| `SMTP_HOST` | SMTP server hostname | `smtp.hostinger.com` |
| `SMTP_PORT` | SMTP server port | `465` |
| `SMTP_SECURE` | `true` for implicit TLS (port 465), `false` for STARTTLS (587) | `true` |
| `SMTP_USER` | SMTP username (mailbox address) | `info@austrowebnlogo.com` |
| `SMTP_PASS` | SMTP password / app password | `your-smtp-password` |
| `SMTP_FROM` | Optional From header. Defaults to `Austro Web & Logo Leads <SMTP_USER>` | `info@austrowebnlogo.com` |
| `LEAD_RECEIVER_EMAIL` | Inbox that receives submissions | `info@austrowebnlogo.com` |

### Local development

Copy `.env.example` to `.env.local` and fill in the values. `.env.local` is gitignored — never commit real credentials. Restart `npm run dev` after editing.

### Production hosting

**`.env.example` is only a sample and is NOT loaded at runtime.** For the production site, add the same variables in your hosting provider's environment-variables panel, then redeploy / restart the app.

For the Hostinger business mailbox the working values are:

```env
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@austrowebnlogo.com
SMTP_PASS=<your-smtp-password>
SMTP_FROM=info@austrowebnlogo.com
LEAD_RECEIVER_EMAIL=info@austrowebnlogo.com
```

Where to set them:

- **Hostinger (Node.js app):** hPanel → Websites → Manage → Advanced → Node.js → Environment Variables. Save, then **Restart** the Node.js app.
- **Vercel:** Project Settings → Environment Variables → set each for the *Production* (and *Preview*) scopes → trigger a redeploy (Deployments → Redeploy).
- **Netlify / cPanel / Plesk / Coolify:** equivalent "Environment Variables" panel, then redeploy / restart.

After adding the variables:

1. Save the environment variables in the hosting panel.
2. Restart or redeploy the app.
3. Submit the discount popup once and confirm the lead arrives at `info@austrowebnlogo.com`.
4. If it still fails, check the server logs for `[discount-lead]` entries — the route logs the missing variable name or the SMTP error returned by Nodemailer.

### Error UX

- In production, users see a friendly message: *"Email service is not configured yet. Please contact us directly at info@austrowebnlogo.com."* and SMTP failures show *"We couldn't send your request right now. Please try again or contact us directly at info@austrowebnlogo.com."*
- In development the popup additionally surfaces the underlying technical detail (missing variable name or SMTP error) so misconfigurations are obvious during local testing.
- Server-side `console.error` logs always include the full detail so production server logs remain useful for debugging.

## Notes

- Keep `austro-website-copy.md` as the content source of truth until copy is moved into a CMS or structured content layer.
- `{{PHONE}}` and `{{EMAIL}}` are placeholders and must be replaced before launch.
- Generated browser captures, scripts and local agent files are ignored by Git.
