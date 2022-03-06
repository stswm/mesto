import Popup from "./Popup.js"

export default class PopupWithForm extends Popup{
  constructor({ formSelector, handleFormSubmit }, popupSelector){
    super(popupSelector);
    this._formSelector = formSelector;
    this._handleFormSubmit = handleFormSubmit;
    this._formElement = this._formSelector;
    this._buttonElement = ".popup__save";
  }
  _getInputValues(){
    this._inputList = this._formElement.querySelectorAll(".popup__input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  setEventListeners(){
    super.setEventListeners();
    this._formElement.addEventListener("submit", this._handleFormSubmit);
  }
  _close(){
    super.close();
    this._formElement.reset();
  }
}