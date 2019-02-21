
// should get inputs from register form
// post them to db
// then log the user in
const handleRegister = () => {
  const nameVal = document.querySelector("#name-register").value
  const phoneVal = document.querySelector("#phone-register").value
  const emailVal = document.querySelector("#email-register").value
  const usernameVal = document.querySelector("#username-register").value
  const passwordVal = document.querySelector("#password-register").value

  const userObject = {
    name: nameVal,
    phone: phoneVal,
    email: emailVal,
    username: usernameVal,
    password: passwordVal
  }

  console.log(userObject);

  addNewUser(userObject)
  .then((parsedUser) => {
    console.log(parsedUser);
    sessionStorage.setItem("userId", parsedUser.id)
  })



}