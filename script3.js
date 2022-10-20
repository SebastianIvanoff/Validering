const form = document.querySelector("#validationForm");



const validateText = (id) => {
    const input = document.querySelector(id) 
  
    if(input.value.trim() === '') {
        console.log("Du måste skriva in ett namn");
      return setError(input)                  
    } 
    else if (input.value.length < 2) {
        console.log("namnet måste vara minst 2 tecken");
      return setError(input)
    }
    else {
      return setSuccess(input)
    }
  
  }
  
  const validateEmail = (id) => {
    const email = document.querySelector(id)
  
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/
  
    if(email.value.trim() === '') {
        console.log("Du måste skriva in en email");
      return setError(email)
    }
    else if(!regEx.test(email.value)) {
      return setError(email)
    }
    else {
      return setSuccess(email)
    }
  }
  
  const validatePassword = (id) => {
    const password = document.querySelector(id)

    if(password.value.trim().length === 0) {
        console.log('du måste skriva in ditt lösenord')
        return  setError(password)
  }
    else if (password.value.trim().length < 6) {
        console.log("Ditt lösenord bör var minst 6 tecken");
        setError(password)
  } else {
    setSuccess(password)
  }
  }

  const validateRepeatedPW = (id) => {
    const repeatPassword = document.querySelector(id)
    if(repeatPassword.value.trim() === ''){
        console.log("Du måste skriva in samma lösenord");
        setError(repeatPassword)
    } else if(repeatPassword.value.trim() !== password.value.trim()){
        console.log("Ditt lösenord matchar inte");
        setError(repeatPassword)
    }
    else{
        setSuccess(repeatPassword)
    }
  }

  const validateCheck = (id) => {
    const checkbox = document.querySelector(id)
    if(!checkbox.checked) {
      return setError(checkbox)
    }
    else {
      return setSuccess(checkbox)
    }
  
  
  }
  
  const setSuccess = (input) => {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    return true;
  }
  
  const setError = (input) => {       
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    input.focus();
    return false;
  }

  form.addEventListener('submit', e =>{
    e.preventDefault()

    const errors = [];

    for(let i = 0; i < form.length; i++){
       
        const inputId = '#' + form[i].id

        if(form[i].type === 'text'){
            errors[i] = validateText(inputId)
          }
          else if (form[i].type === 'email'){
            errors[i] = validateEmail(inputId)
          }
          else if (form[i].type === 'password'){
            errors[i] = validatePassword(inputId)
          }
      
          else if (form[i].type === 'password'){
            errors[i] = validateRepeatedPW(inputId)
          }
      
          else if (form[i].type === 'checkbox'){
            errors[i] = validateCheck(inputId)
          }
    }
    console.log(errors);

    if(errors.includes(false)) {
        console.log('vi har fel i formuläret!');
    } else{
        console.log('allt är jättebra och vi skickar till databasen')
    }
    const user = {
        firstName: firstName.value.trim(),
        lastName: lastName.value.trim(),
        email: email.value.trim(),
        password: password.value.trim(),
        repeatPassword: repeatPassword.value.trim(),
      };
      console.log(user);

  })