import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import {
  initialCards,
  editModal,
  addCardModal,
  previewModal,
  editForm,
  addCardForm,
  inputProfileName,
  inputProfileAbout,
  inputCardName,
  inputCardLink,
  closeEditProfileBtn,
  editProfileBtn,
  addCardBtn,
  closeAddCardBtn,
  closePreviewBtn,
  btnSaveAddCard,
  currentName,
  currentAbout,
  cardTemplateSelector,
  list,
  validationParams,
} from "./constans.js";
import { openPopup, closePopup } from "./utils.js";

// ? Валидация форм
// todo пофиксить rest

const profileEditValid = new FormValidator(validationParams, editForm);
profileEditValid.enableValidation();
const addCardValid = new FormValidator(validationParams, addCardForm);
addCardValid.enableValidation();

// function openPopup(popup) {
//   popup.classList.add("popup_opend");
//   document.addEventListener("keydown", closeOverlayByEsc);
// }

//function закрытие при клике вне popup
function popupcloseOverlayByEsc(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

// function preview(evt) {
//   previewImg.src = evt.target.src;
//   previewImg.alt = evt.target.alt;
//   previewCaption.textContent = evt.target.nextElementSibling.textContent;
//   openPopup(previewModal);
// }

// function createCard(data) {
//   const cardElement = cardTemp.cloneNode(true);
//   cardElement.querySelector(".element__pic").src = data.link;
//   cardElement.querySelector(".element__pic").alt = data.name;
//   cardElement.querySelector(".element__text").textContent = data.name;
//   const cardImage = cardElement.querySelector(".element__pic");

//   const deleteBtn = cardElement.querySelector(".element__delete");
//   const likeBtn = cardElement.querySelector(".element__heart");

//   deleteBtn.addEventListener("click", deleteHandler);
//   likeBtn.addEventListener("click", like);
//   cardImage.addEventListener("click", preview);

//   return cardElement;
// }

// function like(e) {
//   e.target.classList.toggle("element__heart_active");
// }
// function deleteHandler(e) {
//   e.target.closest(".element").remove();
// }
// function imagePreview(e) {
//   e.addEventListener("click", () => openPopup(previewModal));
// }

//! Сброс кнопки в addcard перед открытием
function resetAddCardBtn(btnSaveAddCard) {
  btnSaveAddCard.classList.add("popup__save_notvalid");
  btnSaveAddCard.setAttribute("disabled", true);
}

//! блок изменения профиля popup
//open editProfile popup
editProfileBtn.addEventListener("click", fillingEditPopup);
function fillingEditPopup() {
  inputProfileName.value = currentName.textContent;
  inputProfileAbout.value = currentAbout.textContent;
  openPopup(editModal);
}
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

closePreviewBtn.addEventListener("click", () => {
  closePopup(previewModal);
});

function renderCard(data) {
  const card = new Card(data, cardTemplateSelector);
  const cardElement = card.createCard();
  // const newCard = createCard(data);
  list.prepend(cardElement);
}
initialCards.forEach((cardData) => {
  renderCard(cardData);
});

addCardForm.addEventListener("submit", (e) => {
  const newCard = { name: inputCardName.value, link: inputCardLink.value };
  e.preventDefault();
  const card = new Card(
    {name: inputCardName.value,
    link: inputCardLink.value,},
    cardTemplateSelector);
  card.createCard();
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
