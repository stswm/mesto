import '../pages/index.css';
import { FormValidator } from "./FormValidator.js";
import  Card  from "./Card.js";
import {
  defaultCards,
  editProfileForm,
  addCardForm,
  inputProfileName,
  inputProfileAbout,
  inputCardName,
  inputCardLink,
  editProfileBtn,
  addCardBtn,
  closePreviewBtn,
  btnSaveAddCard,
  currentName,
  currentAbout,
  list,
  validationParams,
} from "./constans.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import PopupWithImage from './PopupWithImage.js';
import Section from "./Section.js";

// todo now in progress
let cardList;

const popupWithImage = new PopupWithImage();

//todo end progressing 
//todo тут я начал сходить с ума
// const card = new Card(
//   {name: inputCardName.value,
  // link: inputCardLink.value});
let newCard = new Card (
  { name: inputCardName.value,
    link: inputCardLink.value }
  );
//todo конец безумия
// экземпляр профиля
const userInfo = new UserInfo(currentName,currentAbout);
// валидация формы редактирования профиля
const profileEditValid = new FormValidator(validationParams, editProfileForm);
profileEditValid.enableValidation();

// валидация формыдобавления карточки
const addCardValid = new FormValidator(validationParams, addCardForm);
addCardValid.enableValidation();

// инициализация карточек
initialCards(defaultCards);

//! класс изменения профиля popup
const editProfile = new PopupWithForm(
  {
    formSelector: editProfileForm,
    handleFormSubmit: (e) => {
      e.preventDefault();
      userInfo.setUserInfo({ 
        name:inputProfileName.value,
        about:inputProfileAbout.value
      });
      editProfile.close();
    },
  },
  ".popup_type_edit"
);
editProfile.setEventListeners();
//! класс попап добавления карточки
const addCard = new PopupWithForm(
  {
    formSelector: addCardForm,
    handleFormSubmit: (e) => {
    e.preventDefault();
    // console.log(inputCardName.value);
    newCard.name = inputCardName.value
    newCard.link = inputCardLink.value
    renderCard(newCard);
    // defaultCards.addItem(newCard)
    addCard.close();
    addCardForm.reset();
    },
  },
  ".popup_type_add-card"
);
addCard.setEventListeners();



editProfileBtn.addEventListener("click", () => {
  const test = userInfo.getUserInfo();
  inputProfileName.value = test.name;
  inputProfileAbout.value = test.about;
  editProfile.open();
});
addCardBtn.addEventListener("click", () => {
  addCardForm.reset();
  const resetBtn = new FormValidator();
  resetBtn._resetAddCardBtn(btnSaveAddCard);
  addCard.open();
  // const cardElement = card.createCard();
  // cardList.addItem(cardElement);
});

function renderCard(data) {
  const card = new Card(
    data,
    () => popupWithImage.open(data)
    );
  const cardElement = card.createCard();
  cardList.addItem(cardElement);
}


function initialCards(defaultCards) {
  defaultCards.reverse();
  // Рендер массива начальных карточек
  cardList = new Section(
    {
      data: defaultCards,
      renderer: (card) => renderCard(card),
    },
    list
  );
  cardList.renderItems();
}

closePreviewBtn.addEventListener("click", () => {
  popupWithImage.close()
});

