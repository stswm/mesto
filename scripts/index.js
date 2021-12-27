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

//function открытие и закрытие popup
// const togglePopup = (popup) => {
//   popup.classList.toggle("popup_opend");
//   inputProfileName.value = currentName.textContent;
//   inputProfileAbout.value = currentAbout.textContent;
// };
function closePopup(popup) {
  popup.classList.remove("popup_opend");
}
const openPopup = (popup) => {
  popup.classList.add("popup_opend");
};

//function закрытие при клике вне popup
function popupCloseOverlay(event) {
  if (event.target === event.currentTarget) {
    editModal.classList.remove("popup_opend");
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
//close editProfile popup при клике вне
editModal.addEventListener("click", popupCloseOverlay);
//! addcard popup
addCardBtn.addEventListener("click", () => openPopup(addCardModal));
closeAddCardBtn.addEventListener("click", () => closePopup(addCardModal));

closePreviewBtn.addEventListener("click", () => closePopup(previewModal));
//function создание новой карточки
function ceateCard(cardData) {
  const cardElement = cardTemp.cloneNode(true);
  const cardImage = cardElement.querySelector(".element__pic");
  const cardTitle = cardElement.querySelector(".element__text");
  const deleteBtn = cardElement.querySelector(".element__delete");
  const likeBtn = cardElement.querySelector(".element__heart");
  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  deleteBtn.addEventListener("click", deleteHandler);
  likeBtn.addEventListener("click", like);
  cardImage.addEventListener("click", preview);
  list.prepend(cardElement);
}
function preview(e) {
  openPopup(previewModal);
  previewImg.src = e.target.src;
  previewImg.alt = e.target.alt;
  previewCaption.textContent = e.target.nextElementSibling.textContent;
}

initialCards.forEach(ceateCard);
function like(e) {
  e.target.classList.toggle("element__heart_active");
}
function deleteHandler(e) {
  e.target.closest(".element").remove();
}
function imagePreview(e) {
  console.log("qq");
  e.addEventListener("click", () => openPopup(previewModal));
  //close editProfile popup
  // closeEditProfileBtn.addEventListener("click",  () => togglePopup(editModal));
}

editForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  currentAbout.textContent = inputProfileAbout.value;
  currentName.textContent = inputProfileName.value;
  closePopup(editModal);
});

addCardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  ceateCard({
    name: inputCardName.value,
    link: inputCardLink.value,
  });
  addCardForm.reset();
  closePopup(addCardModal);
});
