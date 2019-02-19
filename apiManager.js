// --------- DB FUNCTIONS --------------//

const getSingleUser = (id) => {
  return fetch(`http://localhost:8088/users/${id}`)
    .then(userInfo => userInfo.json())
}

const getUserByUserName = (userName) => {
  return fetch(`http://localhost:8088/users?username=${userName}`)
    .then(user => user.json())
}

const postNewUser = (userObject) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userObject)
  })
    .then(userInfo => userInfo.json())
}