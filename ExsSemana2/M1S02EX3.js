let user = {
  username: '',
  password: ''
};

let userSaved = {
  name: 'JavaScript',
  senha: 'js1234'
};


let username = document.getElementById('username');
let password = document.getElementById('password');

const handleChangeUsername = (event) => {user.username = event.target.value};
const handleChangePassword = (event) => {user.password = event.target.value};

username.addEventListener('change', handleChangeUsername);
password.addEventListener('change', handleChangePassword);

let logout = document.querySelector('#logout');

logout.addEventListener('submit', event => {
  event.preventDefault();
  clickLogin();
})

localStorage.setItem('username', user.username);
localStorage.setItem('password', user.password);

function clickLogin(){
  const db = JSON.parse(localStorage.getItem('db'));

  if (user.username == db.name && user.password == db.senha) {
      location.href = './indexEX3p2.html';

  }else {
      alert("Credenciais incorretas");
}
};

window.onload = () => {
  localStorage.setItem('db',JSON.stringify(userSaved));
}

