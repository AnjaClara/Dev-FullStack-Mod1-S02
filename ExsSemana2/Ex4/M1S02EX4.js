let user = {
  username: '',
  email: '',
};

let userSaved = {
  name: 'Ana',
  emailNew: 'anaclaraguimaraes1@gmail.com',
};

let username = document.getElementById('username');
let email = document.getElementById('email');
let login = document.getElementById('login');

const handleChangeUsername = (event) => {user.username = event.target.value};
const handleChangeEmail = (event) => {user.email = event.target.value};

login.addEventListener('click', clickLogin);
username.addEventListener('change', handleChangeUsername);
email.addEventListener('change', handleChangeEmail);

function clickLogin(){

  if (user.username == userSaved.name && user.email == userSaved.emailNew && user.imagem == userSaved.img) {
    alert("Credenciais já existentes");  
    alert(`As credenciais com o usuário ${userSaved.name}, com o e-mail ${userSaved.emailNew} e imagem ${userSaved.img} foram salvas com sucesso!`); 
    return Save();

  }else {
  
    return Changed();

  }
};

function Save(){  

  localStorage.setItem('username', user.username);
  localStorage.setItem('email', user.email);

}

function Changed() {

  localStorage.removeItem('username');
  localStorage.removeItem('email');

  localStorage.setItem('username2', user.username);
  localStorage.setItem('email2', user.email);

  alert(`o usuário alterado é ${user.username} o email é ${user.email}`)

  alert('Dados alterados!');

}

const inpuImage = document.getElementById('imageInput')
const pictureImage = document.getElementById('image');

inpuImage.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    const readering = new FileReader();

    readering.readAsDataURL(file);

    if(file){
        const reader = new FileReader();
        reader.addEventListener('load',function(e){
            const thisReader = e.target;

            localStorage.setItem('imageInput', reader.result)

            const img = document.createElement('img');
            img.src = thisReader.result;
            img.classList.add('imageFixed');
            pictureImage.innerHTML ="";

            pictureImage.appendChild(img)

        })
        reader.readAsDataURL(file);
     }
})

// localStorage.clear()

