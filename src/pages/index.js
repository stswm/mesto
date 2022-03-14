import './index.css';
import FormValidator from "../scripts/FormValidator.js";
import  Card  from "../scripts/Card.js";
import {
  defaultCards,
  editProfileForm,
  addCardForm,
  inputProfileName,
  inputProfileAbout,
  editProfileBtn,
  addCardBtn,
  currentName,
  currentAbout,
  list,
  validationParams,
  cardTemplateSelector,
} from "../scripts/constans.js";
import PopupWithForm from "../scripts/PopupWithForm";
import UserInfo from "../scripts/UserInfo";
import { PopupWithImage } from '../scripts/PopupWithImage';
import { Section} from "../scripts/Section.js";

let cardList = new Section({
    data: defaultCards.reverse(),
    renderer: renderCard,
  }, list);

// валидация формы редактирования профиля
const profileEditValid = new FormValidator(validationParams, editProfileForm);
profileEditValid.enableValidation();
// валидация формыдобавления карточки
const addCardValid = new FormValidator(validationParams, addCardForm);
addCardValid.enableValidation();

// экземпляр профиля
const userInfo = new UserInfo(currentName,currentAbout);

// попапк картинки
const popupWithImage = new PopupWithImage(".preview_pop");
popupWithImage.setEventListeners();
// класс изменения профиля popup
const editProfile = new PopupWithForm(
  {
    formSelector: editProfileForm,
    handleFormSubmit: (data) => {
      userInfo.setUserInfo(data);
      editProfile.close();
    },
  },
  ".popup_type_edit"
);
editProfile.setEventListeners();
// класс попап добавления карточки
const addCard = new PopupWithForm(
  {
    formSelector: addCardForm,
    handleFormSubmit: (data) => {
      renderCard(data);
      addCard.close();
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
  addCardValid.resetValidation()
  addCard.open();
});
editProfileBtn.addEventListener("click", () => {
  profileEditValid.resetValidation()
  editProfile.open();
});

function createCard(data) {
  const card = new Card(
    data,
    () => popupWithImage.open(data),
    cardTemplateSelector
  );

  return card.createCard()
}

function renderCard(data) {
  const cardElement = createCard(data)
  cardList.addItem(cardElement);
}

// инициализация карточек
cardList.renderItems();
