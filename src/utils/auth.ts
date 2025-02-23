function getAuthToken() {
  console.log("token")
  return localStorage.getItem("token")
}

export default getAuthToken
