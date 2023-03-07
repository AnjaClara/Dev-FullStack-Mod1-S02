let start = document.getElementById('buttonStart');

start.addEventListener('click', clickStart);

let number = 0.18;

function clickStart(){
  
  var j = 1;
  console.log(j, number.toFixed(2));

  for (var i = 2; i <= 50; i ++){
    number= number + 0.18;
    console.log(i, number.toFixed(2)); 
    // clearTimeout(time)
  }

}