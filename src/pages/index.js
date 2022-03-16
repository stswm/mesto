import './index.css';
import { FormValidator } from "../components/FormValidator.js";
import  { Card }  from "../components/Card.js";
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
} from "../utils/constans.js";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo";
import { PopupWithImage } from '../components/PopupWithImage';
import { Section} from "../components/Section.js";

const cardList = new Section({
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
  profileEditValid.resetValidation()
  
  editProfile.open();
});

addCardBtn.addEventListener("click", () => {
  addCardValid.resetValidation()
  addCard.open();
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
