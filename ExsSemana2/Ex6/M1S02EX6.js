let num = {
  numberUse: '',
};

let number = document.getElementById('numberUse');
let tabuada = document.getElementById('tabuada');

const handleChangeNumber = (event) => {num.numberUse = event.target.value};

number.addEventListener('change', handleChangeNumber);
tabuada.addEventListener('click', clickMultiplique);

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

function clickMultiplique(){

  const resultado = numeros.map( (numero) => {
    return numero * num.numberUse;
  });

console.log(`${num.numberUse} x ${numeros[0]} = `,resultado[0]);
console.log(`${num.numberUse} x ${numeros[1]} = `,resultado[1]);
console.log(`${num.numberUse} x ${numeros[2]} = `,resultado[2]);
console.log(`${num.numberUse} x ${numeros[3]} = `,resultado[3]);
console.log(`${num.numberUse} x ${numeros[4]} = `,resultado[4]);
console.log(`${num.numberUse} x ${numeros[5]} = `,resultado[5]);
console.log(`${num.numberUse} x ${numeros[6]} = `,resultado[6]);
console.log(`${num.numberUse} x ${numeros[7]} = `,resultado[7]);
console.log(`${num.numberUse} x ${numeros[8]} = `,resultado[8]);
console.log(`${num.numberUse} x ${numeros[9]} = `,resultado[9]);
console.log(`${num.numberUse} x ${numeros[10]} = `,resultado[10]);

}