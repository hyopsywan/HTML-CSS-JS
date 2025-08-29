//Operadores Relacionais

// > maior que
// < menor que
// <= menor ou igual
// >= maior ou igual
// == Igualdade sem verificar o tipo
// === Igualdade estrita, verifica o tipo
// != diferente sem verificar o tipo
// !== diferente com verificação de tipo


let numero = "2";
if(numero == 2){
    console.log("ok")

};

let bool1 = true;

if(bool1 == "true"){// bool não entra como string, pois é valor unico 
    console.log("Sim entrou no if")
};

let bool = true;

if(bool == true){// Dessa forma, com o mesmo valor da variavel, ele entra 
    console.log("Sim entrou no if")
};

//----------------------------------------------------

let var1 = "2"
let var2 = "4"
let bool2 = false

if( var1 == 3){
    console.log("A váriavel tem esse valor!")
}else{
    console.log("A váriavel não tem esse valor!")
};

if( bool2 == false){
    console.log("A váriavel tem esse valor!")
}else{
    console.log("A váriavel não tem esse valor!")
};

//Condicional aninhada

if( var1 == 2){
    console.log("A váriavel tem esse valor!")
    if(var2 == 4){
        console.log("A váriavel tem esse valor!")
    }else{
        console.log("A váriavel não tem esse valor!")
    }
}else{
    console.log("A váriavel não tem esse valor!")
};

// Condicional Diferente

console.log(1 != `1`); //false (os valores são iguais)
console.log(1 !== `1`); //true (os valres são diferentes)
