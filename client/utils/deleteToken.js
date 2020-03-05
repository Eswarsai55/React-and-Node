import setAuthorizationToken from "./setAuthorizationToken"

export default function deleteToken(){
  localStorage.removeItem('jwtToken');
  setAuthorizationToken(false);
}