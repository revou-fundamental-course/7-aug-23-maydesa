document.addEventListener("DOMContentLoaded", function () {
    const hitungLuasButton = document.getElementById("hitung-luas");
    const hasilLuasOutput = document.getElementById("hasil-output-luas");
    const resetLuasButton = document.getElementById("reset-luas");

    hitungLuasButton.addEventListener("click", function () {
        const tinggi = parseFloat(document.getElementById("tinggi-input").value);
        const alas = parseFloat(document.getElementById("alas-input-luas").value);
        const luas = (alas * tinggi) / 2;
        hasilLuasOutput.value = luas.toFixed(2);
    });

    resetLuasButton.addEventListener("click", function () {
        document.getElementById("tinggi-input").value = "";
        document.getElementById("alas-input-luas").value = "";
        hasilLuasOutput.value = "";
    });


    

    const hitungKelilingButton = document.getElementById("hitung-keliling");
    const hasilKelilingOutput = document.getElementById("hasil-output-keliling");
    const resetKelilingButton = document.getElementById("reset-keliling");

    hitungKelilingButton.addEventListener("click", function () {
        const sisi = parseFloat(document.getElementById("sisi-input-keliling").value);
        const alas = parseFloat(document.getElementById("alas-input-keliling").value);
        const keliling = alas + 2 * sisi;
        hasilKelilingOutput.value = keliling.toFixed(2);
    });

    resetKelilingButton.addEventListener("click", function () {
        document.getElementById("sisi-input-keliling").value = "";
        document.getElementById("alas-input-keliling").value = "";
        hasilKelilingOutput.value = "";
    });
});
