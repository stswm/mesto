import { previewModal, previewImg, previewCaption, cardTemplateSelector } from "./constans.js";

export default class Card {
  constructor({name, link}, handleCardClick) {
    this._name = name;
    this._link = link;
    this._template = this._getTemplate;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate = () => {
    const template = document.querySelector(cardTemplateSelector).content.querySelector('.element');
    return template
  }
  _deleteHandler = () => {
    this._cardElement.remove();
  };
  _like = () => {
    this._likeBtn.classList.toggle("element__heart_active");
  };
  _preview = () => {
    previewImg.src = this._link;
    previewImg.alt = this._name;
    previewCaption.textContent = this._name;
    openPopup(previewModal);
  };
  _setEventListeners = () => {
    this._likeBtn.addEventListener("click", this._like);
    this._deleteBtn.addEventListener("click", this._deleteHandler);
    this._cardImage.addEventListener("click", () => {this._handleCardClick()});
  };

  _fillCard = () => {
    this._cardElement.querySelector(".element__pic").src = this._link;
    this._cardElement.querySelector(".element__pic").alt = this._name;
    this._cardElement.querySelector(".element__text").textContent = this._name;
  };

  createCard = () => {
    this._cardElement = this._getTemplate().cloneNode(true);
    this._deleteBtn = this._cardElement.querySelector(".element__delete");
    this._cardImage = this._cardElement.querySelector(".element__pic");
    this._likeBtn = this._cardElement.querySelector(".element__heart");

    this._fillCard();
    this._setEventListeners();
    return this._cardElement;
  };
}
