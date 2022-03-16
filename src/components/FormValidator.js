export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
    this._button = this._form.querySelector(
      this._settings.submitButtonSelector
    );
  }

  _desableButton() {
    this._button.classList.add(this._settings.inactiveButtonClass);
    this._button.setAttribute("disabled", true);
  }

  resetValidation() {
    this._desableButton()
    
    this._inputs.forEach(input => {
      const errorContainer = this._form.querySelector(`#error_${input.id}`);
      this._hideError(input, errorContainer)
    })
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
    const isFormValid = this._form.checkValidity();
    if (isFormValid) {
      this._button.classList.remove(this._settings.inactiveButtonClass);
      this._button.removeAttribute("disabled");
    } else {
      this._desableButton()
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
