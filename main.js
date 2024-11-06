document.addEventListener("DOMContentLoaded", function () {
    const color = ["red", "orange", "yellow", "green", "blue"];

    const colorButton = document.getElementById("colorButton");

    let i = 0;

    colorButton.addEventListener("click", function () {
        document.body.style.backgroundColor = color[i];

        console.log(`Background color changed to ${color[i]}`)
        i = (i + 1) % color.length
    })
})