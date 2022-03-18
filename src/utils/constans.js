
const Salekhard = new URL('../img/Salekhard.jpg', import.meta.url);
const Sochi = new URL('../img/Sochi.jpg', import.meta.url);
const Kras = new URL('../img/Kras.jpg', import.meta.url);
const Kazan = new URL('../img/Kazan.jpg', import.meta.url);
const SaintP = new URL('../img/SaintP.jpg', import.meta.url);
const Moscow = new URL('../img/Moscow.jpg', import.meta.url);

export let defaultCards = [
  {
    name: "Москва",
    link: Moscow,
  },
  {
    name: "Санкт-Петербург",
    link: SaintP,
  },
  {
    name: "Казань",
    link: Kazan,
  },
  {
    name: "Краснодар",
    link: Kras,
  },
  {
    name: "Сочи",
    link: Sochi,
  },
  {
    name: "Салехард",
    link: Salekhard,
  },
];


// modal
export const editModal = document.querySelector(".popup_type_edit");
export const addCardModal = document.querySelector(".popup_type_add-card");
export const previewModal = document.querySelector(".preview_pop");
export const newAvatarModal = document.querySelector(".popup_type_edit-avatar");
//forms
export const editProfileForm = editModal.querySelector(".popup__container");
export const addCardForm = addCardModal.querySelector(".popup__container");
export const newAvatarform = newAvatarModal.querySelector(".popup__container")
//input
export const inputProfileName = document.querySelector(
  ".popup__input_type_name"
);
export const inputProfileAbout = document.querySelector(
  ".popup__input_type_about"
);
export const inputAvatar = document.querySelector(".popup__input_avatar");
export const inputCardName = document.querySelector(".popup__input_card-name");
export const inputCardLink = document.querySelector(".popup__input_card-link");
//btn
export const editProfileBtn = document.querySelector(".profile__edit-button");
export const addCardBtn = document.querySelector(".profile__add-button");
export const editAvatarBtn =  document.querySelector(".profile__avatar_edit_button");
export const closeEditProfileBtn = editModal.querySelector(".popup__close");
export const closeAddCardBtn = addCardModal.querySelector(".popup__close");
export const closePreviewBtn = previewModal.querySelector(".popup__close");

export const btnSaveAddCard = addCardModal.querySelector(".popup__save_add");
export const btnSaveEdit = editModal.querySelector(".popup__save_edit");
export const btnSaveAva = newAvatarModal.querySelector(".popup__save_avatar");

export const currentName = document.querySelector(".profile__name");
export const currentAbout = document.querySelector(".profile__about");
export const currentAvatar = document.querySelector(".profile__avatar");


export const cardTemplateSelector = ".cardTemp";
export const cardTemp = document.querySelector(".cardTemp").content;
export const list = ".elements";

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
