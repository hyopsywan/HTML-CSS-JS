const produtos = [
    {nome: "X", preco: 10}
    {nome: "Y", preco: 30}
];

//promeiro fltramos apenas os produtoscom preco >20

const produtodCaros = produtos.filter(p => p.preco > 20); 

//depois usamos o map para pegar apenas os nomes

const nomesCaros = produtodCaros.map(p => p.nome);

console.log(nomesCaros);