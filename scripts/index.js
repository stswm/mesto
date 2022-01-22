const initialCards = [
  {
    name: "Салехард",
    link: "./img/Salekhard.jpg",
  },
  {
    name: "Сочи",
    link: "./img/Sochi.jpg",
  },
  {
    name: "Краснодар",
    link: "./img/Kras.jpg",
  },
  {
    name: "Казань",
    link: "./img/Kazan.jpg",
  },
  {
    name: "Санкт-Петербург",
    link: "./img/SaintP.jpg",
  },
  {
    name: "Москва",
    link: "./img/Moscow.jpg",
  },
];
// modal
const editModal = document.querySelector(".popup_type_edit");
const addCardModal = document.querySelector(".popup_type_add-card");
const previewModal = document.querySelector(".preview");

//forms
const editForm = editModal.querySelector(".popup__container");
const addCardForm = addCardModal.querySelector(".popup__container");

//input
const inputProfileName = document.querySelector(".popup__input_type_name");
const inputProfileAbout = document.querySelector(".popup__input_type_about");
const inputCardName = document.querySelector(".popup__input_card-name");
const inputCardLink = document.querySelector(".popup__input_card-link");

//btn
const editProfileBtn = document.querySelector(".profile__edit-button");
const closeEditProfileBtn = editModal.querySelector(".popup__close");
const addCardBtn = document.querySelector(".profile__add-button");
const closeAddCardBtn = addCardModal.querySelector(".popup__close");
const closePreviewBtn = previewModal.querySelector(".popup__close");

const currentName = document.querySelector(".profile__name");
const currentAbout = document.querySelector(".profile__about");

const cardTemp = document.querySelector(".cardTemp").content;
const list = document.querySelector(".elements");

const previewImg = previewModal.querySelector(".preview__img");
const previewCaption = previewModal.querySelector(".preview__caption");

function closePopup(popup) {
  popup.classList.remove("popup_opend");
  document.removeEventListener("keydown", closeOverlay);
}
const openPopup = (popup) => {
  popup.classList.add("popup_opend");
  document.addEventListener("keydown", closeOverlay);
};

//function закрытие при клике вне popup
function popupCloseOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

function closeOverlay(evt) {
  if (evt.key === "Escape") {
    const opendOverlay = document.querySelector(".popup_opend");
    closePopup(opendOverlay);
  }
}

//! блок изменения профиля popup
//open editProfile popup
editProfileBtn.addEventListener("click", () => {
  openPopup(editModal);
  inputProfileName.value = currentName.textContent;
  inputProfileAbout.value = currentAbout.textContent;
});
//close editProfile popup
closeEditProfileBtn.addEventListener("click", () => closePopup(editModal));
//close  popup при клике вне
editModal.addEventListener("mousedown", popupCloseOverlay);
addCardModal.addEventListener("mousedown", popupCloseOverlay);
previewModal.addEventListener("mousedown", popupCloseOverlay);
//! addcard popup
addCardBtn.addEventListener("click", () => openPopup(addCardModal));
closeAddCardBtn.addEventListener("click", () => closePopup(addCardModal));

closePreviewBtn.addEventListener("click", () => closePopup(previewModal));

function preview(evt) {
  openPopup(previewModal);
  previewImg.src = evt.target.src;
  previewImg.alt = evt.target.alt;
  previewCaption.textContent = evt.target.nextElementSibling.textContent;
}

function placeCard(cardElement) {
  list.prepend(cardElement);
}

function createCard(data) {
  const cardElement = cardTemp.cloneNode(true);
  cardElement.querySelector(".element__pic").src = data.link;
  cardElement.querySelector(".element__pic").alt = data.name;
  cardElement.querySelector(".element__text").textContent = data.name;
  const cardImage = cardElement.querySelector(".element__pic");

  const deleteBtn = cardElement.querySelector(".element__delete");
  const likeBtn = cardElement.querySelector(".element__heart");

  deleteBtn.addEventListener("click", deleteHandler);
  likeBtn.addEventListener("click", like);
  cardImage.addEventListener("click", preview);

  return cardElement;
}
function renderCard(data) {
  const newCard = createCard(data);
  list.prepend(newCard);
}

initialCards.forEach((cardData) => {
  renderCard(cardData);
});

addCardForm.addEventListener("submit", () => {
  const newCard = { name: inputCardName.value, link: inputCardLink.value };
renderCard(newCard);
});

function like(e) {
  e.target.classList.toggle("element__heart_active");
}
function deleteHandler(e) {
  e.target.closest(".element").remove();
}
function imagePreview(e) {
  e.addEventListener("click", () => openPopup(previewModal));
}

editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  currentAbout.textContent = inputProfileAbout.value;
  currentName.textContent = inputProfileName.value;
  closePopup(editModal);
});

addCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  createCard({
    name: inputCardName.value,
    link: inputCardLink.value,
  });
  addCardForm.reset();
  closePopup(addCardModal);
});
