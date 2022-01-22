function submitForm(event) {
  event.preventDefault();
}

// ? popup validation error text
function showError(input,errorContainer,{inputErrorClass}){
  input.classList.add(inputErrorClass);
  errorContainer.style.visibility = '';
  errorContainer.textContent = input.validationMessage;
}

// ? popup validation error text
function hideError(input,errorContainer,{inputErrorClass}){
  input.classList.remove(inputErrorClass);
  errorContainer.style.visibility = 'hidden';
  errorContainer.textContent = '';
}

//? popup submit button validation
function toggleButton(form, {submitButtonSelector,inactiveButtonClass}){
  const button = form.querySelector(submitButtonSelector);
  console.log(button);
  const isFormValid = form.checkValidity();
  console.log('isFormValid=>',isFormValid);
  if (isFormValid){
    button.classList.remove(inactiveButtonClass);
    button.removeAttribute('disabled');
  }else{
    button.classList.add(inactiveButtonClass);
    button.setAttribute('disabled', true);
  }
}

function validateInput(form,input, classes){
  const errorContainer = form.querySelector(`#error_${input.id}`)
  if (input.validity.valid) {
    hideError(input,errorContainer,classes)
  }else{
    showError(input,errorContainer,classes)
  }
  toggleButton(form,classes)
}


function enableValidation({formSelector,inputSelector, ...rest}){
  const forms = document.querySelectorAll(formSelector);

  forms.forEach(form => {
    form.addEventListener('submit', submitForm);

    const inputs = form.querySelectorAll(inputSelector);
    inputs.forEach(input =>{
      input.addEventListener('input', ()=>{
        validateInput(form, input, rest);
      });
    });
    toggleButton(form, rest);
  });
};

enableValidation({
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  errorClass: ".popup__input_error-message",
  inputErrorClass: "popup__input_type_error",
  inactiveButtonClass: "popup__save_notvalid",
  submitButtonSelector: ".popup__save",
});

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });
