export class Card {
  constructor(data,
    handleCardClick,
    cardTemplateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._cardTemplateSelector = cardTemplateSelector
    // this._template = this._getTemplate;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate = () => {
    const template = document
    .querySelector(this._cardTemplateSelector)
    .content.querySelector('.element')
    .cloneNode(true);
    return template
  }
  _deleteHandler = () => {
    this._cardElement.remove();
  };
  _like = () => {
    this._likeBtn.classList.toggle("element__heart_active");
  };

  _setEventListeners = () => {
    this._likeBtn.addEventListener("click", this._like);
    this._deleteBtn.addEventListener("click", this._deleteHandler);
    this._cardImage.addEventListener("click", () => this._handleCardClick());
  };

  _fillCard = () => {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardElement.querySelector(".element__text").textContent = this._name;
  };

  createCard = () => {
    this._cardElement = this._getTemplate();
    this._deleteBtn = this._cardElement.querySelector(".element__delete");
    this._cardImage = this._cardElement.querySelector(".element__pic");
    this._likeBtn = this._cardElement.querySelector(".element__heart");

    this._fillCard();
    this._setEventListeners();
    return this._cardElement;
  };
}
