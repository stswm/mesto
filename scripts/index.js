const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

function togglePopup() {
  popup.classList.toggle("popup_opend");
  // console.log('q');
}

function popupCloseOverlay(event) {
  if (event.target === event.currentTarget) {
    popup.classList.remove("popup_opend");
  }
  // console.log('w');
}

popupOpenButton.addEventListener("click", togglePopup);
popupCloseButton.addEventListener("click", togglePopup);

popup.addEventListener("click", popupCloseOverlay);

const hearts = document.querySelectorAll(".element__heart");
//
hearts.forEach((heart) => {
  heart.onclick = function () {
    heart.classList.toggle("element__heart_active");
    // heart.classList.toggle("buttonEffect");
  };
});

//Имя попап
const defaultName = document.querySelector(".profile__name");
const popupName = document.querySelector(".popup__name");
popupName.value = defaultName.textContent;
// о себе попап
const defaultAbout = document.querySelector(".profile__about");
const popupAbout = document.querySelector(".popup__about");
popupAbout.value = defaultAbout.textContent;


const formElement = document.querySelector(".popup__container");
const nameInput = formElement.querySelector(".popup__name");
const jobInput = formElement.querySelector(".popup__about");
function formSubmitHandler(evt) {
  evt.preventDefault();
  // Получите значение полей jobInput и nameInput из свойства value
  
  // Выберите элементы, куда должны быть вставлены значения полей
  const defNa = document.querySelector(".profile__name");
  const defAb = document.querySelector(".profile__about");
  // Вставьте новые значения с помощью textContent
  defNa.textContent = nameInput.value;
  defAb.textContent = jobInput.value;
  togglePopup();
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);

// const saveBTN = document.querySelector(".popup__save");
// saveBTN.onclick = function submit(){
//   defaultName.innerHTML = popupName.value;
//   defaultAbout.innerHTML = popupAbout.value;
//   togglePopup();
// }