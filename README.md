
# nyawer-hook
Contoh web server saweria webhook mengirim notifikasi donasi ke discord webhook.

## Contoh
<img src="https://github.com/JadlionHD/nyawer-hook/blob/master/.github/img/contoh3.png?raw=true">
<img src="https://github.com/JadlionHD/nyawer-hook/blob/master/.github/img/contoh1.png?raw=true" width=350>

## Cara kerjanya?
Cara kerjanya menggunakan salah satu integrations yang disediakan [Saweria](https://saweria.co) yaitu webhook.
<img src="https://github.com/JadlionHD/nyawer-hook/blob/master/.github/img/contoh2.png?raw=true">
Jadi ini adalah gambaran cara kerjanya:
- Saweria webhook > Website kamu > Discord webhook


## Install
Dokumentasi belum lengkap, tapi ini sedikit instalisasinya sebagai berikut:
- Buatlah .env file lalu isi beberapa line berikut ini
```
SECRET=TOKENRAHASIA // token websitemu
DISCORD_WEBHOOK=URL // discord webhook url
PORT=NOMOR // port website yang akan dibuka
```
- Lalu install modules yang diperlukan dengan cara:
```bash
$ npm install
```
- Setelah semuanya selesai, maka untuk memulainya ketik:
```bash
$ npm start
```

## Contribution
Kalo kalian menemukan sebuah bug, dengan senang hati membuka issues agar dibahas lebih lanjut.