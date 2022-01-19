let profileEditButton = document.querySelector(".profile__edit-button");
let popupCloseButton = document.querySelector(".popup__close-button");
let popupSaveButton = document.querySelector(".popup__submit-button");

function openPopup(event) {
  event.preventDefault();
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

profileEditButton.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);

// Находим форму в DOM
let formElement = document.querySelector(".popup__container");
let nameInput = document.getElementById("first-name");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");
let jobInput = document.getElementById("prof");
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);
popupSaveButton.addEventListener("click", closePopup);

popup.addEventListener("click", function (event) {
  if (event.defaultPrevented) {
    closePopup();
  }
});
popup.addEventListener("click", function (e) {
  e.preventDefault();
});
