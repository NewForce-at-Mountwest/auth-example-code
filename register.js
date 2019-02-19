const handleRegister = () => {
  const nameVal = document.querySelector("#name-register").value
  const phoneVal = document.querySelector("#phone-register").value
  const emailVal = document.querySelector("#email-register").value
  const usernameVal = document.querySelector("#username-register").value
  const passwordVal = document.querySelector("#password-register").value

  const newUser = {
    name: nameVal,
    phone: phoneVal,
    email: emailVal,
    username: usernameVal,
    password: passwordVal
  }

  postNewUser(newUser)
    .then(parsedUser => {
      // Store the user's id in local storage
      login(parsedUser.id)
    })

}