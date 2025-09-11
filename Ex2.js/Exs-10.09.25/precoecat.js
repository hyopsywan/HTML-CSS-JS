const itens = [
    {nome: "Banana", categoria: "alimento", preco: 2}
    {nome: "caneta", categoria: "material", preco: 2}
    {nome: "caderno", categoria: "material", preco: 15}
];
const agrupados = itens.reduce((acc, item) => {
    //se não existe categoria ainda no acc, cria
    if(!acc[item.categoria]){
        acc[item.categoria] = 0
    };
    //soma dos precos do item na categoria correspondente
    acc[item.categoria] += item.preco

    return acc;
    //ja tem ali em cima que começa do 0, mas mesmo assim precisa por algo aqui, ent colocamos objt vazio: {}
}, {});

console.log(agrupados)