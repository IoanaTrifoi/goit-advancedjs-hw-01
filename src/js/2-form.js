const FORM_KEY = 'feedback-form-state';
const form = document.querySelector('form');
const setStoredData = (data) => {
  try {
    localStorage.setItem(FORM_KEY, JSON.stringify(data));
  } catch (err) {
    console.log(err);
  }
};

const getStoredData = key => {
  try {
    const dataFromLS = localStorage.getItem(key);
    return dataFromLS ? JSON.parse(dataFromLS) : null;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const formData = {
  email: '',
  message: '',
};

const savedData = getStoredData(FORM_KEY);

if (savedData) {
  formData.email = savedData.email || '';
  formData.message = savedData.message || '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

const onFormFieldChange = event => {
  const { target: formField } = event;

  const fieldName = formField.name;
  const fieldValue = formField.value;

  formData[fieldName] = fieldValue;

  setStoredData(formData);
};

const onFeedbackFormSubmit = event => {
  event.preventDefault();

  
  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields!');
    return;
  }
  console.log('Submitted Data:', formData);
  localStorage.removeItem(FORM_KEY);
  formData.email = '';
  formData.message = '';
  event.currentTarget.reset();
};
form.addEventListener('input', onFormFieldChange);
form.addEventListener('submit', onFeedbackFormSubmit);
