function tambah() {
    var frm = document.getElementById('calculator');
    var n1 = parseFloat(frm.number1.value);
    var n2 = parseFloat(frm.number2.value);
    var hasil = n1 + n2;
    if (isNaN(n1) || isNaN(n2)) {
        alert("Angka Harus Diisi");
    } else {
        frm.result.value = hasil;
    }
}
function kurang() {
    var frm = document.getElementById('calculator');
    var n1 = parseFloat(frm.number1.value);
    var n2 = parseFloat(frm.number2.value);
    var hasil = n1 - n2;
    if (isNaN(n1) || isNaN(n2)) {
        alert("Angka Harus Diisi");
    } else {
        frm.result.value = hasil;
    }
}
function kali() {
    var frm = document.getElementById('calculator');
    var n1 = parseFloat(frm.number1.value);
    var n2 = parseFloat(frm.number2.value);
    var hasil = n1 * n2;
    if (isNaN(n1) || isNaN(n2)) {
        alert("Angka Harus Diisi");
    } else {
        frm.result.value = hasil;
    }
}
function bagi() {
    var frm = document.getElementById('calculator');
    var n1 = parseFloat(frm.number1.value);
    var n2 = parseFloat(frm.number2.value);
    var hasil = n1 / n2;
    if (isNaN(n1) || isNaN(n2)) {
        alert("Angka Harus Diisi");
    } else {
        frm.result.value = hasil;
    }
}
function pangkat() {
    var frm = document.getElementById('calculator');
    var n1 = parseFloat(frm.number1.value);
    var n2 = parseFloat(frm.number2.value);
    var hasil = n1 ** n2;
    if (isNaN(n1) || isNaN(n2)) {
        alert("Angka Harus Diisi");
    } else {
        frm.result.value = hasil;
    }
}