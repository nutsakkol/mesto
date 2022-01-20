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
let nameField = document.getElementById("name");
let jobField = document.getElementById("about");

function formSubmitHandler (evt) {
	evt.preventDefault();

  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;

	// Выберите элементы, куда должны быть вставлены значения полей

	// Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
popupSaveButton.addEventListener("click", closePopup);

let saveForm = document.querySelector(".popup__submit-button");
saveForm.addEventListener("click", popupClose);
