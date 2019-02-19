const handleLogin = () => {
  const enteredUserName = document.querySelector("#username-login").value;
  const enteredPassword = document.querySelector("#password-login").value;
  getUserByUserName(enteredUserName)
    .then(user => {
      user = user[0];
      if (user.password === enteredPassword) {
        login(user.id)
      } else {
        console.warn("Password was incorrect")
      }
    })
}

// store the user's id in local storage
const login = (userId) => {
  sessionStorage.setItem("userId", userId)
}