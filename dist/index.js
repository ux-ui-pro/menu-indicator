function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
class $4fa36e821943b400$export$2e2bcd8739ae039 {
    constructor({ media: media , entry: entry , exit: exit , change: change  }){
        this.MQ = window.matchMedia(media);
        this.handleChange = this.handleChange.bind(this);
        this.MQ.addEventListener("change", this.handleChange);
        this.entry = entry;
        this.exit = exit;
        this.change = change;
        this.trigger(this.MQ);
    }
    trigger(MQ) {
        const current = MQ.matches;
        if (current !== this.prev) {
            current ? this.entry?.(MQ) : this.exit?.(MQ);
            this.change?.(MQ);
            this.prev = current;
        }
    }
    handleChange() {
        this.trigger(this.MQ);
    }
}


//# sourceMappingURL=index.js.map
