export const openPopup = (popup) => {
  popup.classList.add("popup_opend");
  document.addEventListener("keydown", closeOverlayByEsc);
}
export const closeOverlayByEsc = (evt) => {
  if (evt.key === "Escape") {
    const opendOverlay = document.querySelector(".popup_opend");
    closePopup(opendOverlay);
  }
}
export const closePopup = (popup) => {
  popup.classList.remove("popup_opend");
  document.removeEventListener("keydown", closeOverlayByEsc);
}