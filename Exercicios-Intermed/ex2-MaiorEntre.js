// O maior entre três Números

const num = Number(prompt("Digite um número:"))
const num2 = Number(prompt("Digite o segundo número:"))
const num3 = Number(prompt("Digite um ultimo número:"))

//if(Number.IsNaN(num && num2 && num3)){
  //  alert("Números inválidos!")
//}else{
    if(num > num2 && num > num3){
        console.log(`${num} é maior que ${num2} e ${num3}`)
    }else{
        if(num2 > num && num2 > num3){
            console.log(`${num2} é maior que ${num} e ${num3}`)
        }else{
           // if(num === num2 && num2 === num3 && num3 === num || num)
            console.log(`${num3} é maior que ${num} e ${num2}`)    
        }
    }
//};