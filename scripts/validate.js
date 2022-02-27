const formSubmit = (event, form, button, inactiveButtonClass) => {
  event.preventDefault();
  checkButtonValidity(form, button, inactiveButtonClass);
}

const checkInputValidity = (form, input, inputErrorClass, errorClass) => {
  const errorMessage = form.querySelector(`#error-${input.id}`);
  if (input.validity.valid) {
    errorMessage.textContent = '';
    errorMessage.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
  } else {
    errorMessage.textContent = input.validationMessage;
    errorMessage.classList.add(errorClass);
    input.classList.add(inputErrorClass);
  }
}

const checkButtonValidity = (form, button, inactiveButtonClass) => {
  if (form.checkValidity()) {
    button.removeAttribute('disabled');
    button.classList.remove(inactiveButtonClass);
  } else {
    button.setAttribute('disabled', '');
    button.classList.add(inactiveButtonClass);
  }
}

function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass}) {
  const forms = document.querySelectorAll(formSelector);
  forms.forEach(form => {
    const inputs = form.querySelectorAll(inputSelector);
    const button = form.querySelector(submitButtonSelector);
    checkButtonValidity(form, button, inactiveButtonClass);
    form.addEventListener('submit', event => formSubmit(event, form, button, inactiveButtonClass));
    inputs.forEach(input => {
      input.addEventListener('input', (evt) => {
        checkInputValidity(form, input, inputErrorClass, errorClass);
        checkButtonValidity(form, button, inactiveButtonClass);
      });
    });
  })
}

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
