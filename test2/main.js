// import './ievent';

window.onload = function() {
    const canv = document.getElementById("main-canv");
    const ctx = canv.getContext('2d');
    canv.width = 800;
    canv.height = 600;

    const updateInfo = function(text) {
        document.getElementById("info-text").textContent = text;
    };

    let x0 = 0,
        y0 = 0;

    const mousemoveHandler = (e) => {
        let x1 = e.pageX;
        let y1 = e.pageY;
        let dx = x1 - x0;
        let dy = y1 - y0;
        let r = 25;
        let drag = (dx*dx+dy*dy > r ? true : false);

        updateInfo(`x0: ${x0}; y0: ${y0}; x1: ${x1}; y1: ${y1}; dx: ${dx}; dy: ${dy}; drag: ${drag}`);

        canv.width = canv.width;
        ctx.rect(x0 - canv.offsetLeft, y0 - canv.offsetTop, dx, dy);
        ctx.stroke();
    };

    canv.addEventListener("mousedown", (e) => {
        x0 = e.pageX;
        y0 = e.pageY;

        canv.addEventListener("mousemove", mousemoveHandler);
    });

    canv.addEventListener("mouseup", (e) => {
        canv.removeEventListener("mousemove", mousemoveHandler);
    });
};