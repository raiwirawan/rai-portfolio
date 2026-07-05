# Product Requirement Document (PRD)
## Tata Letak & Isi Website Portofolio Personal

| Dokumen | Product Requirement Document (PRD) |
| :--- | :--- |
| **Target Pengguna** | Perekrut (HRD), Tech Lead, Potensial Klien |
| **Sifat Data** | Statis / Hardcoded (Tautan murni, tanpa integrasi API pihak ketiga) |

---

## 1. Arsitektur Halaman & Mekanisme Navigasi
Website diimplementasikan dalam konsep **Single Page Application (SPA)**. Navigasi antarmuka menggunakan metode *smooth scrolling* yang langsung mengarah pada jangkar (*anchor link*) masing-masing *section* tanpa memuat ulang halaman (*zero-reload layout*).

---

## 2. Spesifikasi Tata Letak & Konten (Section-by-Section)

### 2.1. Section 1: Hero, Profil Ringkas & Kontak Profesional
* **Tata Letak (Layout):**
    * Menggunakan sistem *split-screen* (dua kolom) pada layar desktop, dan bertumpuk vertikal pada layar *mobile*.
    * Kolom Kiri/Atas: Foto profil profesional.
    * Kolom Kanan/Bawah: Deskripsi diri, ringkasan kemampuan, dan panel kontak.
* **Isi Konten:**
    * **Foto Profil:** Aset visual personal beresolusi tinggi dengan bingkai geometris atau minimalis.
    * **Ringkasan Diri (About Me):** Narasi tekstual yang merepresentasikan identitas Anda sebagai *Web Developer*. Struktur teks wajib menonjolkan:
        * Tingkat kapabilitas teknis secara menyeluruh (*Full-Stack / Software Engineer*).
        * Pernyataan tegas mengenai fleksibilitas etos kerja: seberapa andal dan produktif Anda saat bekerja secara mandiri (*individual contributor*) maupun saat berkolaborasi di dalam kelompok (*team player*).
    * **Panel Kontak Kerja:** Informasi jalur komunikasi utama yang menggunakan tautan protokol murni:
        * Nomor Telepon Kerja (Aksi klik langsung memicu panggilan melalui `tel:`).
        * Alamat Email Profesional (Aksi klik langsung membuka aplikasi email melalui `mailto:`).
    * **Tautan Jaringan Sosial:** Baris ikon murni yang mengarah langsung ke LinkedIn, GitHub, dan media sosial profesional lainnya.

### 2.2. Section 2: GitHub Dashboard (Top 5 Repositories Card)
* **Tata Letak (Layout):**
    * Struktur *Grid* responsif yang menampilkan **5 buah komponen Card**.
    * Pola susunan grid otomatis menyesuaikan ukuran layar (misal: 3 kolom di desktop besar, 2 kolom di tablet, dan 1 kolom di *mobile*).
* **Isi Konten per Card:**
    * **Foto Profil GitHub Kecil:** Tersemat di sudut atas card untuk memperkuat estetika repositori.
    * **Nama Repositori:** Judul proyek *open-source* atau repositori kode terbaik Anda.
    * **Deskripsi Proyek:** Penjelasan ringkas mengenai fungsi utama dari baris kode di dalam repo tersebut.
    * **Kumpulan Badges:** Label visual statis yang menunjukkan *tech stack* utama pada repo tersebut (contoh: `TypeScript`, `Node.js`, `Pytest`).
    * **Tombol Aksi:** Tautan murni berupa tombol "View on GitHub" yang mengarah langsung ke URL repositori spesifik tersebut.

### 2.3. Section 3: Live Projects Showcase (Hosted Websites Card)
* **Tata Letak (Layout):**
    * Struktur *Grid* dinamis berisi kumpulan kartu (*cards*) pratinjau website yang telah berhasil di-hosting dan berjalan di lingkungan produksi (*live environment*).
* **Isi Konten per Card:**
    * **Preview Image (Thumbnail):** Gambar tangkapan layar (*screenshot*) halaman utama dari website yang di-hosting.
    * **Judul & Deskripsi Aplikasi:** Penjelasan mengenai fitur utama, tujuan sistem, atau masalah yang diselesaikan oleh aplikasi tersebut.
    * **Tech Stack Badges:** Penanda teknologi yang dipakai dalam proyek (contoh: `Next.js`, `Tailwind CSS`, `Supabase`, `Cypress`).
    * **Dua Tombol Aksi (Pure Links):**
        1. 🔗 **Live Demo:** Mengarah langsung ke URL publik tempat web tersebut di-host (Vercel, Netlify, atau platform hosting lainnya).
        2. 💻 **Source Code:** Mengarah langsung ke repositori GitHub dari proyek tersebut.

### 2.4. Section 4: UI Design Showcase (Figma Preview Card)
* **Tata Letak (Layout):**
    * Struktur *Grid* bersih dengan fokus utama pada kekuatan visual komponen desain grafis antarmuka.
* **Isi Konten per Card:**
    * **Mockup Thumbnail:** Gambar statis hasil ekspor rancangan visual/antarmuka yang telah Anda buat di Figma.
    * **Judul & Deskripsi Desain:** Nama proyek desain (contoh: *E-Commerce Mobile App Design*) dilengkapi ringkasan konsep estetika atau pendekatan UX yang digunakan.
    * **Tombol Akses:** Satu tombol murni bertuliskan **"Open in Figma"** yang berisi tautan langsung menuju URL berkas publik Figma Anda. *Section ini murni menggunakan link statis dan tidak menggunakan API embed atau widget eksternal apa pun agar pemuatan halaman tetap instan.*

---

## 3. Aturan Interaksi & Manajemen Konten

### 3.1. Kebijakan Sumber Data
* **Arsitektur Data Lokal:** Seluruh teks deskripsi, detail kontak, daftar 5 repo GitHub, data proyek *live*, dan tautan Figma dilarang keras menggunakan *fetch* API eksternal secara dinamis saat *runtime*.
* Semua konten wajib di-hardcode ke dalam sebuah berkas konfigurasi lokal (contoh: `src/data/portfolio.ts`) agar performa kecepatan muat halaman bernilai maksimal.

### 3.2. Perilaku Antarmuka (UI Interactions)
* **Efek Transisi Card:** Seluruh komponen berbentuk kartu (*Card*) pada Section 2, 3, dan 4 wajib memiliki efek interaksi visual saat disentuh kursor (*hover effect*) seperti bergeser sedikit ke atas (*translate-y*) dan penguatan bayangan (*shadow expansion*) secara halus.
* **Responsivitas Sempurna:** Tata letak komponen di dalam seluruh *section* wajib fleksibel, memastikan keterbacaan teks dan proporsi kartu tetap seimbang dari resolusi layar terkecil (*mobile phone*) hingga layar monitor ultra-lebar (*desktop*).
