const form = document.querySelector("#validationForm");
const btn = document.querySelector("#btn");

const validateText = (id) => {
  const input = document.querySelector(id);

  if (input.value.trim() === "" || input.value.length < 2) {
    return setError(input);
  } else {
    setSuccess(input);
  }
};

const validateEmail = (id) => {
  const email = document.querySelector(id);

  const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;

  if (email.value.trim() === "") {
    return setError(email);
  } else if (!regEx.test(email.value)) {
    return setError(email);
  } else {
    return setSuccess(email);
  }
};

const validatePassword = (id) => {
  const password = document.querySelector(id);

  if (input.value.trim().length === 0) {
    return setError(password);
  } else if(input.value.trim() < 6) {
    setError(password)
  } else {
    return setSuccess(password);
  }
};

const validateCheck = (id) => {
  const checkbox = document.querySelector(id);

  if (!checkbox.checked) {
    return setError(checkbox);
  } else {
    return setSuccess(checkbox);
  }
};

const setSuccess = (input) => {
  input.classList.remove("is-invalid");
  input.classList.add("is-valid");
  return true;
};

const setError = (input) => {
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");
  return false;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const errors = [];
  let i = 0;
  for (input of e.target) {
    const inputID = "#" + form[i].id;
    switch (input.type) {
      case "text":
        errors[i] = validateText(inputID);
        break;

      case "email":
        errors[i] = validateEmail(inputID);
        break;

      case "password":
        errors[i] = validatePassword(inputID);
        break;

      case "checkbox":
        errors[i] = validatePassword(inputID);

      default:
        break;
    }
    i++;
  }
  console.log(errors);

  if (errors.includes(false)) {
    console.log("error");
    return;
  } else {
    console.log("success");
  }
});
