let start = document.getElementById('buttonStart');

start.addEventListener('click', clickStart);

let number = 10

function clickStart(){
  if(number == 0){
    console.log('Seu tempo acabou!! Tente novamente!!');
    clearTimeout(time);
  }else{
    number--
    console.log(number);  
  } 
  const time = setTimeout(clickStart,1000);
}



