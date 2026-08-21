const form = document.getElementById('signup-form');
const email = document.getElementById('email');
const country = document.getElementById('country');
const postalCode = document.getElementById('postal-code');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const statusMessage = document.getElementById('status-message');

const emailError = document.getElementById('email-error');
const countryError = document.getElementById('country-error');
const postalError = document.getElementById('postal-error');
const passwordError = document.getElementById('password-error');
const confirmError = document.getElementById('confirm-error');

// Field validation routines using Constraint Validation API
function validateEmail() {
  if (email.validity.valueMissing) {
    showError(email, emailError, 'Email address is required.');
    return false;
  } else if (email.validity.typeMismatch) {
    showError(email, emailError, 'Please enter a valid email address (e.g., user@example.com).');
    return false;
  }
  showSuccess(email, emailError);
  return true;
}

function validateCountry() {
  if (country.validity.valueMissing) {
    showError(country, countryError, 'Country is required.');
    return false;
  } else if (country.validity.tooShort) {
    showError(country, countryError, 'Country must be at least 2 characters long.');
    return false;
  }
  showSuccess(country, countryError);
  return true;
}

function validatePostalCode() {
  if (postalCode.validity.valueMissing) {
    showError(postalCode, postalError, 'Postal code is required.');
    return false;
  } else if (postalCode.validity.patternMismatch) {
    showError(postalCode, postalError, 'Enter a valid postal code format (3-10 characters).');
    return false;
  }
  showSuccess(postalCode, postalError);
  return true;
}

function validatePassword() {
  if (password.validity.valueMissing) {
    showError(password, passwordError, 'Password is required.');
    return false;
  } else if (password.validity.tooShort) {
    showError(password, passwordError, 'Password must be at least 8 characters long.');
    return false;
  }
  showSuccess(password, passwordError);
  
  // Re-check confirm password if already typed
  if (confirmPassword.value) validateConfirmPassword();
  return true;
}

function validateConfirmPassword() {
  if (confirmPassword.validity.valueMissing) {
    showError(confirmPassword, confirmError, 'Please confirm your password.');
    return false;
  } else if (confirmPassword.value !== password.value) {
    showError(confirmPassword, confirmError, 'Passwords do not match.');
    return false;
  }
  showSuccess(confirmPassword, confirmError);
  return true;
}

// Helper utility functions
function showError(input, errorContainer, message) {
  input.classList.add('invalid');
  input.classList.remove('valid');
  errorContainer.textContent = message;
}

function showSuccess(input, errorContainer) {
  input.classList.remove('invalid');
  input.classList.add('valid');
  errorContainer.textContent = '';
}

// Live inline listeners triggers as user types
email.addEventListener('input', validateEmail);
country.addEventListener('input', validateCountry);
postalCode.addEventListener('input', validatePostalCode);
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validateConfirmPassword);

// Submission handler
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const isEmailValid = validateEmail();
  const isCountryValid = validateCountry();
  const isPostalValid = validatePostalCode();
  const isPasswordValid = validatePassword();
  const isConfirmValid = validateConfirmPassword();

  const isFormValid = isEmailValid && isCountryValid && isPostalValid && isPasswordValid && isConfirmValid;

  if (isFormValid) {
    statusMessage.className = 'status-message success';
    statusMessage.textContent = '🖐️ High Five! Form submitted successfully!';
  } else {
    statusMessage.className = 'status-message error';
    statusMessage.textContent = 'Cannot submit: Please resolve all active errors and fill out required fields.';
  }
});