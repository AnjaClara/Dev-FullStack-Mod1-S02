var user = {
  username: 'JavaScript',
  password: 'js1234'
}

let login = document.getElementById('login');
let username = document.getElementById('username');
let password = document.getElementById('password');

const handleChangeUsername = (event) => {user.name = event.target.value};
const handleChangePassword = (event) => {user.senha = event.target.value};

login.addEventListener('click', clickLogin);
username.addEventListener('change', handleChangeUsername);
password.addEventListener('change', handleChangePassword);

function clickLogin(){
  if (user.name == user.username && user.senha == user.password){
    return alert("Usuário Logado");
  }else {
    return alert("Credenciais Incorretas");
  }
}