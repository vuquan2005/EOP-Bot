const minRange = document.getElementById("minRange");
const maxRange = document.getElementById("maxRange");
const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");

const updateValues = () => {
    let minVal = parseInt(minRange.value);
    let maxVal = parseInt(maxRange.value);

    if (minVal >= maxVal) {
        minRange.value = maxVal - 1;
        minVal = maxVal - 1;
    }

    minValue.textContent = minVal;
    maxValue.textContent = maxVal;
};

minRange.addEventListener("input", updateValues);
maxRange.addEventListener("input", updateValues);
