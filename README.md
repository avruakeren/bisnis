# Gina

Website toko materi pembelajaran untuk guru SD: sistem pembelajaran, media ajar, RPP, worksheet, dan web absensi.

Dibangun dengan Next.js (App Router), TypeScript, dan Tailwind CSS.

## Pengembangan lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## Perintah

| Perintah           | Fungsi                                   |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Menjalankan server pengembangan          |
| `npm run test`     | Menjalankan test (Vitest)                |
| `npm run lint`     | Menjalankan ESLint                       |
| `npm run build`    | Build static export ke folder `out/`     |

## Deploy ke GitHub Pages

Situs ini menggunakan static export dan di-deploy otomatis ke GitHub Pages melalui GitHub Actions (`.github/workflows/deploy.yml`).

1. Push perubahan ke branch `main`.
2. Di repo GitHub: **Settings → Pages → Source → GitHub Actions**.
3. Workflow otomatis menjalankan lint, test, build, lalu deploy.

Situs live di `https://<username>.github.io/bisnis/`.
