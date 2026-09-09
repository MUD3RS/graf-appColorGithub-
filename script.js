// ========================================
// ELEMENTOS
// ========================================

const colorPicker = document.getElementById("colorPicker");

const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorBox = document.getElementById("colorBox");

const rgbCode = document.getElementById("rgbCode");

const hexCode = document.getElementById("hexCode");

const hexResult = document.getElementById("hexResult");


// ========================================
// ACTUALIZAR COLOR
// ========================================

function updateColor() {

    const r = Number(red.value);
    const g = Number(green.value);
    const b = Number(blue.value);


    // RGB

    const rgb = `rgb(${r}, ${g}, ${b})`;


    // HEX

    const hex =
        "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");


    // ====================================
    // ACTUALIZAR VARIABLES CSS
    // ====================================

    document.documentElement.style.setProperty(
        "--rgb-color",
        rgb
    );


    // ====================================
    // ACTUALIZAR RECUADRO
    // ====================================

    if (colorBox) {

        colorBox.style.backgroundColor = rgb;

    }


    // ====================================
    // ACTUALIZAR INFORMACIÓN
    // ====================================

    rgbCode.textContent = rgb;

    hexCode.textContent = hex.toUpperCase();

    hexResult.textContent = hex.toUpperCase();


    // ====================================
    // ACTUALIZAR COLOR PICKER
    // ====================================

    colorPicker.value = hex;


    // ====================================
    // ACTUALIZAR INPUTS
    // ====================================

    redInput.value = r;

    greenInput.value = g;

    blueInput.value = b;

}


// ========================================
// SLIDER ROJO
// ========================================

red.addEventListener("input", function () {

    redInput.value = red.value;

    updateColor();

});


// ========================================
// SLIDER VERDE
// ========================================

green.addEventListener("input", function () {

    greenInput.value = green.value;

    updateColor();

});


// ========================================
// SLIDER AZUL
// ========================================

blue.addEventListener("input", function () {

    blueInput.value = blue.value;

    updateColor();

});


// ========================================
// INPUT ROJO
// ========================================

redInput.addEventListener("input", function () {

    let value = Number(redInput.value);

    if (value < 0) value = 0;

    if (value > 255) value = 255;

    red.value = value;

    updateColor();

});


// ========================================
// INPUT VERDE
// ========================================

greenInput.addEventListener("input", function () {

    let value = Number(greenInput.value);

    if (value < 0) value = 0;

    if (value > 255) value = 255;

    green.value = value;

    updateColor();

});


// ========================================
// INPUT AZUL
// ========================================

blueInput.addEventListener("input", function () {

    let value = Number(blueInput.value);

    if (value < 0) value = 0;

    if (value > 255) value = 255;

    blue.value = value;

    updateColor();

});


// ========================================
// COLOR PICKER
// ========================================

colorPicker.addEventListener("input", function () {

    const hex = colorPicker.value;


    // Convertir HEX a RGB

    const r = parseInt(
        hex.substring(1, 3),
        16
    );

    const g = parseInt(
        hex.substring(3, 5),
        16
    );

    const b = parseInt(
        hex.substring(5, 7),
        16
    );


    // Actualizar sliders

    red.value = r;

    green.value = g;

    blue.value = b;


    // Actualizar inputs

    redInput.value = r;

    greenInput.value = g;

    blueInput.value = b;


    updateColor();

});


// ========================================
// COLOR ALEATORIO
// ========================================

function randomColor() {

    const r = Math.floor(
        Math.random() * 256
    );

    const g = Math.floor(
        Math.random() * 256
    );

    const b = Math.floor(
        Math.random() * 256
    );


    red.value = r;

    green.value = g;

    blue.value = b;


    redInput.value = r;

    greenInput.value = g;

    blueInput.value = b;


    updateColor();

}


// ========================================
// INICIALIZAR
// ========================================

updateColor();

