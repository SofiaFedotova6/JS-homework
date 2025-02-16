document.addEventListener("DOMContentLoaded", function() {
    const chtot = document.getElementById("chto");

    // document.addEventListener("mousemove", function(event) {
    //     chtot.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
    // });
    document.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;

    chtot.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
    if (x > 500 || y > 500) {
        chtot.style.color = "red";
    } else {
        chtot.style.color = "blueviolet";
    }
    });
});
