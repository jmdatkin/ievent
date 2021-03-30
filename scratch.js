const ievt = IEvent.create(document.body, "mousedown", (e, prev, curr) => {

});

ievt.chain(document.body, "mousemove", (e, prev, curr) => {

});

IEvent.store = {};

const IEvent = (function() {


    const _IEvent = function() {
        this.store = {};
    };
    _IEvent.prototype.create = function(el,type,cb) {
        const newIEvent = new _IEvent();

    };


})();
function IEvent.add(el, type, fxn) {
        
}

function IEvent.chain




















evtFlow = IEvent.create();
evtFlow.init({
    x0: 0,
    y0: 0,
    x1: 0,
    y1: 0
});
evtFlow.add(mainCanv, "mousedown", (e, store) => {
    
});

evtFlow.add(mainCanv, "mousemove", (e, store) => {
    let x1 = e.pageX;
    let y1 = e.pageY;
    
    let dx = x1 - store.x0;
    let dy = y1 - store.y0;

    store.put({
        x1: x1,
        y1: y1,
        dx: dx,
        dy: dy
    });
});