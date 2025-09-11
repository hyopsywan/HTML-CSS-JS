//reduce diminui arrays, acumulando valores começando de 0

const itens = [
    {preco: 10}
    {preco: 20}
    {preco: 30}
];

const precoTotal = itens.reduce((acumulador, item) => {
    return acumulador + item.preco;
}, 0);

console.log(precoTotal);