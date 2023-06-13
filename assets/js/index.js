// Ketika tombol tambah data diklik
function tambahData() {
  // Variabel dari form input di tangkap
  let nim = document.forms["dataMahasiswa"]["nim"].value;
  let nama = document.forms["dataMahasiswa"]["nama"].value;
  let kelas = document.forms["dataMahasiswa"]["kelas"].value;
  let alamat = document.forms["dataMahasiswa"]["alamat"].value;

  // Variabel notifikasi
  let pesan = document.getElementById("pesan");

  // Variabel tabel ditangkap
  const tabel = document.getElementById("tabelMahasiswa");

  // Menambahkan baris pada tabel
  const baris = tabel.insertRow(1);

  // Menambahkan kolom pada baris yang dibuat
  const kolomNim = baris.insertCell(0);
  const kolomNama = baris.insertCell(1);
  const kolomKelas = baris.insertCell(2);
  const kolomAlamat = baris.insertCell(3);
  const kolomAksi = baris.insertCell(4);

  // Menampilkan data yang ditangkap ke dalam kolom
  kolomNim.innerHTML = nim;
  kolomNama.innerHTML = nama;
  kolomKelas.innerHTML = kelas;
  kolomAlamat.innerHTML = alamat;

  // Reset form input
  document.forms["dataMahasiswa"].reset();

  // Menampilkan hasil tambah data
  document.getElementById("hasilTambahData").innerHTML =
    "Data berhasil ditambahkan: " +
    "NIM: " +
    nim +
    ", Nama: " +
    nama +
    ", Kelas: " +
    kelas +
    ", Alamat: " +
    alamat;
}

// Fungsi untuk menghapus baris data
function hapusData(button) {
  const baris = button.parentNode.parentNode;
  const tabel = document.getElementById("tableMahasiswa");
  tabel.deleteRow(baris.rowIndex);
}

// Fungsi untuk menghapus baris data
function hapusData(button) {
  const baris = button.parentNode.parentNode.parentNode; // Perbarui pemilihan baris
  const tabel = document.getElementById("tabelMahasiswa");
  tabel.deleteRow(baris.rowIndex);
}
