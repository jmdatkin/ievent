// import './ievent';

window.onload = function() {
    const canv = document.getElementById("main-canv");
    const ctx = canv.getContext('2d');
    canv.width = 800;
    canv.height = 600;

    const updateInfo = function(text) {
        document.getElementById("info-text").textContent = text;
    };

    const myEvt = new IEvent();

    myEvt.addEvent(canv, "mousedown", (e, i) => {
        i.store.put({
            x0: e.pageX,
            y0: e.pageY,
            drag: false
        });
        myEvt.handlers[canv]["mousemove"].activate();
    });

    myEvt.addEvent(canv, "mousemove", (e, i) => {
        let store = i.store.get();
        let x1 = e.pageX,
            y1 = e.pageY;

        let dx = x1 - store.x0,
            dy = y1 - store.y0;

        let r = 25;
        let drag = (dx*dx+dy*dy > r ? true : false);

        i.store.put({
            x1: x1,
            y1: y1,
            dx: dx,
            dy: dy,
            drag: drag
        });

        updateInfo(`x0: ${store.x0}; y0: ${store.y0}; x1: ${x1}; y1: ${y1}; dx: ${dx}; dy: ${dy}; drag: ${drag}`);

        canv.width = canv.width;
        ctx.rect(store.x0 - canv.offsetLeft,store.y0 - canv.offsetTop, dx, dy);
        ctx.stroke();
    }, false);

    myEvt.addEvent(canv, "mouseup", (e, i) => {
        i.store.put('drag',false);
        myEvt.handlers[canv]["mousemove"].deactivate();
    });
};