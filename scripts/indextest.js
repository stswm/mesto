const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
// modal
const editModal = document.querySelector(".popup_type_edit");
const addCardModal = document.querySelector(".popup_type_add-card");

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

const currentName = document.querySelector(".profile__name");
const currentAbout = document.querySelector(".profile__about");

const nameInput = editForm.querySelector(".popup__input_type_name");
const aboutInput = editForm.querySelector(".popup__input_type_about");
const hearts = document.querySelectorAll(".element__heart");

const list = document.querySelector(".elements");
const cardTemp = document.querySelector(".cardTemp").content;


//function открытие и закрытие popup
const togglePopup = (popup) =>{
  popup.classList.toggle("popup_opend");
  nameInput.value = currentName.textContent;
  aboutInput.value = currentAbout.textContent;
}
//function закрытие при клике вне popup
function popupCloseOverlay(event) {
  if (event.target === event.currentTarget) {
    editModal.classList.remove("popup_opend");
  }
}

//! блок изменения профиля popup
//open editProfile popup
editProfileBtn.addEventListener("click", () => togglePopup(editModal));
//close editProfile popup
closeEditProfileBtn.addEventListener("click",  () => togglePopup(editModal));
//close editProfile popup при клике вне
editModal.addEventListener("click", popupCloseOverlay);
//! addcard popup
addCardBtn.addEventListener("click", () => togglePopup(addCardModal));
closeAddCardBtn.addEventListener("click", () => togglePopup(addCardModal));

hearts.forEach((heart) => {
  heart.onclick = function () {
    heart.classList.toggle("element__heart_active");
  };
});


//сохранение новых name about
function saveEditProfile(evt) {
  evt.preventDefault();
  console.log('saveProfileBtn =>');
  currentAbout.textContent = aboutInput.value;
  currentName.textContent = nameInput.value;
  togglePopup(editModal);
}
editForm.addEventListener("submit", saveEditProfile);

//function создание новой карточки
function ceateCard(cardData) {
  const cardElement = cardTemp.cloneNode(true);
  const cardImage = cardElement.querySelector(".element__pic");
  const cardTitle = cardElement.querySelector(".element__text");
  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  list.prepend(cardElement);
}
//добавление карточки
initialCards.forEach(ceateCard);

addCardForm.addEventListener("submit",(event) => {
  event.preventDefault();
  ceateCard({
    name: inputCardName.value,
    link: inputCardLink.value,
  });
  console.log('addCardBtn =>');
  togglePopup(addCardModal);
});

