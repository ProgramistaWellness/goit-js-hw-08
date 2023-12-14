//  3. Po wysłaniu formularza wyczyść storage i pola formularza, a także wyloguj obiekt z polami email, message
//  i ich aktualnymi wartościami do konsoli.
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener(
  'input',
  throttle(() => {
    const savedForm = JSON.stringify({
      email: form.elements.email.value,
      message: form.elements.message.value,
    });

    localStorage.setItem('feedback-form-state', savedForm);
  }, 500)
);

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.length !== 0) {
    try {
      const loadedForm = localStorage.getItem('feedback-form-state');
      const loadedFormParsed = JSON.parse(loadedForm);
      form.elements.email.value = loadedFormParsed.email ?? '';
      form.elements.message.value = loadedFormParsed.message ?? '';
    } catch (error) {
      console.log(error.message);
    }
  }
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const {
    elements: { email, message },
  } = evt.currentTarget;
  const newSubmit = { email: email.value, message: message.value };
  console.log('Twoje dane :', newSubmit);
  email.value = '';
  message.value = '';
  localStorage.clear();
});
