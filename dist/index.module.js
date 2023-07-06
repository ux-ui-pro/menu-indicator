class $cf838c15c8b009ba$export$2e2bcd8739ae039 {
    constructor(navClass, navItemClass, navIndicatorClass, activeItemClass){
        this.nav = document.querySelector(navClass);
        this.navItems = Array.from(this.nav?.querySelectorAll(navItemClass) || []);
        this.navIndicator = this.nav?.querySelector(navIndicatorClass);
        this.activeItemClass = activeItemClass;
        this.loaded = this.loaded.bind(this);
        this.listeners = this.listeners.bind(this);
        this.updateActiveItem = this.updateActiveItem.bind(this);
        this.offset = this.offset.bind(this);
        if (!this.nav) return;
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
        window.addEventListener("load", this.updateActiveItem);
    }
    resize() {
        const resizeObserver = new ResizeObserver(this.updateActiveItem);
        resizeObserver.observe(this.nav);
    }
    listeners() {
        this.nav.addEventListener("click", this.updateActiveItem);
        this.nav.addEventListener("mouseleave", this.updateActiveItem);
        this.navItems.forEach((item)=>item.addEventListener("mouseenter", ()=>this.offset(item)));
    }
}


export {$cf838c15c8b009ba$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.module.js.map
