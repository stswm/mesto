import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor() {
    super(".preview_pop");
  }
  open(data) {
    super.open();
    this._popupImage = this._popupWin.querySelector(".preview__img");
    this._popupImageTitle = this._popupWin.querySelector(".preview__caption");
    this._popupImage.src = data.link;
    this._popupImage.alt = data.name;
    this._popupImageTitle.textContent = data.name;
  }
}