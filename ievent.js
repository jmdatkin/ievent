export default IEvent = (function() {
    const _IEvent = function(store) {
        this.handlers = {};
        this.store = {};
        store.put = function(values) {
            Object.assign(this.store,values);
        };
        if (typeof store !== "undefined")
            this.init(store);
    };
    _IEvent.prototype.init = function(store) {
        Object.assign(this.store,store);
    };
    _IEvent.prototype.add = function(el,type,cb) {
        const wrapperFxn = (e) => {
            cb(e,Object.assign({},this.store));
        }
        const handlerObj = {
            element: el,
            eventType: type,
            handler: wrapperFxn
        };
        if (!this.handlers.hasOwnProperty(el)) {
            this.handlers[el] = {};
        }
        this.handlers[el][type] = handlerObj;

        el.addEventListener(type, wrapperFxn);
        // el.addEventListener(type, (e) => {
        //     cb(e,Object.assign({},this.store));
        // });
    };

    const public = {}
    public.create = function(store) {
        let newIEvent = new _IEvent(store);
        return newIEvent;
    };
    return public;
})();