import { Popup } from "./Popup.js";

export  class PopupWithForm extends Popup {
  constructor( handleFormSubmit, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupWin.querySelector(".popup__container");
    this._inputs = [...this._form.querySelectorAll(".popup__input")];
  }

  _getInputValues() {
    const values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  changeSubmitHandler(newSubmitHandler){
    this._handleFormSubmit = newSubmitHandler
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
