export const initialCards = [
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
export const editModal = document.querySelector(".popup_type_edit");
export const addCardModal = document.querySelector(".popup_type_add-card");
export const previewModal = document.querySelector(".preview");
//forms
export const editForm = editModal.querySelector(".popup__container");
export const addCardForm = addCardModal.querySelector(".popup__container");
//input
export const inputProfileName = document.querySelector(
  ".popup__input_type_name"
);
export const inputProfileAbout = document.querySelector(
  ".popup__input_type_about"
);
export const inputCardName = document.querySelector(".popup__input_card-name");
export const inputCardLink = document.querySelector(".popup__input_card-link");
//btn
export const closeEditProfileBtn = editModal.querySelector(".popup__close");
export const editProfileBtn = document.querySelector(".profile__edit-button");
export const addCardBtn = document.querySelector(".profile__add-button");
export const closeAddCardBtn = addCardModal.querySelector(".popup__close");
export const closePreviewBtn = previewModal.querySelector(".popup__close");

export const btnSaveAddCard = addCardModal.querySelector(".popup__save_add");

export const currentName = document.querySelector(".profile__name");
export const currentAbout = document.querySelector(".profile__about");


export const cardTemplateSelector = ".cardTemp";
export const cardTemp = document.querySelector(".cardTemp").content;
export const list = document.querySelector(".elements");

export const previewImg = previewModal.querySelector(".preview__img");
export const previewCaption = previewModal.querySelector(".preview__caption");

export const validationParams = {
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  errorClass: ".popup__input_error-message",
  inputErrorClass: "popup__input_type_error",
  inactiveButtonClass: "popup__save_notvalid",
  submitButtonSelector: ".popup__save",
};
