import Popup from "./Popup.js"

export default class PopupWithForm extends Popup{
  constructor({ formSelector, handleFormSubmit }, popupSelector){
    super(popupSelector);
    this._formSelector = formSelector;
    this._handleFormSubmit = handleFormSubmit;
    // this._formElement = this._formSelector;
    this._form = this._popupWin.querySelector('.popup__container') 
    // this._formElement = formSelector.querySelector(this._formSelector);
    // this._buttonElement = ".popup__save";
  }
  _getInputValues(){
    const inputs = [...this._form.querySelectorAll('.popup__input')]
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }
  setEventListeners(){
    super.setEventListeners();
    this._formSelector.addEventListener("submit",() => {
      this._handleFormSubmit(this._getInputValues())
    });
    // this._inputList = this._formElement.querySelectorAll(".popup__input");
  }
  close(){
    super.close();
    this._form.reset();
  }
}