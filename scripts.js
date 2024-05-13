function updateWaktu() {
    const sekarang = new Date();
    const jam = sekarang.getHours();
    const menit = sekarang.getMinutes();
    const salam = jam < 12 ? 'Selamat Pagi' : jam < 17 ? 'Selamat Siang' : 'Selamat Malam';
    document.getElementById('salam').textContent = salam;
    document.getElementById('waktu').textContent = sekarang.toLocaleDateString('id-ID') + ' ' + jam + ':' + (menit < 10 ? '0' : '') + menit;
  }
  setInterval(updateWaktu, 1000);
  