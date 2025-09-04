//Calculadore simples

const num = Number(prompt("Digite seu primeiro número:"));
const num2 = Number(prompt("Digite seu segundoo número:"));
const oper = prompt("Digite uma das operações: + , - , / , *")

switch (oper) {
    case "+":
        const resultado = (num + num2)
                console.log(`Resultado:${resultado}`)
        break;            
    case "-":
        const resultado2 = (num - num2)
                console.log(`Resultado:${resultado2}`)
    case "/":
        const resultado3 = (num / num2)
                console.log(`Resultado:${resultado3}`)
    case "*":
        const resultado4 = (num * num2)
                console.log(`Resultado:${resultado4}`)       
};