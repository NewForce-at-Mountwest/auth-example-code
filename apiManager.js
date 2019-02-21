// --------- DB FUNCTIONS --------------//

// get user by username
const getUserByUserName = (userName) => {
  return fetch(`http://localhost:8088/users?username=${userName}`)
  .then(r => r.json())
}


// const getMyTasks =(userIdParam) => {
//   return fetch(`http://localhost:8088/task?userId=${userIdParam}`)
//   .then(r=> r.json())
// }
// post new user

const addNewUser = (userObj) => {
return fetch("http://localhost:8088/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(userObj)
}).then(r => r.json())
}