import { Popup } from "./Popup.js";
export class PopupConfirm extends Popup {
  constructor(handleFormSubmit, popupSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupWin.querySelector(".popup__container");
    this._oldText = this._form.querySelector(".popup__save").textContent
  }
  changeSubmitHandler(newSubmitHandler){
    this._handleFormSubmit = newSubmitHandler
  }
  dataLoading(isLoading) {
    if (isLoading) {
      this._form.querySelector(".popup__save").textContent = "Сохраняем...";
    } else {
      this._form.querySelector(".popup__save").textContent = this._oldText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleFormSubmit();
    });
  }
}
