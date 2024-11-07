//ini soal tentang pengelolaan angkot dengan array dan function

var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  // Jika angkot kosong
  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang); // tambah penumpang di awal
    return penumpang;
  } else {
    // Telusuri seluruh kursi
    for (var i = 0; i < penumpang.length; i++) {
      // Jika sudah ada nama yang sama
      if (penumpang[i] == namaPenumpang) {
        console.log("Penumpang dengan nama " + namaPenumpang + " sudah ada");
        return penumpang;
      }
      // Jika ada kursi kosong
      if (penumpang[i] == undefined) {
        penumpang[i] = namaPenumpang;
        return penumpang;
      }
    }

    // Jika seluruh kursi terisi
    penumpang.push(namaPenumpang); // tambah penumpang di akhir
    return penumpang;
  }
};

console.log(tambahPenumpang("ahda", penumpang));
console.log(tambahPenumpang("ahda", penumpang));
