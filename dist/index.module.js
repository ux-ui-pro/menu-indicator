class $cf838c15c8b009ba$export$2e2bcd8739ae039 {
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


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
