
# FirmAnt Cameroon website

## Build a static site for cPanel

This project is configured for Next.js static export. It generates the English
and French pages as static HTML in `out/`; the site does not need a Node.js
process after export.

1. Install dependencies and create the export:

   ```bash
   npm ci
   npm run build
   ```

   If you do not have `package-lock.json`, use `npm install` instead.

2. In cPanel File Manager, open `public_html` and upload the **contents** of
   the generated `out` folder, including its `_next` folder and `.htaccess`
   file. Do not upload the project source or the `out` folder itself.

3. Enable HTTPS for the domain using cPanel AutoSSL, then test the home page
   and a nested page such as `/en/about/` and `/fr/services/`.

The `.htaccess` file redirects the domain root to `/en/` and configures the
security headers. It requires Apache `mod_rewrite`; the headers require
`mod_headers`. The project uses static pages, so server-side Next.js features
and Next.js image optimization are not available on this hosting setup. The
contact form uses WhatsApp and email links rather than submitting to a server.
