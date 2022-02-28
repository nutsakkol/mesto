const popups = document.querySelectorAll('.popup');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupPicZoom = document.querySelector('.popup_type_open-pic');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const profileEditButton = document.querySelector('.profile__edit-button');
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
const viewPic = document.querySelector('.popup__pic-viewer');
const viewPicSub = document.querySelector('.popup__pic-subtitle');
const cardName = document.querySelector('.popup__input_value_title');
const cardLink = document.querySelector('.popup__input_value_link');
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

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function openEditProfilePopup() {
  nameInput.value = nameField.textContent;
  jobInput.value = jobField.textContent;
  openPopup(popupEditProfile);
}

function openAddCardPopup() {
  openPopup(popupAddCard);
}

function openPicPopup(item) {
  viewPic.src = item.target.src;
  viewPic.alt = item.target.alt;
  viewPicSub.textContent = item.target.alt;
  openPopup(popupPicZoom);
}

function submitHandlerForm (evt) {
	evt.preventDefault();
  nameField.textContent = nameInput.value;
  jobField.textContent = jobInput.value;
  closePopup(popupEditProfile);
}

function render() {
  initialCards.forEach(renderCreateCard);
}

function likeCard (evt) {
  evt.target.classList.toggle('galery__like-button_active');
}

function deleteCard (evt) {
  evt.target.closest('.galery__element').remove();
}

function createCard(item) {
  const cardItem = templateCard.cloneNode(true);
  const cardImg = cardItem.querySelector('.galery__image');
  cardItem.querySelector('.galery__title').textContent = item.name;
  cardImg.alt = item.name;
  cardImg.src = item.link;
  cardItem.querySelector('.galery__like-button').addEventListener('click', likeCard);
  cardItem.querySelector('.galery__trash-button').addEventListener('click', deleteCard);
  cardImg.addEventListener('click', openPicPopup);
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
  const item = {
    name: cardName.value,
    link: cardLink.value
  }
  renderNewCard(item);
  el.target.reset();
  closePopup(popupAddCard);
}

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-button')) {
          closePopup(popup)
        }
    });
});

formElement.addEventListener('submit', submitHandlerForm);
profileEditButton.addEventListener('click', openEditProfilePopup);
addCardButton.addEventListener('click', openAddCardPopup);
formAddCard.addEventListener('submit', addNewCard);

render();
