import Popup from "./Popup.js"

export default class PopupWithForm extends Popup{
  constructor({ formSelector, handleFormSubmit }, popupSelector){
    super(popupSelector);
    this._formSelector = formSelector;
    this._handleFormSubmit = handleFormSubmit;
    // this._formElement = this._formSelector;
    // this._formElement = this._popupWin.querySelector('.popup__container') 
    // this._formElement = formSelector.querySelector(this._formSelector);
    // this._buttonElement = ".popup__save";
  }
  _getInputValues(){
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  setEventListeners(){
    super.setEventListeners();
    this._formSelector.addEventListener("submit", this._handleFormSubmit);
    // this._inputList = this._formElement.querySelectorAll(".popup__input");
  }
  close(){
    this._formSelector.reset();
    super.close();
  }
}