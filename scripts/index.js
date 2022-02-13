const popup = document.querySelector('.popup');
const likeIcon = document.querySelector('.galery__like-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const profileEditButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelectorAll('.popup__close-button');
const formElement = document.querySelector('.popup__form_type_edit-profile');
const nameInput = document.querySelector('.popup__input_value_name');
const jobInput = document.querySelector('.popup__input_value_job');
const nameField = document.querySelector('.profile__name');
const jobField = document.querySelector('.profile__subtitle');
const addCardButton = document.querySelector('.profile__add-button');
const cardGroup = document.querySelector('.galery__group');
const templateCard = document.querySelector('.galery__item').content;
const titleInput = document.querySelector('.popup__input_value_title');
const linkInput = document.querySelector('.popup__input_value_link');
const formAddCard = document.querySelector('.popup__form_type_add-card');
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

function popupOpen(popup) {
  popup.classList.add('popup_opened');
}

function popupClose(popup) {
  popup.classList.remove('popup_opened');
}

function openEditProfilePopup() {
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
  popupOpen(popupEditProfile);
}

function openAddCardPopup() {
  popupOpen(popupAddCard);
}

function formSubmitHandler (evt) {
	evt.preventDefault();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  popupClose(popupEditProfile);
}

function render() {
  initialCards.forEach(renderCreateCard);
}

function cardLike(likeIcon) {
  likeIcon.classList.toggle('galery__like-button_active');
}

function createCard(item) {
  const cardItem = templateCard.cloneNode(true);
  const cardImg = cardItem.querySelector('.galery__image');
  cardItem.querySelector('.galery__title').textContent = item.name;
  cardImg.alt = item.name;
  cardImg.src = item.link;
  cardItem.querySelector('.galery__like-button').addEventListener('click', cardLike);
  return cardItem;
}

function renderCreateCard(el) {
  const cardItem = createCard(el);
  cardGroup.appendChild(cardItem);
}

function renderNewCard(el) {
  const cardItem = createCard(el);
  cardGroup.prepend(cardItem);
}

function addNewCard (el) {
  el.preventDefault();
  const cardName = el.target.querySelector('.popup__input_value_title').value;
  const cardLink = el.target.querySelector('.popup__input_value_link').value;
  const item = {
    name: cardName,
    link: cardLink
  }
  renderNewCard(item);
}

popupCloseButton.forEach( btn => {
  btn.addEventListener('click', function () {
    popupClose(btn.closest('.popup'))
  })
});

formElement.addEventListener('submit', formSubmitHandler);
profileEditButton.addEventListener('click', openEditProfilePopup);
addCardButton.addEventListener('click', openAddCardPopup);
formAddCard.addEventListener('submit', addNewCard);

render();
