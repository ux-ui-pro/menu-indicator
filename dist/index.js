function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $4fa36e821943b400$export$2e2bcd8739ae039);
class $4fa36e821943b400$export$2e2bcd8739ae039 {
    constructor(navClass, navItemClass, navIndicatorClass, activeItemClass){
        this.nav = document.querySelector(navClass);
        if (!this.nav) return;
        this.navItems = Array.from(this.nav?.querySelectorAll(navItemClass) || []);
        this.navIndicator = this.nav?.querySelector(navIndicatorClass);
        this.activeItemClass = activeItemClass;
        this.loaded = this.loaded.bind(this);
        this.listeners = this.listeners.bind(this);
        this.updateActiveItem = this.updateActiveItem.bind(this);
        this.offset = this.offset.bind(this);
        this.loaded();
        this.resize();
        this.listeners();
    }
    offset(e) {
        const { offsetLeft: offsetLeft , offsetWidth: offsetWidth  } = e;
        this.navIndicator.style.cssText = `--mi-left: ${offsetLeft}px; --mi-width: ${offsetWidth}px;`;
    }
    updateActiveItem() {
        const activeItem = this.nav.querySelector(this.activeItemClass);
        this.navIndicator.style.cssText = activeItem ? `--mi-left: ${activeItem.offsetLeft}px; --mi-width:${activeItem.offsetWidth}px;` : `--mi-left: auto; --mi-width: auto;`;
    }
    loaded() {
        if (document.fonts) document.fonts.ready.then(()=>{
            this.updateActiveItem();
        });
        else {
            const fontLoader = document.fonts || new FontFaceSet();
            fontLoader.load().then(()=>{
                this.updateActiveItem();
            });
        }
    }
    resize() {
        const resizeObserver = new ResizeObserver(this.updateActiveItem);
        resizeObserver.observe(this.nav);
    }
    listeners() {
        this.nav.addEventListener("click", this.updateActiveItem);
        this.nav.addEventListener("mouseleave", this.updateActiveItem);
        this.navItems.forEach((item)=>item.addEventListener("mouseenter", ()=>this.offset(item)));
        document.body.addEventListener("click", (e)=>{
            if (e.target.tagName === "A") setTimeout(()=>{
                this.updateActiveItem();
            }, 550);
        });
    }
}


//# sourceMappingURL=index.js.map
