// should remove user id from session storage

const handleLogout = () => {
  sessionStorage.removeItem("userId")
}