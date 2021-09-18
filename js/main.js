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
const closeModalBgs = document.querySelectorAll(".modal-form__bg");
closeModalBgs.forEach((e) => {
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
const closeModalButtons = document.querySelectorAll(".modal-form__close-button");
closeModalButtons.forEach((e) => {
	e.addEventListener("click", () => {
		const currentModal = e.parentElement.parentElement;
		setTimeout(() => {
			currentModal.classList.remove("modal-form--open");
			currentModal.classList.remove("modal-form--close");
			document.body.style.overflow = "visible";
		}, 300);
		currentModal.classList.add("modal-form--close");
	});
});


const mainVideo = document.querySelector(".main-screen__video");
const musicButton = document.querySelector(".music-button");

musicButton.addEventListener("click", function () {
	mainVideo.muted = !mainVideo.muted;
	musicButton.classList.toggle('music-button--active')
});



const customSelect = document.querySelector('.custom-select');
const customSelectHead = customSelect.querySelector('.custom-select__head');
const customSelectBody = customSelect.querySelector('.custom-select__body');
const customSelectShortcode = customSelect.querySelector('.custom-select__shortcode');

const customSelectItems = customSelectBody.querySelectorAll('.custom-select__item');

const toggleCustomSelect = () => {
	customSelectHead.classList.toggle('custom-select__head--active');
	customSelectBody.classList.toggle('custom-select__body--active');
}

customSelectHead.addEventListener('click', toggleCustomSelect)

customSelectItems.forEach(item => {
	item.addEventListener('click', () => {
		let shortcode = item.getAttribute('data-shortcode');
		customSelectShortcode.value = shortcode;
		toggleCustomSelect();
	})
})