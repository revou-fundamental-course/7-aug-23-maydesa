document.addEventListener("DOMContentLoaded", function () {
  // Menghitung luas segitiga
  const hitungLuasButton = document.getElementById("hitung-luas");
  const hasilOutputLuas = document.getElementById("hasil-output-luas");
  const resetLuasButton = document.getElementById("reset-luas-button");

  hitungLuasButton.addEventListener("click", function () {
    const tinggi = parseFloat(document.getElementById("tinggi-input-luas").value);
    const alas = parseFloat(document.getElementById("alas-input-luas").value);

    const luas = (alas * tinggi) / 2;
    hasilOutputLuas.value = luas;

    console.log("Luas Segitiga: " + luas);
  });

  resetLuasButton.addEventListener("click", function () {
    document.getElementById("tinggi-input-luas").value = "";
    document.getElementById("alas-input-luas").value = "";
    hasilOutputLuas.value = "";
  });

  // Menghitung keliling segitiga
  const hitungKelilingButton = document.getElementById("hitung-keliling");
  const hasilOutputKeliling = document.getElementById("hasil-output-keliling");
  const resetKelilingButton = document.getElementById("reset-keliling-button");

  hitungKelilingButton.addEventListener("click", function () {
    const sisi = parseFloat(document.getElementById("sisi-input-keliling").value);
    const alasKeliling = parseFloat(document.getElementById("alas-input-keliling").value);

    const keliling = alasKeliling + ( 2 * sisi );
    hasilOutputKeliling.value = keliling;

    console.log("Keliling Segitiga: " + keliling);
  });

  resetKelilingButton.addEventListener("click", function () {
    document.getElementById("sisi-input-keliling").value = "";
    document.getElementById("alas-input-keliling").value = "";
    hasilOutputKeliling.value = "";
  });  
});
