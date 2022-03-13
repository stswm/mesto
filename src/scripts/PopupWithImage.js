import Popup from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popupWin.querySelector(".preview__img");
    this._popupImageTitle = this._popupWin.querySelector(".preview__caption");
  }
  open(data) {
    super.open();

    this._popupImage.src = data.link;
    this._popupImage.alt = data.name;
    this._popupImageTitle.textContent = data.name;
  }
}