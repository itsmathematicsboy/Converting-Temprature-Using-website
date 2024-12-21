// konstanta untuk input temperatur
const input_temp_celsius = document.getElementById('temp-input-celsius'); // input suhu celsius
const input_temp_fahrenheit = document.getElementById('temp-input-fahrenheit'); // input suhu fahrenheit
const input_temp_kelvin = document.getElementById('temp-input-kelvin'); // input suhu kelvin

// ============== konstanta untuk output temperatur ==========================

// konstanta untuk output temperatur celsius
const CelsiusKelvinOutput = document.getElementById('celsius-kelvin'); // output hasil konversi ke kelvin
const CelsiusFahrenheitOutput = document.getElementById('celsius-fahrenheit'); // output hasil konversi ke fahrenheit
const CelsiusReamurOutput = document.getElementById('celsius-reamur'); // output hasil konversi ke reamur

// konstanta untuk output temperatur fahrenheit
const FahrenheitCelsiusOutput = document.getElementById('fahrenheit-celsius'); // output hasil konversi ke celsius
const FahrenheitKelvinOutput = document.getElementById('fahrenheit-kelvin'); // output hasil konversi ke kelvin
const FahrenheitReamurOutput = document.getElementById('fahrenheit-reamur'); // output hasil konversi ke reamur

// kontanta untuk output temperatur kelvin
const KelvinCelsiusOutput = document.getElementById('kelvin-celsius'); // output hasil konversi ke celsius
const KelvinFahrenheitOutput = document.getElementById('kelvin-fahrenheit'); // output hasil konversi ke fahrenheit
const KelvinReamurOutput = document.getElementById('kelvin-reamur'); // output hasil konversi ke reamur


// ============ function untuk mengubah suhu celcius ================

//function untuk mengubah suhu celcius ke fahrenheit
function celsius_to_fahrenheit(celsius){
    if (isNaN(celsius)) return 0; // Jika input kosong atau salah, default ke 0
    let fahrenheit = (celsius * 9 / 5) + 32; // Konversi suhu
    return fahrenheit;
}

//function untuk mengubah suhu celcius ke kelvin
function celsius_to_kelvin(celsius){
    if (isNaN(celsius)) return 0; // Jika input kosong atau salah, default ke 0
    let kelvin = celsius + 273.15; // Konversi suhu
    return kelvin;
}

// function untuk mengubah suhu celcius ke reamur
function celsius_to_reamur(celsius){
    if (isNaN(celsius)) return 0; // Jika input kosong atau salah, default ke 0
    let reamur = celsius * 4 / 5; // Konversi suhu
    return reamur;
}

// ================ function untuk mengubah suhu fahrenheit =================

// function untuk mengubah fahrenheit ke celsius
function fahrenheit_to_celsius(fahrenheit){
    if (isNaN(fahrenheit)){
        return 0; // Jika input kosong atau salah, default ke 0
    }
    let celsius = (fahrenheit - 32) * 5 / 9; // Konversi suhu
    return celsius;
}

// function untuk mengubah fahrenheit ke kelvin
function fahrenheit_to_kelvin(fahrenheit){
    if(isNaN(fahrenheit)){
        return 0;
    }
    let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15; // Konversi suhu
    return kelvin;
}

// function untuk mengubah fahrenheit ke reamur
function fahrenheit_to_reamur(fahrenheit){
    if(isNaN(fahrenheit)){
        return 0;
    }
    let reamur = (fahrenheit - 32) * 4 / 9; // Konversi suhu
    return reamur;
}

// ================== function untuk mengubah suhu kelvin ========================
// function untuk mengubah suhu kelvin ke celsius
function kelvin_to_celsius(kelvin){
    if(isNaN(kelvin)){
        return 0;
    }
    let celsius = kelvin - 273.15; // Konversi suhu
    return celsius;
}

// function untuk mengubah suhu kelvin ke fahrenheit
function kelvin_to_fahrenheit(kelvin){
    if(isNaN(kelvin)){
        return 0;
    }
    let fahrenheit = (kelvin - 273.15) * 9 / 5 + 32; // Konversi suhu
    return fahrenheit;
}

// function untuk mengubah suhu kelvin ke reamur
function kelvin_to_reamur(kelvin){
    if(isNaN(kelvin)){
        return 0;
    }
    let reamur = (kelvin - 273.15) * 4 / 9; // Konversi suhu
    return reamur;
}

// ================== Output untuk mengubah suhu celsius ==================
// output untuk mengubah suhu celsius ke fahrenheit
document.querySelector('.btn-celsius-to-fahrenheit').addEventListener('click', () => {
    let celsius = parseFloat(input_temp_celsius.value); // Konversi input ke angka
    const result = celsius_to_fahrenheit(celsius);
    CelsiusFahrenheitOutput.value = `= ${result.toFixed(2)}`; // Perbarui output
});

// output untuk mengubah suhu celsius ke kelvin
document.querySelector('.btn-celsius-to-kelvin').addEventListener('click', () => {
    let celsius = parseFloat(input_temp_celsius.value); // Konversi input ke angka
    const result = celsius_to_kelvin(celsius);
    CelsiusKelvinOutput.value = `= ${result.toFixed(2)}`; // Perbarui output
});

// output untuk mengubah suhu celsius ke reamur
document.querySelector('.btn-celsius-to-reamur').addEventListener('click', () =>{
    let celsius = parseFloat(input_temp_celsius.value); // Konversi input ke angka
    const result = celsius_to_reamur(celsius);
    CelsiusReamurOutput.value = `= ${result.toFixed(2)}`; // Perbarui output
});

// =================== Output untuk mengubah suhu fahrenheit ===================
// output untuk mengubah suhu fahrenheit ke celsius
document.querySelector('.btn-fahrenheit-to-celsius').addEventListener('click', () => {
    let fahrenheit = parseFloat(input_temp_fahrenheit.value); // Konversi input ke angka
    const result = fahrenheit_to_celsius(fahrenheit);
    FahrenheitCelsiusOutput.value = `= ${result.toFixed(2)}`; // Perbarui output
});

// output untuk mengubah suhu fahrenheit ke kelvin
document.querySelector('.btn-fahrenheit-to-kelvin').addEventListener('click', () => {
    let fahrenheit = parseFloat(input_temp_fahrenheit.value); // Konversi input ke angka
    const result = fahrenheit_to_kelvin(fahrenheit);
    FahrenheitKelvinOutput.value = `= ${result.toFixed(2)}`; // Perbarui output
});

// output untuk mengubah suhu fahrenheit ke reamur
document.querySelector('.btn-fahrenheit-to-reamur').addEventListener('click', () => {
    let fahrenheit = parseFloat(input_temp_fahrenheit.value); // Konversi input ke angka
    const result = fahrenheit_to_reamur(fahrenheit);
    FahrenheitReamurOutput.value = `= ${result.toFixed(2)}`; // Perbarui output
});

// ===================== Output untuk mengubah suhu kelvin =====================
// output untuk mengubah suhu kelvin ke celsius
document.querySelector('.btn-kelvin-to-celsius').addEventListener('click', () => {
    let kelvin = parseFloat(input_temp_kelvin.value); // Konversi input ke angka
    const result = kelvin_to_celsius(kelvin);
    KelvinCelsiusOutput.value = `= ${result.toFixed(2)}`; // Perbarui output
});

// output untuk mengubah suhu kelvin ke fahrenheit
document.querySelector('.btn-kelvin-to-fahrenheit').addEventListener('click', () => {
    let kelvin = parseFloat(input_temp_kelvin.value); // Konversi input ke angka
    const result = kelvin_to_fahrenheit(kelvin);
    KelvinFahrenheitOutput.value = `= ${result.toFixed(2)}`; // Perbarui output
});

// output untuk mengubah suhu kelvin ke reamur
document.querySelector('.btn-kelvin-to-reamur').addEventListener('click', () => {
    let kelvin = parseFloat(input_temp_kelvin.value); // Konversi input ke angka
    const result = kelvin_to_reamur(kelvin);
    KelvinReamurOutput.value = `= ${result.toFixed(2)}`; // Perbarui output
});