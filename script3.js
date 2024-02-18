document.getElementById('nilaiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var nama = document.getElementById('nama').value;
    var nilai = generateRandomNilai();
    var hasil = nama + ' mendapatkan nilai ' + nilai + ' :O';
    document.getElementById('hasil').innerText = hasil;
  });
  
  function generateRandomNilai() {
    // Menghasilkan nilai acak antara 0 hingga 100
    return Math.floor(Math.random() * 101);
  }
  