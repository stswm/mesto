export default class Popup{
  constructor(popupSelector){
    // this._popupSelector = popupSelector;
    this._popupWin = document.querySelector(popupSelector);
    this._popupCloseButton = this._popupWin.querySelector(".popup__close");
    
    this._handleOverClose = this._overClose.bind(this);
    this._handleEscClose = this._escClose.bind(this);
    this._handleClose = this.close.bind(this);
  }
  open(){
    document.addEventListener("keydown", this._handleEscClose);
    this._popupWin.classList.add("popup_opend");
  }
  close(){
    this._popupWin.classList.remove("popup_opend");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _escClose(e){
    if (e.key === "Escape") {
      this.close();
    }
  }
  _overClose(e){
    if (e.target === e.currentTarget) {
      this.close();
    }
  }
  setEventListeners(){
    this._popupCloseButton.addEventListener("click", this._handleClose);
    this._popupWin.addEventListener("mousedown", this._handleOverClose);
  }
}