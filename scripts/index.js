const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

function togglePopup() {
  popup.classList.toggle("popup_opend");
}

function popupCloseOverlay() {
  if (event.target === event.currentTarget) {
    popup.classList.remove("popup_opend");
  }
}

popupOpenButton.addEventListener("click", togglePopup);
popupCloseButton.addEventListener("click", togglePopup);

popup.addEventListener("click", popupCloseOverlay);
