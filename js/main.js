const buyButtons = document.querySelectorAll(".button");
buyButtons.forEach((e) => {
	e.addEventListener("click", () => {
		const currentModalName = e.getAttribute("data-modal-for");
		const currentModal = document.querySelector(
			"[data-modal=" + currentModalName + "]"
		);
		currentModal.classList.add("modal-form--open");
		document.body.style.overflow = "hidden";
	});
});
const closeModalButtons = document.querySelectorAll(".modal-form__bg");
closeModalButtons.forEach((e) => {
	e.addEventListener("click", () => {
		const currentModal = e.parentElement;
		setTimeout(() => {
			currentModal.classList.remove("modal-form--open");
			currentModal.classList.remove("modal-form--close");
			document.body.style.overflow = "visible";
		}, 300);
		currentModal.classList.add("modal-form--close");
	});
});
