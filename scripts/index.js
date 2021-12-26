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

const inputCardName = document.querySelector(".popup__input_card-name");
const inputCardLink = document.querySelector(".popup__input_card-link");

//btn
const editProfileBtn = document.querySelector(".profile__edit-button");
const closeEditProfileBtn = editModal.querySelector(".popup__close");

const addCardBtn = document.querySelector(".profile__add-button");
const closeAddCardBtn = addCardModal.querySelector(".popup__close");

const list = document.querySelector(".elements");
const cardTemp = document.querySelector(".cardTemp").content;















const toggleModal = (modal) => {
  modal.classList.toggle("popup_opend");
};

editProfileBtn.addEventListener("click", () => toggleModal(editModal));
closeEditProfileBtn.addEventListener("click", () => toggleModal(editModal));

addCardBtn.addEventListener("click", () => toggleModal(addCardModal));
closeAddCardBtn.addEventListener("click", () => toggleModal(addCardModal));

// addCardForm.addEventListener("submit", (evt) => {
//   evt.preventDefault();
//   evt.preventDefault();
//   const nameValue = inputCardName.value;
//   const linkValue = inputCardLink.value;
//   const obj = {
//     name: nameValue,
//     link: linkValue,
//   };
//   ceateCard(obj);
// });

const test = (evt) => {
  evt.preventDefault();
  const nameValue = inputCardName.value;
  const linkValue = inputCardLink.value;
  const obj = {
    name: nameValue,
    link: linkValue,
  };
  ceateCard(obj);
}

addCardForm.addEventListener("submit",test);

function ceateCard(cardData) {
  const cardElement = cardTemp.cloneNode(true);
  const cardImage = cardElement.querySelector(".element__pic");
  const cardTitle = cardElement.querySelector(".element__text");
  cardTitle.textContent = cardData.name;
  cardImage.src = cardData.link;
  list.prepend(cardElement);
}

initialCards.forEach(ceateCard);
