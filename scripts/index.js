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

const btnSaveAddCard = addCardModal.querySelector(".popup__save_add");

const currentName = document.querySelector(".profile__name");
const currentAbout = document.querySelector(".profile__about");

const cardTemp = document.querySelector(".cardTemp").content;
const list = document.querySelector(".elements");

const previewImg = previewModal.querySelector(".preview__img");
const previewCaption = previewModal.querySelector(".preview__caption");

function closePopup(popup) {
  popup.classList.remove("popup_opend");
  document.removeEventListener("keydown", closeOverlayByEsc);
}
function openPopup (popup) {
  popup.classList.add("popup_opend");
  document.addEventListener("keydown", closeOverlayByEsc);
};

//function закрытие при клике вне popup
function popupcloseOverlayByEsc(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

function closeOverlayByEsc(evt) {
  if (evt.key === "Escape") {
    const opendOverlay = document.querySelector(".popup_opend");
    closePopup(opendOverlay);
  }
}
function renderCard(data) {
  const newCard = createCard(data);
  list.prepend(newCard);
}

function preview(evt) {
  previewImg.src = evt.target.src;
  previewImg.alt = evt.target.alt;
  previewCaption.textContent = evt.target.nextElementSibling.textContent;
  openPopup(previewModal);
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

function like(e) {
  e.target.classList.toggle("element__heart_active");
}
function deleteHandler(e) {
  e.target.closest(".element").remove();
}
function imagePreview(e) {
  e.addEventListener("click", () => openPopup(previewModal));
}


//! Сброс кнопки в addcard перед открытием
function resetAddCardBtn(btnSaveAddCard) {
  btnSaveAddCard.classList.add("popup__save_notvalid");
  btnSaveAddCard.setAttribute("disabled", true);
}

//! блок изменения профиля popup
//open editProfile popup
editProfileBtn.addEventListener("click",fillingEditPopup)
function fillingEditPopup() {
  inputProfileName.value = currentName.textContent;
  inputProfileAbout.value = currentAbout.textContent;
  openPopup(editModal);
};
//close editProfile popup
closeEditProfileBtn.addEventListener("click", () => closePopup(editModal));
//close  popup при клике вне
editModal.addEventListener("mousedown", popupcloseOverlayByEsc);
addCardModal.addEventListener("mousedown", popupcloseOverlayByEsc);
previewModal.addEventListener("mousedown", popupcloseOverlayByEsc);
//! addcard popup
addCardBtn.addEventListener("click", () => {
  addCardForm.reset();
  resetAddCardBtn(btnSaveAddCard);
  openPopup(addCardModal);
});
closeAddCardBtn.addEventListener("click", () => closePopup(addCardModal));

closePreviewBtn.addEventListener("click", () => {closePopup(previewModal)});

initialCards.forEach((cardData) => {
  renderCard(cardData);
});

addCardForm.addEventListener("submit", (e) => {
  const newCard = { name: inputCardName.value, link: inputCardLink.value };
  e.preventDefault();
  createCard({
    name: inputCardName.value,
    link: inputCardLink.value,
  });
  closePopup(addCardModal);
  addCardForm.reset();
  renderCard(newCard);
});


editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  currentAbout.textContent = inputProfileAbout.value;
  currentName.textContent = inputProfileName.value;
  closePopup(editModal);
});

// addCardForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   createCard({
//     name: inputCardName.value,
//     link: inputCardLink.value,
//   });
//   closePopup(addCardModal);
//   addCardForm.reset();
// });
