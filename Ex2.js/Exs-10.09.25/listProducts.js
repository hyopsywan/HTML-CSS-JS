const produtos = [
    {id: 1, nome: "Mouse", preco: 560},
    {id: 1, nome: "Teclado", preco: 360},
    {id: 1, nome: "Fone", preco: 700},
    {id: 1, nome: "Monitor", preco: 1200},
];

const produtosCaros = produtos.filter(produto => produto.preco > 500);

const mouse = produtos.find(produto => produto.nome  === "Mouse");

const nomesProdutos = produtos.map(produtos => produtos.nome);

const precoTotal = produtos.reduce((acumulador, produto) => {
    return acumulador + produtos.preco
}, 0);