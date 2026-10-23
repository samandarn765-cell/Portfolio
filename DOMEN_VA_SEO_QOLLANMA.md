# 🚀 Samandar Nosirov Portfoliosi: Domen, SEO va GEO Qo'llanmasi

Ushbu hujjatda loyihaga kiritilgan barcha o'zgarishlar, `samandar-nosirov.uz` domenini Vercel-ga ulash, Google Search Console hamda GEO sozlamalari bo'yicha to'liq yo'riqnoma jamlangan.

---

## 📌 1. Bajarilgan ishlar qisqacha xulosasi

1. **Portfolio yo'nalishi yangilandi**:
   - Meta-teglar, Hero, About va Experience qismlari **Fullstack & AI Developer** darajasiga ko'tarildi (3 tilda: O'zbekcha, Inglizcha, Ruscha).
2. **Yangi ko'nikmalar va ikonkalar qo'shildi**:
   - 12 ta texnologiya (React, Next.js, Node.js, AI & LLMs, Server & API, JavaScript, Tailwind CSS, Git & GitHub, HTML5, CSS3, Figma, Responsive Design) to'liq SVG ikonkalari bilan integratsiya qilindi.
3. **Vercel Production Deploy**:
   - Loyiha Vercel production serveriga chiqarildi.
   - **Production URL**: [https://portfolio-peach-five-l4ynhzankf.vercel.app](https://portfolio-peach-five-l4ynhzankf.vercel.app)
   - Loyihaga `samandar-nosirov.uz` va `www.samandar-nosirov.uz` domenlari bog'landi.
4. **Kodlar GitHub-ga saqlandi**:
   - Barcha o'zgarishlar `main` tarmog'iga push qilindi: `https://github.com/samandarn765-cell/Portfolio.git`

---

## 🌐 2. `samandar-nosirov.uz` Domenini Ulash (DNS Sozlamalari)

Domen sotib olingan vaqtda **"Tekshirilmoqda"** statusida bo'ladi (pasport tekshiruvi sababli 15 daqiqadan 1-2 soatgacha vaqt oladi). U **"Faol"** (Активен) bo'lishi bilan quyidagi DNS yozuvlarini domen sotib olgan joyingizdagi **DNS boshqaruvi (DNS Records)** bo'limiga kiritasiz:

| Yozuv turi (Type) | Nomi (Host / Name) | Qiymati (Value / Target IP) | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` *(yoki samandar-nosirov.uz)* | `76.76.21.21` | 3600 (yoki avto) |
| **CNAME** (yoki A) | `www` | `cname.vercel-dns.com` *(yoki `76.76.21.21`)* | 3600 |

> ⏳ **Eslatma:** DNS yozuvlari saqlangach, 10–30 daqiqada butun dunyo bo'ylab yangilanadi va Vercel avtomatik ravishda bepul **SSL (HTTPS)** sertifikatini faollashtiradi.

---

## 🔍 3. Google Search Console Tasdiqlash

Sayt kodiga Google tasdiqlash kodi ikkita usulda joylab qo'yilgan:
- **Meta-teg:** `<meta name="google-site-verification" content="I5YL37GqEZZzTx2gIOQGHUBao6gBBJPF7BLFzPx9IUQ" />`
- **HTML fayl:** `/google542e2d220e9d6ba5.html`

### Domen ochilgach qilinadigan ish:
1. [Google Search Console](https://search.google.com/search-console) ga kiring.
2. `https://samandar-nosirov.uz` resursi oynasida ko'k **"ПОДТВЕРДИТЬ"** tugmasini bosing.
3. Tasdiqlangach, chap menyudan **"Файлы Sitemap"** (Sitemaps) bo'limiga kiring:
   - Qatorga `sitemap.xml` deb yozing.
   - **"Отправить"** tugmasini bosing.

---

## 📍 4. SEO va GEO Strukturasi (Saytda amalga oshirilgan)

Sayt kodi ichida qidiruv tizimlari uchun quyidagi xalqaro standartlar o'rnatilgan:

### A) GEO-Targeting (Lokal O'zbekiston qidiruvi):
```html
<meta name="geo.region" content="UZ" />
<meta name="geo.placename" content="Tashkent, Uzbekistan" />
<meta name="geo.position" content="41.2995;69.2401" />
<meta name="ICBM" content="41.2995, 69.2401" />
```
Bu Google va boshqa tizimlarga siz O'zbekiston/Toshkentdagi dasturchi ekanligingizni bildiradi.

### B) Structured Data (Schema.org JSON-LD):
Google botlari sayt egasi haqidagi ma'lumotlarni (`Person` va `WebSite` sxemasi):
- Ism: Samandar Nosirov
- Kasb: Fullstack & AI Developer
- Hudud: Toshkent, O'zbekiston
- Ijtimoiy tarmoqlar: GitHub, Telegram, LinkedIn, Instagram
tariqasida darhol o'qiydi (Google Knowledge Panel uchun).

### C) OpenGraph va Social Cards:
Telegram, WhatsApp, Instagram yoki Twitter-ga havola tashlanganda sarlavha, tavsif va banner rasm avtomatik tarzda chiroyli preview bo'lib chiqadi.

### D) Dinamik Sitemap va Robots:
- **Sitemap:** `https://samandar-nosirov.uz/sitemap.xml`
- **Robots:** `https://samandar-nosirov.uz/robots.txt`

---

## 🗓️ 5. Ertaga Rejalashtirilgan GEO Ishlari

Domen to'liq ishga tushib, Google-da tasdiqlangach, quyidagilar amalga oshiriladi:

1. **Yandex Webmaster (Региональность):**
   - Yandex Webmaster tizimiga saytni qo'shib, hududini **O'zbekiston / Toshkent** qilib biriktiramiz (Yandex qidiruvida O'zbekistonlik foydalanuvchilar uchun yuqorida chiqish uchun).
2. **Google Business Profile (Xarita - ixtiyoriy):**
   - Google Xaritalarda "Samandar Nosirov — Web Dasturchi" nuqtasi ochish bo'yicha maslahatlar.

---

## 🔗 Foydali Havolalar

- **Vercel Boshqaruv Paneli:** [https://vercel.com/samandar-s-projects6/portfolio](https://vercel.com/samandar-s-projects6/portfolio)
- **Google Search Console:** [https://search.google.com/search-console](https://search.google.com/search-console)
- **GitHub Repozitoriya:** [https://github.com/samandarn765-cell/Portfolio](https://github.com/samandarn765-cell/Portfolio)
