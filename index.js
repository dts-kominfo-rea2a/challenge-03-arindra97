// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (dataBelanja) => {
  let list = [];
  
  // membuat perulangan untuk mendapatkan list belanjaan
  for (let i = 0; i < dataBelanja.length; i++) {
    // push data belanjaan ke dalam list
    list.push(
      " - " +
      dataBelanja[i].nama +
      " X " +
      dataBelanja[i].kuantitas
    );
  }

  // mengembalikan nilai list
  return list;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (dataBelanja) => {
  let total = 0;

  // membuat perulangan untuk mendapatkan total belanjaan
  for (let i = 0; i < dataBelanja.length; i++) {
    // menjumlahkan total belanjaan
    total += dataBelanja[i].harga * dataBelanja[i].kuantitas;
  }

  // mengembalikan nilai total
  return total;
};

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
