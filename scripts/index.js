let popupEditProfile = document.querySelector('.popup_type_edit-profile');
let popupAddCard = document.querySelector('.popup_type_add-card');
let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_value_name');
let jobInput = document.querySelector('.popup__input_value_job');
let nameField = document.querySelector('.profile__name');
let jobField = document.querySelector('.profile__subtitle');
let addCardButton = document.querySelector('.profile__add-button');
const cardGroup = document.querySelector('.galery__group');
const templateCard = document.querySelector('.galery__item').content;

function popupOpen(popup) {
  popup.classList.add('popup_opened');
}

function openEditProfilePopup() {
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
  popupOpen(popupEditProfile);
}

function openAddCardPopup() {
  popupOpen(popupAddCard);
}

function popupClose() {
  popupEditProfile.classList.remove('popup_opened');
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
addCardButton.addEventListener('click', popupOpen)

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function render() {
  initialCards.forEach(renderCreateCard);
}

function createCard(item) {
  const cardItem = templateCard.cloneNode(true);
  const cardImg = cardItem.querySelector('.galery__image');
  cardItem.querySelector('.galery__title').textContent = item.name;
  cardImg.alt = item.name;
  cardImg.src = item.link;

  return cardItem;
}

function renderCreateCard(el) {
  cardItem = createCard(el)
  cardGroup.appendChild(cardItem);
}

render();
