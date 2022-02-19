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


//function закрытие при клике вне popup
function popupcloseOverlayByEsc(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}




// //! Сброс кнопки в addcard перед открытием
// function resetAddCardBtn(btnSaveAddCard) {
//   btnSaveAddCard.classList.add("popup__save_notvalid");
//   btnSaveAddCard.setAttribute("disabled", true);
// }

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
  // resetAddCardBtn(btnSaveAddCard);
  const resetBtn = new FormValidator();
  resetBtn._resetAddCardBtn(btnSaveAddCard);
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
