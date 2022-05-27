function useAuth() {

  var auth =false;
    if(localStorage.getItem('token')){
      auth = true
    }
    return auth;
}
  
export default useAuth;