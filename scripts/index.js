const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");
const defaultName = document.querySelector(".profile__name");
const popupName = document.querySelector(".popup__input_type_name");
const defaultAbout = document.querySelector(".profile__about");
const popupAbout = document.querySelector(".popup__input_type_about");
const formElement = document.querySelector(".popup__container");
const nameInput = formElement.querySelector(".popup__input_type_name");
const aboutInput = formElement.querySelector(".popup__input_type_about");
const hearts = document.querySelectorAll(".element__heart");

function togglePopup() {
  popup.classList.toggle("popup_opend");
  nameInput.value = defaultName.textContent;
  aboutInput.value = defaultAbout.textContent;
  // console.log('q');
}

function popupCloseOverlay(event) {
  if (event.target === event.currentTarget) {
    popup.classList.remove("popup_opend");
    nameInput.value = defaultName.textContent;
    aboutInput.value = defaultAbout.textContent;
    
  }
  // console.log('w');
}

popupOpenButton.addEventListener("click", togglePopup);
popupCloseButton.addEventListener("click", togglePopup);

popup.addEventListener("click", popupCloseOverlay);

hearts.forEach((heart) => {
  heart.onclick = function () {
    heart.classList.toggle("element__heart_active");
  };
});

// popupName.value = defaultName.textContent;
// popupAbout.value = defaultAbout.textContent;

function formSubmitHandler(evt) {
  evt.preventDefault();
  defaultAbout.textContent = aboutInput.value;
  defaultName.textContent = nameInput.value;
  togglePopup();
}
formElement.addEventListener("submit", formSubmitHandler);
