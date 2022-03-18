import "./index.css";
import {
  defaultCards,
  editProfileForm,
  addCardForm,
  newAvatarform,
  inputProfileName,
  inputProfileAbout,
  inputAvatar,
  editProfileBtn,
  editAvatarBtn,
  btnSaveAva,
  addCardBtn,
  currentName,
  currentAbout,
  currentAvatar,
  list,
  validationParams,
  cardTemplateSelector,
} from "../utils/constans.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm";
import { UserInfo } from "../components/UserInfo";
import { PopupWithImage } from "../components/PopupWithImage";
import { Section } from "../components/Section.js";
import { api } from "../components/Api.js";

let userId;

//подгружаем профиль
api.getProfile().then((res) => {
  userInfo.setUserInfo({
    name: res.name,
    about: res.about,
    avatar: res.avatar,
  });
  userId = res._id;
});
// подгружаем карточки
api.getInitialCards().then((cardList) => {
  console.log(cardList);
  cardList.forEach((data) => {
    const cardElement = createCard({
      name: data.name,
      link: data.link,
      likes: data.likes,
      id: data._id,
      userId: userId,
      ownerId: data.owner._id,
    });
    section.addItem(cardElement);
  });
});
//наполняем странницу карточками
const section = new Section(
  {
    data: [],
    renderer: renderCard,
  },
  list
);
//валидация формы редактирования аватарки
const avatarEditValid = new FormValidator(validationParams, newAvatarform);
avatarEditValid.enableValidation();
// валидация формы редактирования профиля
const profileEditValid = new FormValidator(validationParams, editProfileForm);
profileEditValid.enableValidation();
// валидация формыдобавления карточки
const addCardValid = new FormValidator(validationParams, addCardForm);
addCardValid.enableValidation();

// экземпляр профиля
const userInfo = new UserInfo(currentName, currentAbout, currentAvatar);

// попапк картинки
const popupWithImage = new PopupWithImage(".preview_pop");
popupWithImage.setEventListeners();
// Меняем профиль
const editProfile = new PopupWithForm((data) => {
  editProfile.dataLoading(true)
  api.editProfile(data.name, data.about, data.avatar).then((res) => {
    userInfo.setUserInfo(res);
    editProfile.close();
  }).finally(()=>{
    editProfile.dataLoading(false)
  })
}, ".popup_type_edit");
editProfile.setEventListeners();
// изменение аватарки

const newAvatarModal = new PopupWithForm((data) => {
  newAvatarModal.dataLoading(true);
  api
    .changeAvatar(data.avatar)
    .then((res) => {
      userInfo.setUserInfo(res);
      newAvatarModal.close();
    })
    .finally(() => {
      newAvatarModal.dataLoading(false);
    });
}, ".popup_type_edit-avatar");

newAvatarModal.setEventListeners();
// класс попап добавления карточки
const addCard = new PopupWithForm((data) => {
  addCard.dataLoading(true);
  api
    .addCard(data.name, data.link, data.likes)
    .then((res) => {
      const cardElement = createCard(res);
      section.addNewCard(cardElement);
      addCard.close();
    })
    .finally(() => {
      addCard.dataLoading(false);
    });
}, ".popup_type_add-card");
addCard.setEventListeners();

// подтверждение удаления карточки
const confirmModal = new PopupWithForm(
  {
    formSelector: document
      .querySelector(".popup_type_delete-confirm")
      .querySelector(".popup__container"),
    //! Олежа не забудь закинуть в constants
  },
  ".popup_type_delete-confirm"
);
confirmModal.setEventListeners();

editProfileBtn.addEventListener("click", () => {
  inputProfileName.value = userInfo.getUserInfo().name;
  inputProfileAbout.value = userInfo.getUserInfo().about;
  profileEditValid.resetValidation();

  editProfile.open();
});
editAvatarBtn.addEventListener("click", () => {
  document.querySelector(".preview__avatar").src =
    userInfo.getUserInfo().avatar.src;
  // inputAvatar.value = userInfo.getUserInfo().avatar.src;
  avatarEditValid.resetValidation();
  newAvatarModal.open();
});
addCardBtn.addEventListener("click", () => {
  addCardValid.resetValidation();
  addCard.open();
});

function createCard(data) {
  const card = new Card(
    data,
    cardTemplateSelector,
    () => popupWithImage.open(data),
    (id) => {
      confirmModal.open();
      confirmModal.changeSubmitHandler(() => {
        confirmModal.dataLoading(true)
        api.deleteCard(id).then((res) => {
          card.deleteCard();
          confirmModal.close();
        })
        .finally(()=>{
          confirmModal.dataLoading(false)
        })
      });
    },
    (_id) => {
      if (card.isLiked()) {
        api.deleteLike(_id).then((res) => {
          card.setLikes(res.likes);
        });
      } else {
        api.addLike(_id).then((res) => {
          card.setLikes(res.likes);
        });
      }
    }
  );
  return card.createCard();
}

function renderCard(data) {
  const cardElement = createCard(data);
  section.addItem(cardElement);
}

// инициализация карточек
section.renderItems();
