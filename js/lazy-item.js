const lazyLoadItems = document.querySelectorAll(".lazy-item");

const all_lazy = () => {

	setTimeout(() => {
		lazyLoadItems.forEach(el => {
			el.setAttribute('src', el.getAttribute('data-src'));
		})
	}, 4100)

};

window.addEventListener("load", all_lazy, { once: true });
