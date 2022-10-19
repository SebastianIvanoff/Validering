const firstName = document.querySelector("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");
const form = document.getElementById("validationForm");
const errorElement = document.getElementById("errorMessage");


form.addEventListener("submit", (e) => {
e.preventDefault()

    validateInputs();

});

const setError =(element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage')

    errorDisplay.innerText = message;
    inputControl.classList.add('error')
    inputControl.classList.remove('succsess')
}

const setSuccess =(element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.errorMessage')

    errorDisplay.innerText = '';
    inputControl.classList.add('succsess')
    inputControl.classList.remove('error')
}
const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;


const validateInputs = () => {
    const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const repeatPasswordValue = repeatPassword.value.trim()

    if(firstNameValue === '') {
        setError(firstName, 'First Name is required')
        console.log(firstName, 'First Name is required')
    }else{
        setSuccess(firstName)
    }

    if(lastNameValue === '') {
        setError(lastName, 'Last Name is required')
        console.log(lastName, 'Last Name is required')
    }else{
        setSuccess(lastName)
    }

    if(emailValue === '') {
        setError(email, 'Email is required')
        console.log(email, 'Email is required')
    }else if(!regEx.test(emailValue)){
        setError(email, 'provide a valid Email')
    }
    else{
        setSuccess(email)
    }

    if(passwordValue === ''){
        setError(password, 'Password is required')
        console.log(password, 'Password is required')
    } else if(passwordValue.length < 6){
        setError(password, 'Password is too short')
    } else {
        setSuccess(password)
    }

    if(repeatPasswordValue === ''){
        setError(repeatPassword, 'Repeat Password')
        console.log(repeatPassword, 'Repeat Password')
    } else if(repeatPasswordValue !== passwordValue){
        setError(repeatPassword, 'Password does not match')
    } else {
        setSuccess(repeatPassword)
    }
}

// const user = {
//   firstName: firstNameValue,
//   lastName: lastNameValue,
//   email: emailValue,
//   password: passwordValue,
//   repeatPassword: repeatPasswordValue
// };

// console.log(user)