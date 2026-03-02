# Yuri - Ekskluzivna Umjetnička Kolekcija 🎨

Portfolio website za umjetnika Yurija koji predstavlja ekskluzivnu seriju od 100 djela.

## 🌐 Live Site
**[yuri100.com](https://yuri100.com)**

## ✨ Značajke

- **Ekskluzivna Kolekcija**: Prikazuje djelo 1/100 iz legendarne serije
- **Alkemijska Filozofija**: Prima Materia i renesansne tehnike
- **Responsive Design**: Savršeno izgleda na svim uređajima
- **Dark Luxurious Aesthetic**: Crna pozadina sa zlatnim akcentima
- **Hrvatski Jezik**: Profesionalni sadržaj na hrvatskom

## 🛠️ Tech Stack

- **Frontend**: React 19, Tailwind CSS, Shadcn/ui
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Styling**: Custom CSS sa Playfair Display i Cormorant Garamond fontovima

## 🚀 Vercel Deployment

### Brzi Start:

1. **Push na GitHub:**
```bash
git add .
git commit -m "Initial commit - Yuri Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/yuri-portfolio.git
git push -u origin main
```

2. **Deploy na Vercel:**
- Idi na [vercel.com](https://vercel.com)
- Klikni "New Project"
- Import svoj GitHub repository
- Vercel će automatski detektirati React app
- Dodaj environment varijable (vidi ispod)
- Deploy!

3. **Poveži Domenu:**
- U Vercel projektu idi na Settings > Domains
- Dodaj: `yuri100.com` i `www.yuri100.com`
- Slijedi Vercel instrukcije za DNS postavke

### 📋 Environment Varijable

#### Frontend (.env u frontend folderu):
```
REACT_APP_BACKEND_URL=https://tvoja-backend-url.vercel.app
```

#### Backend (.env u backend folderu):
```
MONGO_URL=mongodb+srv://your-mongo-connection-string
DB_NAME=yuri_portfolio
```

### 🔧 Vercel Configuration

Projekt već ima `vercel.json` koji konfigurira:
- Frontend build na `/frontend`
- Backend API na `/api`
- Rewrites za routing

## 📁 Struktura Projekta

```
/app
├── frontend/          # React aplikacija
│   ├── public/       # Static assets (artwork-1-100.jpg)
│   ├── src/
│   │   ├── components/  # React komponente
│   │   ├── pages/       # Stranice
│   │   ├── mock.js      # Mock podaci
│   │   └── App.js
│   └── package.json
│
├── backend/           # FastAPI server
│   ├── server.py     # API endpoints
│   └── requirements.txt
│
└── README.md
```

## 🎨 Design Features

- **Monokromatska Paleta**: Crna (#000000) pozadina
- **Zlatni Akcenti**: #d4af37 za naglašavanje
- **Serif Fontovi**: Playfair Display i Cormorant Garamond
- **Animacije**: Smooth scroll i fade-in efekti
- **Shadcn Components**: Moderne UI komponente

## 👨‍🎨 O Umjetniku

Yuri predstavlja rijetkog stvaratelja čiji rad nadilazi konvencionalne okvire suvremene umjetnosti. Koristi zlato ručno obrađeno po starim renesansnim tehnikama, stvarajući kompozicije koje transcendiraju uobičajene granice medija.

## 📝 Sekcije

1. **Hero**: Uvod u Yurija i njegovu filozofiju
2. **Djela**: Prikaz djela 1/100 (samo detalj, pravo ime se otkriva članovima)
3. **Izložbe**: Politika pristupa djelima
4. **Kontakt**: Forma za zainteresirane kolekcionare

## 🔒 Ekskluzivnost

- Samo 100 djela će biti stvoreno
- Svako djelo dolazi s rukom pisanim pismom
- Rezervacija samo po rednom broju (ne možete birati)
- Gledanje djela jedan-na-jedan na različitim lokacijama

## 📞 Kontakt

Za pitanja o deployment-u ili tehničke izmjene, kontaktirajte developera.

## 📄 Licenca

© 2024 Yuri. Sva prava zadržana.

---

**Made with ❤️ using Emergent AI**
