let popup = document.querySelector('.popup')
let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_value_name');
let jobInput = document.querySelector('.popup__input_value_job');
let nameField = document.querySelector('.profile__name');
let jobField = document.querySelector('.profile__subtitle');

function popupOpen(event) {
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
	evt.preventDefault();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  popupClose();
}

formElement.addEventListener('submit', formSubmitHandler);
profileEditButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);
