// VARIÁVEIS
var produtos = [
    {name: "Batata", price: 5, qnt: 50},
    {name: "Leite", price: 2.5, qnt: 12},
    {name: "Dieta", price: 0, qnt: 0}
];

// MENU
do {
  var op = prompt("---- Informe a opção ----\n\n1 - Produtos\n2 - Mostrar\n0 - Sair");
  switch (op) {
    case '1': menuProd(); break;
    case '2': alert(mostrar()); break;
  }
}while(op != 0);

// PRODUTO
function menuProd() {
  do {
    var opt = prompt("Informe a Opção:\n\n1 - Cadastrar\n2 - Editar\n3 - Remover\n0 - Voltar");
    switch (opt) {
      case '1':
        var nome = prompt("Informe o nome:");
        var preco = parseFloat(prompt("Informe o preço:"));
        var quant = parseInt(prompt("Informe a quantidade:"));
        produtos.push({name: nome, price: preco, qnt: quant});
        break;
            
      case '2':
        var z = prompt(mostrar()+"\n\nInforme o item a ser editado:");
        produtos[z].name = prompt("Informe o nome");
        produtos[z].price = parseFloat(prompt("Informe o preço:"));
        produtos[z].qnt = parseInt(prompt("Informe a quantidade:"));
        break;
    }
  } while (opt != 0);
}

// MOSTRAR
function mostrar() {
    var prod = [];
    for (var y = 0; y < produtos.length; y++) {
        prod += y+"          "+produtos[y].name+"         "+produtos[y].price+"         "+produtos[y].qnt+"\n";
    }
    return prod;
}