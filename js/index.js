// VARIÁVEIS
var produtos = [
    {name: "Batata", price: 5, qnt: 50},
    {name: "Leite", price: 2.5, qnt: 12},
    {name: "Dieta", price: 0, qnt: 0}
];
var compras = [];
var venda = [];

// MENU
do {
  var op = prompt("---- Informe a opção ----\n\n1 - Produtos\n2 - Comprar\n3 - Vender\n4 - Relatorio\n0 - Sair");
  switch (op) {
    case '1': menuProd(); break;
    case '2': comprar(); break; 
    case '3': vender(); break;
    case '4': menuRel(); break;
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
        var z = prompt("CÓDIGO ---- NOME ----- PREÇO ----- QUANTIDADE\n"+mostrar()+"\n\nInforme o item a ser editado:");
        produtos[z].name = prompt("Informe o nome");
        produtos[z].price = parseFloat(prompt("Informe o preço:"));
        produtos[z].qnt = parseInt(prompt("Informe a quantidade:"));
        break;
            
      case '3':
        var w = prompt("CÓDIGO ---- NOME ----- PREÇO ----- QUANTIDADE\n"+mostrar()+"\n\nInforme o item a ser removido:");
        produtos.splice(produtos.indexOf(produtos[w]),1);
        break;
    }
  } while (opt != 0);
}
    
// RELATORIO
function menuRel() {
    do {
        var o = prompt("------RELATÓRIO------\n1 - Produtos\n2 - Compras\n3 - Vendas\n0 - Sair\n\nInforme a opção desejada:");
        switch (o) {
            case '1': alert("CÓDIGO ---- NOME ----- PREÇO ----- QUANTIDADE\n"+mostrar()); break;
            case '2': alert("CÓDIGO ---- NOME ----- PREÇO ----- QUANTIDADE\n"+mostrarCompra()); break;
            case '3': alert("CÓDIGO ---- NOME ----- PREÇO ----- QUANTIDADE\n"+mostrarVenda()); break;
        }
    } while (o != 0);
}

// MOSTRAR
function mostrar() {
    var prod = [];
    for (var x = 0; x < produtos.length; x++) {
        prod += x+"              "+produtos[x].name+"             "+produtos[x].price+"             "+produtos[x].qnt+"\n";
    }
    return prod;
}

// RELATÓRIO COMPRA
function mostrarCompra() {
    var prod = [];
    for (var y = 0; y < compras.length; y++) {
        prod += y+"              "+compras[y].name+"             "+compras[y].price+"             "+compras[y].qnt+"\n";
    }
    return prod;
}

// RELATÓRIO VENDA
function mostrarVenda() {
    var prod = [];
    for (var y = 0; y < compras.length; y++) {
        prod += y+"              "+venda[y].name+"             "+venda[y].price+"             "+venda[y].qnt+"\n";
    }
    return prod;
}

// COMPRAR
function comprar() {
    var produto = parseInt(prompt(mostrar()+"\n\nInforme o código do item a ser comprado:"));
    var quantidade = parseInt(prompt(mostrar()+"\n\nInforme a quantidade a ser comprada:"));
    produtos[produto].qnt = parseInt(produtos[produto].qnt)+quantidade; 
    compras.push({name: produtos[produto].name, price: produtos[produto].price, qnt: quantidade});
}

// VENDA
function vender() {
    var produto = parseInt(prompt(mostrar()+"\n\nInforme o código do item a ser vendido:"));
    var quantidade = parseInt(prompt(mostrar()+"\n\nInforme a quantidade a ser vendido:"));
    produtos[produto].qnt = parseInt(produtos[produto].qnt)-quantidade; 
    venda.push({name: produtos[produto].name, price: produtos[produto].price, qnt: quantidade});
}