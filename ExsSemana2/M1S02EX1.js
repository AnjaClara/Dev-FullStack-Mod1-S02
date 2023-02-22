var aluno = [
  {
      nome: "Sidnei",
      altura: 185,
      idade: 22,
      sexo: "Masculino",
      sala: "C100",
      Matemática: 9.5,
  },
  {
      nome: "Ana Clara",
      altura: 171,
      idade: 21,
      sexo: "Feminino",
      sala: "C101",
      Matemática: 10,
  },
  {
      nome: "Claudia",
      altura: 154,
      idade: 24,
      sexo: "Feminino",
      sala: "C102",
      Matemática: 8.3,
  },
  {
      nome: "André",
      altura: 180,
      idade: 29,
      sexo: "Masculino",
      sala: "C103",
      Matemática: 10,
  },
  {
      nome: "Anderson",
      altura: 177,
      idade: 32,
      sexo: "Masculino",
      sala: "C104",
      Matemática: 4.2,
  },
];

console.log(aluno);

let total = 0;
let index = 0;

while(index < aluno.length){
  const { Matemática } = aluno[index];

  total += Matemática / 5;
  index++;
}

console.log("A média total dos alunos é:", total);

function resultado(aluno,nota){

  for (var i = 0; i < aluno.length; i++){
    if (nota >= 7){
      return `o(a) ${aluno} passou`;
    } else {
      return `o(a) ${aluno} não passou`;
    }
  }

}



console.log(resultado(aluno[0].nome, aluno[0].Matemática));
console.log(resultado(aluno[1].nome, aluno[1].Matemática));
console.log(resultado(aluno[2].nome, aluno[2].Matemática));
console.log(resultado(aluno[3].nome, aluno[3].Matemática));
console.log(resultado(aluno[4].nome, aluno[4].Matemática));