import { previewModal, previewImg, previewCaption, cardTemplateSelector } from "./constans.js";
import { openPopup } from "./utils.js";

export class Card {
  constructor(data, cardTemplateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._template = document.querySelector(cardTemplateSelector).content;
  }
  _deleteHandler = (e) => {
    e.target.closest(".element").remove();
  }
  _like = () => {
    this._likeBtn.classList.toggle("element__heart_active");
  }
  _preview = () =>  {
    previewImg.src = this._link;
    previewImg.alt = this._name;
    previewCaption.textContent = this._name;
    openPopup(previewModal);
  }
  _setEventListeners = () => {
    this._likeBtn.addEventListener("click", this._like);
    this._deleteBtn.addEventListener("click", this._deleteHandler);
    this._cardImage.addEventListener("click", this._preview);
  }
  _fillCard = () => {
    this._cardElement.querySelector(".element__pic").src = this._link;
    this._cardElement.querySelector(".element__pic").alt = this._name;
    this._cardElement.querySelector(".element__text").textContent = this._name;
  }

  createCard = () =>  {
    // this._cardElement = this._template.cloneNode(true);
    this._cardElement = document.querySelector('.cardTemp').content.cloneNode(true);

    this._deleteBtn = this._cardElement.querySelector(".element__delete");
    this._cardImage = this._cardElement.querySelector(".element__pic");
    this._likeBtn = this._cardElement.querySelector(".element__heart");

    this._fillCard();
    this._setEventListeners();
    return this._cardElement;
  }
}

const cardTemp = document.querySelector(".cardTemp").content;
// const cardTemplateSelector = '.cardTemp';
// const cardIns = new Card({name: '', link: ''},cardTemplateSelector)
// const cardElement = card.createCard()
// list.prepend(cardElement)
