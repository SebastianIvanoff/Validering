const form = document.querySelector("#validationForm");
const btn = document.querySelector("#btn");

const validateFirstName = (id) => {
  const firstName = document.querySelector(id);

  if (firstName.value.trim() === "" || firstName.value.length < 2) {
    return setError(firstName);
  } else {
    setSuccess(firstName);
  }
};

const validateLastName = (id) => {
  const lastName = document.querySelector(id);

  if (lastName.value.trim() === "" || lastName.value.length < 2) {
    return setError(lastName);
  } else {
    setSuccess(lastName);
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

  if (password.value.trim().length === 0) {
    return setError(password);
  } else if (password.value.trim() < 6) {
    setError(password);
  } else {
    return setSuccess(password);
  }
};

const validateRepeatedPW = (id) => {
  const repeatPassword = document.querySelector(id);

  if (repeatPassword.value.trim().length === 0) {
    return setError(repeatPassword);
  } else if (repeatPassword !== password) {
    setError(repeatPassword);
  } else {
    setSuccess(repeatPassword);
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

  for(let i = 0; i < form.length; i++) {

    const inputId = '#' + form[i].id 

    if(form[i].type === 'firstName'){
      errors[i] = validateFirstName(inputId)
    }
   else if(form[i].type === 'lastName'){
      errors[i] = validateLastName(inputId)
    }
    else if(form[i].type === 'email'){
      errors[i] = validateEmail(inputId)
    }
   else if(form[i].type === 'password'){
      errors[i] = validatePassword(inputId)
    }
   else if(form[i].type === 'repeatPassword'){
      errors[i] = validateFirstName(inputId)
    }
    else if(form[i].type === 'checkbox'){
      errors[i] = validateCheck(inputId)
    }
  }

  console.log(errors)

  if(errors.includes(true)){
    console.log('Vi har fel i formuläret!')
  }
  else{
    console.log('allt är bra')
  }})



  // let i = 0;
  // for (input of e.target) {
  //   const inputID = "#" + form[i].id;
  //   switch (inputID.type) {
  //     case "FirstName":
  //       errors[i] = validateFirstName(inputID);
  //       break;

  //     case "LastName":
  //       errors[i] = validateLastName(inputID);
  //       break;

  //     case "email":
  //       errors[i] = validateEmail(inputID);
  //       break;

  //     case "password":
  //       errors[i] = validatePassword(inputID);
  //       break;

  //     case "repeatPassword":
  //       errors[i] = validateRepeatedPW(inputID);
  //       break;

  //     case "checkbox":
  //       errors[i] = validatePassword(inputID);

  //     default:
  //       break;
  //   }
  //   i++;
  // }

