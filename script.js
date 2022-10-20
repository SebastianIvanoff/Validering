const form = document.querySelector("#validationForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeatPassword");
const checkbox = document.querySelector("#terms");
const errorMessage = document.querySelector("errorMessage");

const validateNames = (input) => {
  const regExName = /^[a-zA-ZåäöÅÄÖ ,.'-]+$/u;
  if (input.value.trim() === "") {
    console.log("Du måste skriva in ett namn");
    input.classList.add("error");
    input.classList.remove("success");
    return false;
  } else if (input.value.length < 2) {
    console.log("namnet måste vara minst 2 tecken");
    input.classList.add("error");
    input.classList.remove("success");
    return false;
  } else if (!regExName.test(input.value)) {
    console.log("Kan inte använda siffror");
    input.classList.add("error");
    input.classList.remove("success");
  }
  input.classList.add("success");
  input.classList.remove("error");
  return true;
};

const validateEmail = (input) => {
  const regExEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
  if (email.value.trim() === "") {
    console.log("Du måste skriva in en email");
    input.classList.add("error");
    input.classList.remove("success");
    return false;
  } else if (!regExEmail.test(input.value)) {
    input.classList.add("error");
    input.classList.remove("success");
    return false;
  }
  input.classList.add("success");
  input.classList.remove("error");
  return true;
};

const validatePassword = (input) => {
  if (input.value.trim() === "") {
    console.log("Du måste skrva in ett lösenord");
    input.classList.add("error");
    input.classList.remove("success");
    return false;
  } else if (input.value.trim().length < 6) {
    console.log("Ditt lösenord bör var minst 6 tecken");
    input.classList.add("error");
    input.classList.remove("success");
    return false;
  }
  input.classList.add("success");
  input.classList.remove("error");
  return true;
};

const validateRepeatedPW = (input) => {
  if (input.value.trim() === "") {
    console.log("Du måste skriva in samma lösenord");
    input.classList.add("error");
    input.classList.remove("success");
    return false;
  } else if (input.value.trim() !== password.value.trim()) {
    console.log("Ditt lösenord matchar inte");
    input.classList.add("error");
    input.classList.remove("success");
    return false;
  }
  input.classList.add("success");
  input.classList.remove("error");
  return true;
};

const validateCheck = (input) => {
  if (!checkbox.checked) {
    console.log("Not Checked");
    input.classList.add("error");
    input.classList.remove("success");
  } else {
    console.log("Checked");
    input.classList.add("success");
    input.classList.remove("error");
    return true;
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const errors = [];
  
  for(let i = 0; i < form.length; i++){
    const inputId = '#' + form[i].id

    if(form[i].type === 'text'){
      errors[i] = validateNames(inputId)
    }
    else if (form[i].type === 'email'){
      errors[i] = validateEmail(inputId)
    }
    else if (form[i].type === 'password'){
      errors[i] = validatePassword(inputId)
    }

    else if (form[i].type === 'repeatPassword'){
      errors[i] = validatePassword(inputId)
    }

    else if (form[i].type === 'checkbox'){
      errors[i] = validateCheck(inputId)
    }

  }

  console.log(errors);

  if (errors.includes(false)) {
    console.log("Vi har fel i formuläret!");
    return
  } else {
    console.log("allt är bra");
  }
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   validateNames(firstName);
//   validateNames(lastName);
//   validateEmail(email);
//   validatePassword(password);
//   validateRepeatedPW(repeatPassword);
//   validateCheck(checkbox);

//   if (
//     validateNames(firstName) &&
//     validateNames(lastName) &&
//     validateEmail(email) &&
//     validatePassword(password) &&
//     validateRepeatedPW(repeatPassword) &&
//     validateCheck(checkbox)
//   ) {
//     const user = {
//       firstName: firstName.value.trim(),
//       lastName: lastName.value.trim(),
//       email: email.value.trim(),
//       password: password.value.trim(),
//       repeatPassword: repeatPassword.value.trim(),
//     };
//     console.log(user);
//   }
// });
