let popup = document.querySelector(".popup")
let profileEditButton = document.querySelector(".profile__edit-button");
let popupCloseButton = document.querySelector(".popup__close-button");
let popupSaveButton = document.querySelector(".popup__submit-button");

function popupOpen(event) {
  popup.classList.add("popup_opened");
}

function popupClose() {
  popup.classList.remove("popup_opened");
}

profileEditButton.addEventListener("click", popupOpen);
popupCloseButton.addEventListener("click", popupClose);

let formElement = document.querySelector(".popup__container");
let nameInput = document.querySelector(".popup__name-field");
let jobInput = document.querySelector(".popup__job-field");
let nameField = document.querySelector(".profile__name");
let jobField = document.querySelector(".profile__subtitle");

function formSubmitHandler (evt) {
	evt.preventDefault();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);
popupSaveButton.addEventListener("click", popupClose);
