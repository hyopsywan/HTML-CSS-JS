//for Contagens

//Estrutura: for (início condição; incremento)
//Tabuada
for (let i = 1; i <= 10; i++){
    console.log(`7 x ${i} = ${7 * i}`)
};

//for..of não muito usado, mas percorre arays
const frutas = ["Maçã", "Banana", "Laranja", "Uva"]

for(const fruta of frutas){
    console.log("Fruta:", fruta)
};

// for...in Chave e objeto, também não muito usado, somente para coisas muito especificas

const pessoa = {nome: "Helo", cidade: "Santo Andre", idade: "34"}
for (const chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`)
};