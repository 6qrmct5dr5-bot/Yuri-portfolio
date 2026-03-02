# 🚀 Vercel Deployment Upute za yuri100.com

## Korak 1: Kreiraj GitHub Repository

1. Idi na [github.com](https://github.com) i prijavi se
2. Klikni **"New repository"** (zeleni gumb)
3. Ime repozitorija: `yuri-portfolio` (ili što god želiš)
4. Odaberi **Public** ili **Private**
5. NE dodavaj README, .gitignore ili licencu (već postoje)
6. Klikni **"Create repository"**

## Korak 2: Push Kod na GitHub

GitHub će ti dati naredbe, ali evo točnih naredbi za tvoj slučaj:

```bash
cd /app
git remote add origin https://github.com/TVOJE_KORISNICKO_IME/yuri-portfolio.git
git branch -M main
git push -u origin main
```

**Zamijeni `TVOJE_KORISNICKO_IME` sa svojim GitHub korisničkim imenom!**

## Korak 3: Deploy na Vercel

### A) Kreiranje Vercel Računa:
1. Idi na [vercel.com](https://vercel.com)
2. Klikni **"Sign Up"**
3. Odaberi **"Continue with GitHub"**
4. Autoriziraj Vercel pristup tvom GitHub računu

### B) Import Projekta:
1. Na Vercel dashboardu klikni **"Add New..."** → **"Project"**
2. Pronađi **`yuri-portfolio`** repository i klikni **"Import"**
3. Vercel će automatski detektirati React projekt
4. **Framework Preset**: Vercel bi trebao automatski odabrati "Create React App"
5. **Root Directory**: Ostavi prazno (ili odaberi `/`)
6. **Build Command**: `yarn vercel-build` (trebalo bi biti već konfigurirano)
7. **Output Directory**: `frontend/build`

### C) Dodaj Environment Varijable (VAŽNO!):
U "Environment Variables" sekciji dodaj:

**Za sada možeš ostaviti prazno**, ili dodaj:
```
REACT_APP_BACKEND_URL=https://yuri100.com
```

8. Klikni **"Deploy"** 🚀

## Korak 4: Poveži Domenu yuri100.com

### A) U Vercel-u:
1. Kada deployment završi, idi u **Settings** → **Domains**
2. Dodaj:
   - `yuri100.com`
   - `www.yuri100.com`
3. Vercel će ti dati DNS postavke

### B) U Domain Registraru (gdje si kupio yuri100.com):

**Ako si kupio na Namecheap:**
1. Idi na Namecheap Dashboard
2. Domain List → Manage → Advanced DNS
3. Dodaj/izmijeni:
   - **A Record**: `@` → Vercel IP (dat će ti Vercel)
   - **CNAME Record**: `www` → `cname.vercel-dns.com`

**Ako si kupio na GoDaddy/drugdje:**
- Sličan proces, koristi DNS postavke koje ti Vercel prikaže

### C) Čekaj 24-48h:
DNS propagacija može potrajati, ali obično je gotovo za 1-2 sata.

## Korak 5: Verifikacija

1. Idi na [yuri100.com](https://yuri100.com)
2. Trebala bi se učitati Yuri portfolio stranica!

## 🔧 Buduće Izmjene

Kada želiš napraviti izmjene:

```bash
# Napravi izmjene u kodu
git add .
git commit -m "Opis izmjene"
git push
```

Vercel će **automatski** deployati nove izmjene!

## ⚠️ Troubleshooting

### Ako stranica ne radi:
1. Provjeri Vercel deployment logs
2. Provjeri DNS postavke (može potrajati)
3. Provjeri build logs u Vercel

### Ako slike ne rade:
- Provjeri da je `artwork-1-100.jpg` u `/app/frontend/public/` folderu

### Kontakt:
Za pomoć s deploymentom, kontaktiraj podršku ili me pitaj!

---

**Sretno! 🎨✨**
