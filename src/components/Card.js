export class Card {
  constructor(
    data,
    cardTemplateSelector,
    handleCardClick,
    handleDeleteClick,
    handleLikeClick
  ) {
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleDeleteClick = handleDeleteClick;
    this._handleCardClick = handleCardClick;
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._handleLikeClick = handleLikeClick;
  }
  _getTemplate = () => {
    const template = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".element")
      .cloneNode(true);
    return template;
  };

  deleteCard = () => {
    this._cardElement.remove();
    this._cardElement = null;
  };
  isLiked(){
    const userHasLikedCard = this._likes.find(
      (user) => user._id === this._userId
    );
    return userHasLikedCard
  }
  _fillleLike = () => {
    this._likeBtn.classList.add("element__heart_active");
  };
  _devastateLike = () => {
    this._likeBtn.classList.remove("element__heart_active");
  };

  setLikes(newLikes) {
    this._likes = newLikes;
    const likeCountElement = this._cardElement.querySelector(
      ".element__heart-count"
    );
    likeCountElement.textContent = this._likes.length;
    if (this.isLiked()) {
      this._fillleLike();
    } else{
      this._devastateLike()
    }
  }

  _setEventListeners = () => {
    this._likeBtn.addEventListener("click", () =>
      this._handleLikeClick(this._id)
    );
    this._deleteBtn.addEventListener("click", () =>
      this._handleDeleteClick(this._id)
    );
    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._id)
    );
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
    if (this._ownerId !== this._userId) {
      this._deleteBtn.style.display = "none";
    }


    this.setLikes(this._likes);
    this._fillCard();
    this._setEventListeners();
    return this._cardElement;
  };
}
