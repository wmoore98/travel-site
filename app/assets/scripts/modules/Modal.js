import $ from "jquery";

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");
		this.events();
	}

	events() {
		var that = this;
		// click the open modal button
		this.openModalButton.click(this.openModal.bind(this));

		// click the x to close modal
		this.closeModalButton.click(this.closeModal.bind(this));

		// a key was pressed
		$(document).keyup(this.keyPressHandler.bind(this));

	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass("modal--is-visible");
		return false;

	}

	closeModal() {
		this.modal.removeClass("modal--is-visible");

	}

}

export default Modal;