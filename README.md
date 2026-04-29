# Stunting Care Web Hosting

## Description
Stunting Care Web Hosting adalah platform web sederhana yang dibuat untuk mendukung kampanye edukasi kesehatan dan pencegahan stunting. Web ini menghadirkan pengalaman UX yang jelas, navigasi mudah, serta menampilkan informasi penting tentang nutrisi, layanan, dan peraturan privasi.

<img width="1183" height="589" alt="Image" src="https://github.com/user-attachments/assets/6c215e3d-2add-4ae4-9a19-ea4ec2c42f90" />

## Table of Contents
- [Tentang Proyek](#tentang-proyek)
- [Tahap Desain Web](#tahap-desain-web)
- [Isi Konten](#isi-konten)
- [Fitur Utama](#fitur-utama)
- [Arsitektur Sistem](#arsitektur-sistem)
- [Demo](#demo)
- [Cara Menjalankan](#cara-menjalankan)
- [Contributors](#contributors)
- [Contact](#contact)

## Tentang Proyek
Stunting Care Web Hosting adalah website berbasis HTML dan Node.js/Express yang dirancang untuk menyajikan informasi dan layanan terkait pencegahan stunting. Website ini dibuat dengan fokus pada kemudahan akses, struktur konten yang rapi, dan integrasi fitur pendukung seperti halaman kebijakan privasi dan syarat ketentuan.

### Arsitektur proyek
- `main.html`: halaman utama atau dashboard pengguna
- `login.html`: halaman login untuk akses pengguna atau admin
- `kebijakan-privasi.html`: halaman kebijakan privasi
- `syarat-ketentuan.html`: halaman syarat dan ketentuan
- `server.js`: backend sederhana dengan Express untuk melayani file dan endpoint

## Tahap Desain Web
Proses pembuatan web ini meliputi beberapa fase penting:

1. Research & Analisis
   - Identifikasi tujuan website: edukasi, informasi, dan dukungan pencegahan stunting.
   - Tentukan audiens: masyarakat umum, orang tua, pendidik, dan tenaga kesehatan.

2. Perencanaan Konten
   - Susun topik yang penting seperti informasi stunting, sumber daya nutrisi, dan pelayanan.
   - Tentukan halaman inti dan struktur navigasi.

3. Wireframe & UX
   - Buat sketsa tata letak halaman utama, login, dan halaman informasi.
   - Pastikan alur pengguna mudah diikuti dan elemen penting terlihat jelas.

4. Visual Design
   - Pilih tampilan yang sederhana, profesional, dan mudah dibaca.
   - Gunakan teks, judul, dan tombol yang konsisten.

5. Development
   - Implementasi HTML statis untuk halaman depan dan halaman informatif.
   - Gunakan `server.js` untuk menjalankan server lokal dan melayani halaman.

6. Testing & Feedback
   - Uji tampilan di browser untuk memastikan semua halaman bekerja.
   - Perbaiki tautan dan pastikan konten dapat dibaca dengan mudah.

## Isi Konten
Website ini menyajikan beberapa jenis konten penting:

- Informasi tentang stunting, definisi, dan dampak pada anak.
- Panduan nutrisi untuk ibu hamil dan anak balita.
- Layanan dukungan dan rujukan kesehatan.
- Halaman kebijakan privasi untuk menjelaskan data pengguna.
- Halaman syarat dan ketentuan untuk penggunaan situs.
- Halaman login sebagai pintu akses ke area khusus.

Konten disusun agar mudah dipahami oleh pengunjung dan relevan dengan tujuan edukasi kesehatan.

## Fitur Utama
- Navigasi yang jelas antara halaman utama, login, kebijakan privasi, dan syarat ketentuan.
- Desain responsif sederhana untuk pengalaman pengguna yang nyaman.
- Struktur folder HTML yang mudah di-maintain.
- Backend Express untuk menjalankan server lokal.
- Halaman informasi edukatif untuk mendukung kampanye stunting.

## Arsitektur Sistem
Web ini diintegrasikan dengan database MySQL untuk menyimpan dan mengelola data. Berikut adalah alur kerja sistem:

### Komponen Utama
- **Frontend (HTML/CSS/JavaScript)**: Tampilan web yang responsif untuk pengguna
- **Backend (Node.js + Express)**: Server yang memproses request dan logika aplikasi
- **Database (MySQL)**: Menyimpan data user, konten, dan informasi stunting care

### Diagram Alur Sistem
![Sistem Flowchart](images/system-flowchart.png)

> Ganti gambar di atas dengan flowchart arsitektur sistem yang menunjukkan hubungan antara Frontend, Backend (Express), dan Database (MySQL).

### Alur Data
1. **User mengakses web** → Frontend HTML/CSS/JS dimuat di browser
2. **User melakukan action** (login, submit form, dll) → Request dikirim ke Backend Express
3. **Backend memproses** → Query ke database MySQL
4. **Database merespons** → Data dikirim kembali ke Backend
5. **Backend mengirim response** → Frontend menampilkan hasil kepada user

Integrasi ini memastikan data tersimpan aman di database MySQL dan dapat diakses secara real-time oleh aplikasi web.

## Demo
Tonton demo aplikasi dari video berikut:

- ['link demo']

> Ganti tanda di atas dengan URL YouTube demo setelah video tersedia.

## Cara Menjalankan
1. Clone repository ini.
2. Jalankan `npm install`.
3. Buka terminal dan jalankan:

```sh
npm start
```

4. Akses web di browser melalui `http://localhost:3000`.

## Contributors
<div align="center">
  <img src="https://github.com/user-attachments/assets/df5e1814-f4af-46af-8f47-f3f0a306a46b" alt="Contributor 2" width="120" height="120" style="margin: 0 10px;" />
  <img src="['link png']" alt="Contributor 2" width="120" height="120" style="margin: 0 10px;" />
  <img src="['link png']" alt="Contributor 3" width="120" height="120" style="margin: 0 10px;" />

  <p>
    <strong>Akmal Dwi Putra Mahardika</strong> • <strong>Nama 2</strong> • <strong>Rifa Naftali Azka</strong>
  </p>
</div>

> Ganti `['link png']` dengan tautan gambar contributor yang sebenarnya.

## Contact
| Nama                           | Telepon            | Email                                |
|--------------------------------|--------------------|--------------------------------------|
| Akmal Dwi Putra Mahardika      | +62 812-1919-5661  | akmalp292@gmail.com                  |
| Andi Siti Maryam Shaskirana    | +62 813-1974-0181  | andisitimaryamshaskirana@gmail.com   |
| Rifa Naftali Azka              | +62 857-9302-7125  | rifanazka02@gmail.com                |

