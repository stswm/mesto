import './index.css';
import FormValidator from "../scripts/FormValidator.js";
import  Card  from "../scripts/Card.js";
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
  cardTemplateSelector,
  previewModal,
  addCardModal,
  editModal,
  
} from "../scripts/constans.js";
import PopupWithForm from "../scripts/PopupWithForm";
import UserInfo from "../scripts/UserInfo";
import { PopupWithImage } from '../scripts/PopupWithImage';
import { Section} from "../scripts/Section.js";

let cardList;

const popupWithImage = new PopupWithImage(".preview_pop");
popupWithImage.setEventListeners();

let newCard = new Card (                  //!NEED FIX (delete) IT
  { name: inputCardName.value,
    link: inputCardLink.value }
  );
// экземпляр профиля
const userInfo = new UserInfo(currentName,currentAbout);
// валидация формы редактирования профиля
const profileEditValid = new FormValidator(validationParams, editProfileForm);
profileEditValid.enableValidation();

// валидация формыдобавления карточки
const addCardValid = new FormValidator(validationParams, addCardForm);
addCardValid.enableValidation();

// инициализация карточек
//todo 
initialCards(defaultCards);

//! класс изменения профиля popup
const editProfile = new PopupWithForm(
  {
    formSelector: editProfileForm,
    handleFormSubmit: (e) => {
      // e.preventDefault();
      userInfo.setUserInfo({        //!NEED FIX IT
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
    newCard.name = inputCardName.value        //!NEED FIX IT
    newCard.link = inputCardLink.value
    
    renderCard(newCard);
      
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
  disableSaveBtn(btnSaveAddCard)
  addCard.open();
});

function disableSaveBtn(btn){
  btn.classList.add("popup__save_notvalid");
  btn.setAttribute("disabled", true);
};

// function cardCreate(data) {
//   const cardNew = new Card (
//     data,
//     () => popupWithImage.open(data),
//     cardTemplateSelector
//   );

//   return cardNew
// }
// function renderCard(data) {             
//   const cardNew = cardCreate(data);
//   cardList.addItem(cardNew);
// }
//todoworced
function renderCard(data) {             //!NEED FIX IT
  const card = new Card(
    data,
    () => popupWithImage.open(data),
    cardTemplateSelector
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

