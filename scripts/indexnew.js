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

const cardTemp = document.querySelector(".cardTemp").content;
const list = document.querySelector(".elements");


//function открытие и закрытие popup
const togglePopup = (popup) =>{
  popup.classList.toggle("popup_opend");
  inputProfileName.value = currentName.textContent;
  inputProfileAbout.value = currentAbout.textContent;
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


//function создание новой карточки
function ceateCard(cardData) {
  const cardElement = cardTemp.cloneNode(true);
  const cardImage = cardElement.querySelector(".element__pic");
  const cardTitle = cardElement.querySelector(".element__text");
  const deleteBtn = cardElement.querySelector(".element__delete");
  const likeBtn = cardElement.querySelector(".element__heart");

  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  deleteBtn.addEventListener('click', deleteHandler);
  likeBtn.addEventListener('click', like);

  cardImage.addEventListener('click', imagePreview);


  list.prepend(cardElement);
}
//добавление карточки
initialCards.forEach(ceateCard);
function like(e){
  e.target.classList.toggle("element__heart_active");
}
function deleteHandler(e){
  e.target.closest('.element').remove()
}
function imagePreview(){
  console.log('qq');
};

editForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  currentAbout.textContent = inputProfileAbout.value;
  currentName.textContent = inputProfileName.value;
  togglePopup(editModal);
});


addCardForm.addEventListener("submit",(event) => {
  event.preventDefault();
  ceateCard({
    name: inputCardName.value,
    link: inputCardLink.value,
  });
  togglePopup(addCardModal);
});

