# Valyuta 

**Valyuta** — bu React va Bootstrap asosida qurilgan zamonaviy va foydalanuvchilar uchun qulay dastur bo'lib, foydalanuvchilarga kirim-chiqim hisobotlarini boshqarish, harajatlarni tahlil qilish va valyuta kurslarini kuzatib borish imkoniyatini taqdim etadi.

---

## Funktsiyalar

- **Kirim-chiqim jadvali**: Foydalanuvchilar kirim va chiqim ma'lumotlarini jadval shaklida ko'rishlari mumkin.
  - **Saralash imkoniyati**:
    - **Vaqt bo'yicha**
    - **Tur bo'yicha** (masalan, oziq-ovqat, transport, ko'ngilochar va boshqalar)
  
- **Harajatlarni tahlil qilish**:
  - Harajatlarni **jadval** va **pie chart** shaklida ko'rish imkoniyati.
  
- **Valyuta kurslari**:
  - Valyuta kurslarini real vaqtda kuzatish.
  - Valyutalar o'rtasida hisob-kitob qilish imkoniyati.

---

## Texnologiyalar

- **Frontend**: React.js
- **UI Kit**: Bootstrap 5
- **Ma'lumotlar vizualizatsiyasi**: Chart.js (yoki boshqa grafik kutubxona)

---

## Loyihani ishga tushirish bo'yicha qo'llanma

Quyida dasturiy ta'minotni yuklab olish, o'rnatish va ishga tushirish bo'yicha bosqichma-bosqich qo'llanma keltirilgan.

### 1. Talablar

Ishga tushirishdan oldin quyidagi dasturlar o'rnatilganligiga ishonch hosil qiling:

- **Node.js** (LTS versiyasi tavsiya etiladi)  
  [Node.js yuklab olish](https://nodejs.org)
- **npm** yoki **yarn** (Node.js bilan birga keladi)
- Internet aloqasi (valyuta kurslarini olish uchun)

---

### 2. Loyiha fayllarini yuklab olish

Loyihani klonlash uchun terminalda quyidagi buyruqni bajaring:

```bash
git clone https://geusernamexpenseithub.com//-tracker.git
```
So’ngra loyihaning asosiy papkasiga kiring:

```bash
cd expense-tracker
```
### 2. Kerakli barcha kutubxonalarni o’rnatish
Loyihaga kerakli kutubxonalarni o’rnatish uchun quyidagi buyruqni bajaring:
```bash
npm install
```
Agar yarn ishlatsangiz:
```bash
yarn install
```
### 4. Dasturiy ishga tushirish
Dasturiy ta’minotni ishga tushirish uchun quyidagi buyruqni bajaring:
```bash 
npm start
```
Dastur lokal serverda ishga tushadi va odatda quyidagi URL orqali ko’rish mumkin:

[http://localhost:3000](http://localhost:3000)

### 5. Ishlash tartibi

1. **Kirim-chiqim qo’shish**:
   - Asosiy sahifada **“Kirim qo’shish”** yoki **“Chiqim qo’shish”** tugmalarini bosing.
   - Tegishli ma’lumotlarni kiriting va **saqlash** tugmasini bosing.

2. **Ma’lumotlarni saralash**:
   - Jadval ustunlaridagi ustun nomlarini bosib, ma’lumotlarni **vaqt** yoki **tur** bo’yicha saralashingiz mumkin.

3. **Diagrammalar**:
   - **“Tahlil”** bo’limiga o’tib, harajatlarni grafikalar orqali ko’rishingiz mumkin.

4. **Valyuta kurslari**:
   - **“Valyuta kurslari”** bo’limiga o’ting.
   - Kurslarni ko’rish yoki hisob-kitob qilish uchun **valyutalar** va **miqdorni** tanlang.

   ## Loyihani ishlab chiqishda qo’shilgan kutubxonalar

- **React.js** — Interfaol foydalanuvchi interfeyslarini yaratish uchun.
- **Bootstrap 5** — Zamonaviy UI elementlari uchun.
- **Apex Chart** — Harajatlarni grafik ko’rinishda taqdim etish uchun.


### Loyiha manbasi

Bu loyiha ochiq manbada e’lon qilingan. Kodni o’zgartirish va yaxshilash uchun pull request yuborishingiz mumkin.

GitHub havolasi: [https://github.com/username/expense-tracker](https://github.com/username/expense-tracker)
