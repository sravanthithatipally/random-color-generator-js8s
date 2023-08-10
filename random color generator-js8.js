let bgColorsArray = ["#e75d7c", "#b16cef", "#53cca4", "#efc84d", "#628ef0", "#184b73", "#883e7f", "#ed048b"];

function buttonclicked() {
    let arraylength = bgColorsArray.length;
    let index_value = Math.ceil(Math.random() * arraylength);
    if (index_value === arraylength) {
        index_value = index_value - 1;
    }
    document.getElementById("bgContainer").style.backgroundColor = bgColorsArray[index_value];
}