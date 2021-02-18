const priceSlider = document.getElementById('price-range-slider');
const inputNumberStart = document.querySelector(".price-min");
const inputNumberEnd = document.querySelector(".price-max");

noUiSlider.create(priceSlider, {
    start: [1000, 900000],
    connect: [false, true, false],
    step: 1,
    range: {
        'min': [0],
        'max': [1000000]            }
});

priceSlider.noUiSlider.on("update", function (values, handle) {
    let value = values[handle];

    if (handle) {
        inputNumberEnd.value = Math.round(value);
    } else {
        inputNumberStart.value = Math.round(value);
    }
});

inputNumberStart.addEventListener("change", function () {
    priceSlider.noUiSlider.set([this.value, null]);
});

inputNumberEnd.addEventListener("change", function () {
    priceSlider.noUiSlider.set([null, this.value]);
});