// This module should contain a function to get inputs from the login form
// It should use the username to query the db and find the matching user
// Then it should check to make sure the passwords match
// Then it should log the user in (add its id to session storage)


const handleLogin = () => {
  const userNameVal = document.querySelector("#username-login").value;
  const passwordVal = document.querySelector("#password-login").value;
  getUserByUserName(userNameVal)
  .then((parsedUser) => {
    console.log(parsedUser[0].password)
    if(passwordVal === parsedUser[0].password){
      sessionStorage.setItem("userId", parsedUser[0].id)

      const taskToPost = {
        name: "Mow the lawn",
        dueDate: "Tomorrow",
        userId: sessionStorage.getItem("userId")
      }

      console.log(taskToPost);
    } else {
      console.warn("ur wrong")
    }
  })
}



