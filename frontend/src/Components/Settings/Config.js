const Config={
    api :'https://localhost:44344/api/',
    token : sessionStorage.getItem('token'),
    email : sessionStorage.email,
    Role: sessionStorage.getItem('role'),
    isUserLoggedin : sessionStorage.getItem('token') != null ? true : false

}

export default Config