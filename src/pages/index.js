import "./index.css";
import {
  editProfileForm,
  addCardForm,
  newAvatarform,
  inputProfileName,
  inputProfileAbout,
  editProfileBtn,
  editAvatarBtn,
  addCardBtn,
  currentName,
  currentAbout,
  currentAvatar,
  avatarPreview,
  list,
  validationParams,
  cardTemplateSelector,
} from "../utils/constans.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { UserInfo } from "../components/UserInfo";
import { PopupWithForm } from "../components/PopupWithForm";
import { PopupWithImage } from "../components/PopupWithImage";
import { PopupConfirm } from "../components/PopupConfirm";
import { Section } from "../components/Section.js";
import { api } from "../components/Api.js";

let userId;

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([userData, cardList]) => {
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about,
      avatar: userData.avatar,
    });
    userId = userData._id;

    renderCards(cardList);
  })
  .catch(console.log);

//подгружаем профиль
// api
//   .getProfile()
//   .then((res) => {
//     userInfo.setUserInfo({
//       name: res.name,
//       about: res.about,
//       avatar: res.avatar,
//     });
//     userId = res._id;
//   })
//   .catch(console.log);
// // подгружаем карточки
// api
//   .getInitialCards()
//   .then((cardList) => {
//     // console.log(cardList);
//     renderCards(cardList);
//     // section.renderItems(cardList)
//   })
//   //! ↓ так выглядела старая подгрузка, удалю после последнего ревью
//   // .then((cardList) => {
//   //   // console.log(cardList);
//   //   cardList.forEach((data) => {
//   //     // console.log(data);
//   //     const cardElement = createCard({
//   //       name: data.name,
//   //       link: data.link,
//   //       likes: data.likes,
//   //       id: data._id,
//   //       userId: userId,
//   //       ownerId: data.owner._id,
//   //     });
//   //     section.addItem(cardElement);
//   //   });
//   // })
//   //! ↑ конец старой подгрузки
//   .catch(console.log);

//   const test = new Section({
//     renderer: (data) => {
//       test.addItem(createCard(data));
//     }
//   }, ...
// );

// api.getCard()
//   .then(res => {
//       test.renderItems(res);
//    })

function renderCards(cards) {
  let List = new Section(
    {
      data: cards,
      renderer: renderCard,
    },
    list
  );
  List.renderItems();
}

//наполняем странницу карточками
let section = new Section(
  {
    data: [],
    renderer: (data) => {
      section.addItem(createCard(data));
    },
  },
  list
);
// //наполняем странницу карточками
// let section = new Section(
//   {
//     data: [],
//     renderer: renderCard,
//   },
//   list
// );
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
  editProfile.dataLoading(true);
  api
    .editProfile(data.name, data.about, data.avatar)
    .then((res) => {
      userInfo.setUserInfo(res);
      editProfile.close();
    })
    .catch(console.log)
    .finally(() => {
      editProfile.dataLoading(false);
    });
}, ".popup_type_edit");
editProfile.setEventListeners();
// изменение аватарки

const newAvatarModal = new PopupWithForm((data) => {
  // newAvatarModal.dataLoading(true);
  newAvatarModal.changeButtonsIfLoading(true);
  api
    .changeAvatar(data.avatar)
    .then((res) => {
      userInfo.setUserInfo(res);
      newAvatarModal.close();
    })
    .catch(console.log)
    .finally(() => {
      // newAvatarModal.dataLoading(false);
      newAvatarModal.changeButtonsIfLoading(false);
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
    .catch(console.log)
    .finally(() => {
      addCard.dataLoading(false);
    });
}, ".popup_type_add-card");
addCard.setEventListeners();

// подтверждение удаления карточки
const confirmModal = new PopupConfirm(
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
  avatarPreview.src = userInfo.getUserInfo().avatar.src;
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
        confirmModal.dataLoading(true);
        api
          .deleteCard(id)
          .then(() => {
            card.deleteCard();
            confirmModal.close();
          })
          .catch(console.log)
          .finally(() => {
            confirmModal.dataLoading(false);
          });
      });
    },
    (id) => {
      if (card.isLiked()) {
        api
          .deleteLike(id)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch(console.log);
      } else {
        api
          .addLike(id)
          .then((res) => {
            card.setLikes(res.likes);
          })
          .catch(console.log);
      }
    }
  );
  return card.createCard();
}

function renderCard(data) {
  const cardElement = createCard({
    name: data.name,
    link: data.link,
    likes: data.likes,
    _id: data._id,
    userId: userId,
    ownerId: data.owner._id,
  });
  section.addItem(cardElement);
}

// инициализация карточек
// section.renderItems();
