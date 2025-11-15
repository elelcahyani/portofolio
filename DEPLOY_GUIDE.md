# 🚀 Panduan Deploy ke Vercel

## Opsi 1: Deploy via Vercel Dashboard (Recommended)

1. **Login ke Vercel**
   - Kunjungi: https://vercel.com
   - Login dengan akun GitHub

2. **Import Project**
   - Klik "Add New..." → "Project"
   - Pilih repository: `elelcahyani/personal-portofolio`
   - Klik "Import"

3. **Configure Project**
   - Framework Preset: **Vite** ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅
   - Root Directory: `./` ✅

4. **Deploy**
   - Klik "Deploy"
   - Tunggu 2-3 menit
   - Website live! 🎉

## Opsi 2: Deploy via Vercel CLI

### Install Vercel CLI
```bash
npm install -g vercel
```

### Login ke Vercel
```bash
vercel login
```

### Deploy
```bash
# Deploy ke production
vercel --prod

# Atau deploy preview
vercel
```

## Auto Deploy (Recommended)

Setelah setup awal, setiap kali Anda push ke GitHub:
- Push ke branch `main` → Auto deploy ke production
- Push ke branch lain → Auto deploy preview

## Environment Variables (Jika Diperlukan)

Jika ada API keys atau secrets:
1. Buka Vercel Dashboard
2. Pilih project Anda
3. Settings → Environment Variables
4. Tambahkan variable yang diperlukan

## Custom Domain (Opsional)

1. Buka project di Vercel Dashboard
2. Settings → Domains
3. Tambahkan domain custom Anda
4. Update DNS sesuai instruksi

## Troubleshooting

### Build Error
- Pastikan `npm run build` berhasil di local
- Cek error log di Vercel Dashboard

### 404 Error
- File `vercel.json` sudah ada ✅
- Routing sudah dikonfigurasi ✅

### Gambar Tidak Muncul
- Pastikan path gambar benar: `/uploads/...`
- Folder `public` akan otomatis di-serve

## Tips

- Vercel akan auto-deploy setiap push ke GitHub
- Preview URL tersedia untuk setiap branch
- Production URL: `https://your-project.vercel.app`
