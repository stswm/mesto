export default class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
  }

  _validateInput(input, classes) {
    const errorContainer = this._form.querySelector(`#error_${input.id}`);

    if (input.validity.valid) {
      this._hideError(input, errorContainer, classes);
    } else {
      this._showError(input, errorContainer, classes);
    }
    this._toggleButton(this._form.form, classes);
  }

  _resetAddCardBtn = (btnSaveAddCard) => {
    btnSaveAddCard.classList.add("popup__save_notvalid");
    btnSaveAddCard.setAttribute("disabled", true);
  };


  _showError(input, errorContainer) {
    input.classList.add(this._settings.inputErrorClass);
    errorContainer.style.visibility = "";
    errorContainer.textContent = input.validationMessage;
  }
  _hideError(input, errorContainer) {
    input.classList.remove(this._settings.inputErrorClass);
    errorContainer.style.visibility = "hidden";
    errorContainer.textContent = "";
  }

  _toggleButton() {
    const button = this._form.querySelector(
      this._settings.submitButtonSelector
    );
    const isFormValid = this._form.checkValidity();
    if (isFormValid) {
      button.classList.remove(this._settings.inactiveButtonClass);
      button.removeAttribute("disabled");
    } else {
      button.classList.add(this._settings.inactiveButtonClass);
      button.setAttribute("disabled", true);
    }
  }


  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    this._inputs = this._form.querySelectorAll(this._settings.inputSelector);
    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._validateInput(input);
      });
    });
    this._toggleButton();
  }
}
