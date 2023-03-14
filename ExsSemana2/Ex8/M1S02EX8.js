function buttonAdd() {
  var add = document.getElementById("add");
  var campos = document.getElementById("campos");
  var ultimoCampo = campos.lastElementChild;
  var ultimoValor = parseInt(ultimoCampo.querySelector(".product").value);

  if (ultimoValor === 0) {
    return add.innerHTML = "Você finalizou sua compra! ";
  } else if (isNaN(ultimoValor)){
    return alert ("Digite 0 no último campo para encerrar!");
  }

  var novoCampo = document.createElement("div");
  novoCampo.innerHTML = '<label>R$ <input class="product" type="number" placeholder="Produto '+ (campos.children.length + 1) + '"></label>';
  campos.appendChild(novoCampo);


}

function buttonTotal() {

  var totalProduct = document.getElementById('totalProduct');
  var campos = document.getElementsByClassName("product");
  var resultado = 0;
  for (var i = 0; i < campos.length; i++) {
    var valor = parseInt(campos[i].value);
    if (!isNaN(valor) && valor !== 0) {
      resultado += valor;
    }
  }
  totalProduct.innerText = `Total: R$ ${resultado}`;
}


function buttonTroco(){

  var trocoProduct = document.getElementById('trocoProduct');
  var campos = document.getElementsByClassName("product");
  var resultado = 0;
  for (var i = 0; i < campos.length; i++) {
    var valor = parseInt(campos[i].value);
    if (!isNaN(valor)) {
      resultado += valor;
    }
  }
  var subtrair = parseInt(document.getElementById("money").value);
  if (!isNaN(subtrair)) {
    var total= subtrair - resultado;
  } else {
    alert("Digite um valor válido para subtrair.");
  }
  trocoProduct.innerText = `Troco: R$ ${total}`;
}

var restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", function() {
  location.reload();
});