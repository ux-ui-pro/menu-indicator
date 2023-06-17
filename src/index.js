export default class MenuIndicator {
	constructor(navClass, navItemClass, navIndicatorClass, activeItemClass) {
		this.nav = document.querySelector(navClass)

		if (!this.nav) return

		this.navItems = Array.from(this.nav?.querySelectorAll(navItemClass) || [])
		this.navIndicator = this.nav?.querySelector(navIndicatorClass)
		this.activeItemClass = activeItemClass
		this.loaded = this.loaded.bind(this)
		this.listeners = this.listeners.bind(this)
		this.updateActiveItem = this.updateActiveItem.bind(this)
		this.offset = this.offset.bind(this)

		this.loaded()
		this.resize()
		this.listeners()
	}

	offset(e) {
		const { offsetLeft, offsetWidth } = e
		this.navIndicator.style.cssText = `--mi-left: ${offsetLeft}px; --mi-width: ${offsetWidth}px;`
	}

	updateActiveItem() {
		const activeItem = this.nav.querySelector(this.activeItemClass)
		this.navIndicator.style.cssText = activeItem ? `--mi-left: ${activeItem.offsetLeft}px; --mi-width:${activeItem.offsetWidth}px;` : `--mi-left: auto; --mi-width: auto;`
	}

	loaded() {
		if (document.fonts) {
			document.fonts.ready.then(() => { this.updateActiveItem() })
		} else {
			const fontLoader = document.fonts || new FontFaceSet()
			fontLoader.load().then(() => { this.updateActiveItem() })
		}
	}

	resize() {
		const resizeObserver = new ResizeObserver(this.updateActiveItem)
		resizeObserver.observe(this.nav)
	}

	listeners() {
		this.nav.addEventListener('click', this.updateActiveItem)
		this.nav.addEventListener('mouseleave', this.updateActiveItem)
		this.navItems.forEach(item => item.addEventListener('mouseenter', () => this.offset(item)))

		document.body.addEventListener('click', (e) => {
			if (e.target.tagName === 'A') {
				setTimeout(() => { this.updateActiveItem() }, 550)
			}
		})
	}
}